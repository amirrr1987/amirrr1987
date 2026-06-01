import gsap from "gsap";

type TiltOptions = {
  max?: number;
  perspective?: number;
  scale?: number;
};

export function useCardTilt(
  target: Ref<HTMLElement | null | undefined>,
  options: TiltOptions = {},
) {
  const { max = 10, perspective = 900, scale = 1.02 } = options;
  let quickX: gsap.QuickToFunc;
  let quickY: gsap.QuickToFunc;

  const onMove = (e: MouseEvent) => {
    const el = target.value;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    quickX((-y * max).toFixed(2));
    quickY((x * max).toFixed(2));
  };

  const onEnter = () => {
    gsap.to(target.value, { scale, duration: 0.35, ease: "power2.out" });
  };

  const onLeave = () => {
    quickX(0);
    quickY(0);
    gsap.to(target.value, {
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  onMounted(() => {
    const el = target.value;
    if (!el || import.meta.server) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.set(el, { transformPerspective: perspective, transformStyle: "preserve-3d" });
    quickX = gsap.quickTo(el, "rotationX", { duration: 0.45, ease: "power2.out" });
    quickY = gsap.quickTo(el, "rotationY", { duration: 0.45, ease: "power2.out" });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
  });

  onUnmounted(() => {
    const el = target.value;
    if (!el) return;
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseenter", onEnter);
    el.removeEventListener("mouseleave", onLeave);
  });
}
