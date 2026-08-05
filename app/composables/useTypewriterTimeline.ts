import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

type TypewriterStep = {
  target: Ref<HTMLElement | null>
  text: string
  duration?: number
  offset?: string
}

export function useTypewriterTimeline(steps: TypewriterStep[]) {
  onMounted(() => {
    const tl = gsap.timeline()

    steps.forEach((step, index) => {
      if (!step.target.value) return

      tl.to(
        step.target.value,
        {
          duration: step.duration ?? (index === 0 ? 0.8 : 0.6),
          text: step.text,
          ease: 'none',
          opacity: 1
        },
        index === 0 ? undefined : step.offset ?? '+=0.2'
      )
    })

    return tl
  })
}
