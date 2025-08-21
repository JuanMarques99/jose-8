"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Play, Pause, X, Maximize2, Minimize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CarouselProps {
  images: string[]
  videos?: string[]
  className?: string
  showFullscreen?: boolean
}

export function Carousel({ images, videos = [], className, showFullscreen = false }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isVideo, setIsVideo] = React.useState(false)
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  
  const allMedia = [...images, ...videos]
  const currentMedia = allMedia[currentIndex]
  const isCurrentVideo = videos.includes(currentMedia)

  React.useEffect(() => {
    if (isCurrentVideo && isPlaying) {
      const video = document.querySelector(`video[data-index="${currentIndex}"]`) as HTMLVideoElement
      if (video) {
        video.play()
      }
    }
  }, [currentIndex, isCurrentVideo, isPlaying])

  React.useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      if (!isVideo) {
        setCurrentIndex((prev) => (prev + 1) % allMedia.length)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, isVideo, allMedia.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length)
    setIsVideo(false)
    setIsPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length)
    setIsVideo(false)
    setIsPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsVideo(videos.includes(allMedia[index]))
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    if (isCurrentVideo) {
      const video = document.querySelector(`video[data-index="${currentIndex}"]`) as HTMLVideoElement
      if (video) {
        if (isPlaying) {
          video.pause()
        } else {
          video.play()
        }
      }
    }
    setIsPlaying(!isPlaying)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  if (allMedia.length === 0) {
    return (
      <div className={cn("flex items-center justify-center h-64 bg-gray-100 rounded-lg", className)}>
        <p className="text-gray-500">No hay medios disponibles</p>
      </div>
    )
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main media display - Fixed dimensions */}
      <div className="relative w-full h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] bg-black rounded-2xl overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {isCurrentVideo ? (
              <video
                data-index={currentIndex}
                src={currentMedia}
                className="w-full h-full object-cover"
                controls={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={goToNext}
                loop={false}
                muted={false}
              />
            ) : (
              <img
                src={currentMedia}
                alt={`Media ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Overlay controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          {/* Top controls */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            {showFullscreen && (
              <Button
                variant="secondary"
                size="sm"
                onClick={toggleFullscreen}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            )}
          </div>

          {/* Center play/pause button for videos */}
          {isCurrentVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={togglePlayPause}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 w-16 h-16 rounded-full"
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
              </Button>
            </div>
          )}

          {/* Bottom controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={goToPrevious}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={goToNext}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Media counter */}
            <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
              {currentIndex + 1} / {allMedia.length}
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 rounded-full w-10 h-10 p-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 rounded-full w-10 h-10 p-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Thumbnail navigation */}
      {allMedia.length > 1 && (
        <div className="mt-4 md:mt-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm md:text-base font-medium text-gray-700">Galería de Medios</h4>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                disabled={isCurrentVideo}
                className="text-xs md:text-sm"
              >
                {isPlaying ? <Pause className="h-3 w-3 mr-1" /> : <Play className="h-3 w-3 mr-1" />}
                {isPlaying ? "Pausar" : "Reproducir"}
              </Button>
            </div>
          </div>
          
          <div className="flex space-x-2 overflow-x-auto carousel-thumbnails pb-2">
            {allMedia.map((media, index) => {
              const isVideo = videos.includes(media)
              const isActive = index === currentIndex
              
              return (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "relative flex-shrink-0 w-16 md:w-20 h-16 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105",
                    isActive 
                      ? "border-pink-500 shadow-lg shadow-pink-200" 
                      : "border-gray-200 hover:border-pink-300"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isVideo ? (
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  ) : (
                    <img
                      src={media}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                  
                  {/* Video indicator */}
                  {isVideo && (
                    <div className="absolute top-1 right-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                      🎥
                    </div>
                  )}
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-pink-500/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      )}

      {/* Fullscreen modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="w-full h-full flex items-center justify-center">
                {isCurrentVideo ? (
                  <video
                    src={currentMedia}
                    className="max-w-full max-h-full object-contain"
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={currentMedia}
                    alt={`Fullscreen ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
