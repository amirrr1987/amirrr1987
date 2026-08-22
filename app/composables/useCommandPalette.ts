export function useCommandPalette() {
  const open = useState("command-palette-open", () => false);

  function toggle() {
    open.value = !open.value;
  }

  function close() {
    open.value = false;
  }

  return { open, toggle, close };
}
