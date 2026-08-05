import gsap from 'gsap'

type ScrollRevealOptions = {
  selector?: string
  y?: number
  scale?: number
  stagger?: number
  duration?: number
  start?: string
}

export function useGsapScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    selector = '[data-reveal]',
    y = 40,
    scale = 0.96,
    stagger = 0.1,
    duration = 0.85,
    start = 'top 88%'
  } = options

  let ctx: gsap.Context | undefined

  onMounted(() => {
    if (!import.meta.client) return

    ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector)
      if (!targets.length) return

      gsap.set(targets, { opacity: 0, y, scale })

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: targets[0]?.parentElement ?? targets[0],
          start,
          once: true
        }
      })
    })
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
