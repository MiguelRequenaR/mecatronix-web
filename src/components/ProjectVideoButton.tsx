import { useEffect, useRef, useState } from "react"
import { Play, X, ArrowLeft, ArrowRight } from "lucide-react"
import project1 from "@/assets/videos/project1.mp4"
import project2 from "@/assets/videos/project2.mp4"
import project3 from "@/assets/videos/project3.mp4"

const videos = [
  { id: 1, src: project1, title: "Proyecto 1" },
  { id: 2, src: project2, title: "Proyecto 2" },
  { id: 3, src: project3, title: "Proyecto 3" },
]

export default function ProjectVideoButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const goTo = (index: number) => {
    // Pausa y reinicia el video actual
    const current = videoRefs.current[currentIndex]
    if (current) {
      current.pause()
      current.currentTime = 0
    }
    setCurrentIndex(index)
  }

  const handlePrev = () => goTo(currentIndex === 0 ? videos.length - 1 : currentIndex - 1)
  const handleNext = () => goTo(currentIndex === videos.length - 1 ? 0 : currentIndex + 1)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex w-14 flex-col items-center justify-center gap-3 rounded-full border border-primary bg-white/95 py-4 text-center text-xs font-black uppercase text-primary shadow-xl shadow-slate-900/10 backdrop-blur transition hover:bg-primary hover:text-white cursor-pointer"
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
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full bg-black">
              {videos.map((video, index) => (
                <video
                  key={video.id}
                  ref={(el) => { videoRefs.current[index] = el }}
                  src={video.src}
                  controls
                  className={`h-full w-full object-contain ${index === currentIndex ? "block" : "hidden"}`}
                />
              ))}
            </div>

            {videos.length > 1 && (
              <div className="flex items-center justify-between bg-black/80 px-6 py-3">
                <button onClick={handlePrev} className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/25 transition cursor-pointer" aria-label="Video anterior">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white text-sm font-medium">{videos[currentIndex].title}</span>
                  <div className="flex gap-2">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`h-2 rounded-full border border-white transition-all ${currentIndex === index ? "bg-white w-4" : "bg-white/40 w-2"}`}
                        aria-label={`Ir al video ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <button onClick={handleNext} className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/25 transition cursor-pointer" aria-label="Video siguiente">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}