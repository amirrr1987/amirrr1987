import gsap from "gsap";

type RevealOptions = {
  selector?: string;
  y?: number;
  stagger?: number;
  delay?: number;
  duration?: number;
};

export function useGsapReveal(options: RevealOptions = {}) {
  const {
    selector = "[data-reveal]",
    y = 28,
    stagger = 0.12,
    delay = 0.1,
    duration = 0.9,
  } = options;

  onMounted(() => {
    const targets = document.querySelectorAll<HTMLElement>(selector);
    if (!targets.length) return;

    gsap.from(targets, {
      opacity: 0,
      y,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      clearProps: "opacity,transform",
    });
  });
}
