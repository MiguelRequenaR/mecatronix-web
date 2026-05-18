import { useEffect, useState } from "react"
import { Play, X } from "lucide-react"
import projectVideo from "@/assets/videos/project1.mp4"


export default function ProjectVideoButton() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-1/2 z-50 flex w-14 -translate-y-1/2 flex-col items-center justify-center gap-3 rounded-full border border-primary bg-white/95 py-4 text-center text-xs font-black lett uppercase text-primary shadow-xl shadow-slate-900/10 backdrop-blur transition hover:bg-primary hover:text-white cursor-pointer"
        aria-label="Abrir modal de proyectos"
      >
        <h4
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          className="whitespace-nowrap md:text-base hidden md:block"
        >
          Proyectos
        </h4>
        <Play className="h-5 w-5" />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video de proyectos"
        >
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full bg-black">
              <video
                src={projectVideo}
                controls
                muted
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
