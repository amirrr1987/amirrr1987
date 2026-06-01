import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

type HeroRefs = {
  logoWrap?: HTMLElement | null;
  logoEl: SVGElement | null | undefined;
  availabilityWrap: HTMLElement | null;
  nameText: HTMLElement | null;
  nameCursor: HTMLElement | null;
  titleText: HTMLElement | null;
  titleCursor: HTMLElement | null;
  descriptionText: HTMLElement | null;
  descCursor: HTMLElement | null;
  revealTargets: HTMLElement[];
};

type HeroContent = {
  name: string;
  title: string;
  description: string;
};

export function useHeroEntrance(refs: () => HeroRefs, content: HeroContent) {
  onMounted(() => {
    if (!import.meta.client) return;

    gsap.registerPlugin(TextPlugin);

    const r = refs();
    gsap.set(r.revealTargets, { opacity: 0, y: 28 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (r.logoEl) {
      tl.fromTo(
        r.logoEl,
        { opacity: 0, scale: 0.45, rotation: -28, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "elastic.out(1, 0.35)",
        },
      );
    }

    tl.to(r.availabilityWrap, { opacity: 1, y: 0, duration: 0.45 }, "-=0.65");

    tl.to(
      r.nameText,
      { duration: 1.1, text: content.name, ease: "none", opacity: 1 },
      "+=0.1",
    );

    tl.call(() => splitTextPop(r.nameText), undefined, "+=0.05");

    tl.to(
      r.titleText,
      { duration: 0.85, text: content.title, ease: "none", opacity: 1 },
      "+=0.15",
    );

    tl.to(
      r.descriptionText,
      { duration: 2, text: content.description, ease: "none", opacity: 1 },
      "+=0.12",
    );

    tl.to(
      r.revealTargets,
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, ease: "back.out(1.3)" },
      "+=0.15",
    );

    tl.to(
      [r.nameCursor, r.titleCursor, r.descCursor],
      { opacity: 0, duration: 0.45, repeat: -1, yoyo: true },
      "-=0.35",
    );

    const floatTarget = r.logoWrap ?? r.logoEl;
    if (floatTarget instanceof HTMLElement) {
      floatTarget.classList.add("hero-logo-float");
    }
  });
}

function splitTextPop(el: HTMLElement | null) {
  if (!el || import.meta.server) return;

  const text = el.textContent?.trim() ?? "";
  if (!text) return;

  el.innerHTML = text
    .split("")
    .map((char) =>
      char === " "
        ? `<span class="inline-block">&nbsp;</span>`
        : `<span class="split-char inline-block">${char}</span>`,
    )
    .join("");

  const chars = el.querySelectorAll<HTMLElement>(".split-char");
  gsap.from(chars, {
    y: 18,
    opacity: 0,
    rotateX: -70,
    duration: 0.55,
    stagger: 0.025,
    ease: "back.out(2)",
    transformOrigin: "50% 100%",
  });
}
