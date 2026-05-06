import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = window.__lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
