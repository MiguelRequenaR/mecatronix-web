import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layout/MainLayout"
import ScrollToTop from "@/utils/ScrollToTop"
import HomePage from "@/features/home"
import AboutPage from "@/features/about"
import ServicesPage from "@/features/services"
import ContactPage from "@/features/contact"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    })
  })

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
