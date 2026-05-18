import { Outlet } from "react-router-dom"
import NavBar from "@/components/NavBar"
import Fotter from "@/components/Fotter"
import CallToAction from "@/components/CallToAction"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import ProjectVideoButton from "@/components/ProjectVideoButton"
import { useLenis } from "@/hooks/useLenis"

export default function MainLayout() {
  useLenis();
  return (
    <div>
      <NavBar />
      <main className="pt-15 md:pt-20">
        <Outlet />
      </main>
      <CallToAction />
      <Fotter />
      <FloatingWhatsApp />
      <ProjectVideoButton />
    </div>
  )
}
