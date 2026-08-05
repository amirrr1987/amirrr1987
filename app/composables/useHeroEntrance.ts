import gsap from 'gsap'

type HeroRefs = {
  logoEl?: SVGElement | null
  heroContent?: HTMLElement | null
  revealTargets: HTMLElement[]
}

export function useHeroEntrance(refs: () => HeroRefs) {
  onMounted(() => {
    if (!import.meta.client) return

    const r = refs()
    gsap.set(r.revealTargets, { opacity: 0, y: 20 })
    if (r.heroContent) gsap.set(r.heroContent, { opacity: 0, y: 24 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    if (r.logoEl) {
      tl.fromTo(
        r.logoEl,
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      )
    }

    if (r.heroContent) {
      tl.to(r.heroContent, { opacity: 1, y: 0, duration: 0.85 }, '-=0.5')
    }

    tl.to(
      r.revealTargets,
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' },
      '-=0.35'
    )
  })
}
