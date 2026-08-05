import gsap from 'gsap'

export function useAnimatedCounter(
  target: Ref<HTMLElement | null | undefined>,
  endValue: number,
  options: {
    suffix?: string
    duration?: number
    decimals?: number
    immediate?: boolean
  } = {}
) {
  const { suffix = '', duration = 1.8, immediate = false } = options
  const display = ref(`0${suffix}`)

  onMounted(() => {
    if (!import.meta.client || !target.value) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      display.value = `${endValue}${suffix}`
      return
    }

    const counter = { val: 0 }
    const tweenConfig: gsap.TweenVars = {
      val: endValue,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        display.value = `${Math.round(counter.val)}${suffix}`
      }
    }

    const onComplete = () => {
      if (!target.value) return
      target.value.classList.add('counter-done')
      gsap.fromTo(
        target.value,
        { scale: 1 },
        { scale: 1.08, duration: 0.2, yoyo: true, repeat: 1, ease: 'power2.out' }
      )
    }

    if (immediate) {
      gsap.to(counter, { ...tweenConfig, onComplete })
    } else {
      gsap.to(counter, {
        ...tweenConfig,
        onComplete,
        scrollTrigger: {
          trigger: target.value,
          start: 'top 90%',
          once: true
        }
      })
    }
  })

  return { display }
}
