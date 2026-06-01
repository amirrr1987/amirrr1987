import gsap from "gsap";

const ROLES = ["Vue.js", "Nuxt", "TypeScript", "UI Motion", "Three.js"];

export function useRotatingRole(el: Ref<HTMLElement | null>) {
  let timer: ReturnType<typeof setInterval> | null = null;
  let index = 0;

  onMounted(() => {
    if (!import.meta.client || !el.value) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timer = setInterval(() => {
      const node = el.value;
      if (!node) return;

      index = (index + 1) % ROLES.length;
      const next = ROLES[index];

      gsap.to(node, {
        opacity: 0,
        y: -10,
        filter: "blur(4px)",
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          node.textContent = next;
          gsap.fromTo(
            node,
            { opacity: 0, y: 12, filter: "blur(6px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.4, ease: "back.out(2)" },
          );
        },
      });
    }, 2600);
  });

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });
}
