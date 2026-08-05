export function useMouseParallax(
  target: Ref<HTMLElement | null | undefined>,
  intensity = 18
) {
  const onMove = (e: MouseEvent) => {
    const el = target.value
    if (!el) return
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const dx = ((e.clientX - cx) / cx) * intensity
    const dy = ((e.clientY - cy) / cy) * intensity
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  const onLeave = () => {
    const el = target.value
    if (el) el.style.transform = 'translate(0px, 0px)'
  }

  onMounted(() => {
    const el = target.value
    if (!el || import.meta.server) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    el.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseleave', onLeave)
  })
}
