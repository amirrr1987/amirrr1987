export function useButtonRipple(target: Ref<HTMLElement | null | undefined>) {
  const onClick = (e: MouseEvent) => {
    const el = target.value
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    el.style.setProperty('--ripple-x', `${x}%`)
    el.style.setProperty('--ripple-y', `${y}%`)

    el.classList.remove('ripple-active')
    void el.offsetWidth
    el.classList.add('ripple-active')
  }

  onMounted(() => {
    target.value?.addEventListener('click', onClick)
  })

  onUnmounted(() => {
    target.value?.removeEventListener('click', onClick)
  })
}
