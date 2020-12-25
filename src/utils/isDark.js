const isDark = () => {
  const prefersColorScheme = window.matchMedia(`(prefers-color-scheme: dark)`)
    .matches
    ? "dark"
    : "light"
  const localTheme = localStorage.getItem("theme")
  const initialTheme = localTheme || prefersColorScheme

  return initialTheme === "dark"
}

export default isDark
