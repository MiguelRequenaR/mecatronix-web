import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import AOS from "aos"

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = window.__lenis
    if (lenis) {
      lenis.scrollTo(0, { duration: 0 })
    } else {
      window.scrollTo(0, 0)
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        AOS.refresh()
      })
    })
  }, [pathname])

  return null
}
