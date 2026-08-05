/** @deprecated Use useGsapScrollReveal for scroll-triggered reveals */
export function useGsapReveal(
  options: Parameters<typeof useGsapScrollReveal>[0] = {}
) {
  return useGsapScrollReveal(options)
}
