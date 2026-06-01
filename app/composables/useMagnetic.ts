type MagneticOptions = {
  strength?: number;
};

export function useMagnetic(
  target: Ref<HTMLElement | null | undefined>,
  options: MagneticOptions = {},
) {
  const { strength = 0.35 } = options;

  const onMove = (e: MouseEvent) => {
    const el = target.value;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    const el = target.value;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  onMounted(() => {
    const el = target.value;
    if (!el || import.meta.server) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    el.style.transition = "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)";
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
  });

  onUnmounted(() => {
    const el = target.value;
    if (!el) return;
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
  });
}
