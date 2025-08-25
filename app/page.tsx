"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Heart, MapPin, Calendar, Camera, Mail, Sparkles, Lock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

// Enhanced floating elements
const MagicalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating hearts with different sizes and speeds */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-300/40"
          initial={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 800,
            rotate: 0,
            scale: 0.3 + Math.random() * 0.7,
          }}
          animate={{
            y: -100,
            rotate: [0, 360, 720],
            x: [
              typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
              typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
              typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
            ],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 1.5,
          }}
        >
          <Heart className="w-6 h-6 fill-current drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Floating stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-yellow-300/30"
          initial={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
            rotate: 0,
            scale: 0.5 + Math.random() * 0.5,
          }}
          animate={{
            rotate: 360,
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          <Star className="w-4 h-4 fill-current" />
        </motion.div>
      ))}

      {/* Magical sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
          initial={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Gradient orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, ${
              ["#ec4899", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"][i]
            } 0%, transparent 70%)`,
          }}
          initial={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
          }}
          animate={{
            x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  )
}

// Enhanced password gate with magical effects
const PasswordGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.toLowerCase() === "nuestroamor" || password === "8años") {
      onUnlock()
    } else {
      setError("Contraseña incorrecta. Pista: nuestro sentimiento más fuerte 💕")
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      <MagicalBackground />

      {/* Animated background pattern */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-300/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className={`bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl max-w-md w-full border border-pink-200 relative z-10 ${
          isShaking ? "animate-pulse" : ""
        }`}
      >
        {/* Magical glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="text-center mb-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Lock className="w-16 h-16 text-pink-400 mx-auto mb-6 drop-shadow-lg" />
          </motion.div>

          <motion.h2
            className="text-3xl font-serif text-gray-800 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Entrada Secreta
          </motion.h2>

          <motion.p
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Este diario está protegido por nuestro amor infinito
          </motion.p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
            <Input
              type="password"
              placeholder="Escribe la llave de nuestro corazón..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center border-pink-200 focus:border-pink-400 bg-white/80 backdrop-blur-sm text-lg py-3"
            />
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-red-400 text-sm text-center bg-red-50 p-3 rounded-lg"
            >
              {error}
            </motion.p>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ✨ Abrir Nuestro Diario Mágico ✨
              </motion.span>
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}

// Main content component with enhanced animations
const LoveStoryContent = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])

  // Sample memories for the love map with enhanced data and adjusted coordinates for a world map
  const worldMemories = [
    {
      id: 1,
      title: "Punta del Este 💕",
      country: "Uruguay",
      date: "Todos los años",
      description:
        "El lugar al que nos encanta ir, donde nos pusimos de novios y donde año a año festejamos nuestro aniversario. ¡Este año festejaremos en Londres!",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 24, y: 78 }, // Adjusted for provided map
      color: "from-pink-400 to-rose-400",
      icon: "💕",
      memories: ["Primer beso", "Aniversarios", "Atardeceres mágicos"],
    },
    {
      id: 2,
      title: "Buenos Aires & Bariloche 🏔️",
      country: "Argentina",
      date: "2017-2018",
      description:
        "Primer viaje juntos! BSAS a ver a San Lorenzo, después Lollapalooza (a full monster ajjaja) y Coldplay. También Bariloche con viajun a full ski, yo con la melena gigante y la cara hinchada jeje",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 22, y: 73 }, // Adjusted for provided map
      color: "from-blue-400 to-cyan-400",
      icon: "🏔️",
      memories: ["San Lorenzo", "Lollapalooza", "Ski en Bariloche"],
    },
    {
      id: 3,
      title: "Brasil Tour 🇧🇷",
      country: "Brasil",
      date: "2018-2022",
      description:
        "Porto Alegre, Floripa, Rio, São Paulo, Porto Galinhas... Distintos viajes, muchos futboleros y otros de vacaciones. Muchas experiencias, entre una cosa y otra fuimos a muchos lugares de Brasil!",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 28, y: 60 }, // Adjusted for provided map
      color: "from-green-400 to-emerald-400",
      icon: "🇧🇷",
      memories: ["Playas increíbles", "Fútbol", "Caipiriñas"],
    },
    {
      id: 4,
      title: "Irlanda & Londres 🍀",
      country: "Reino Unido/Irlanda",
      date: "2017 & 2024",
      description:
        "Donde se plantó la semilla en enero/febrero 2017 y ahora volvemos a regarla más jeje. ¡Círculo completo de nuestro amor!",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 46, y: 30 }, // Adjusted for provided map
      color: "from-emerald-400 to-green-400",
      icon: "🍀",
      memories: ["Semilla del amor", "Paisajes verdes", "Círculo completo"],
    },
    {
      id: 5,
      title: "Qatar ✨",
      country: "Qatar",
      date: "2022",
      description:
        "VIAJE mega con 20 añitos mansos en Qatar jeje. Tremenda experiencia, todos los lujos. ¡Inolvidable!",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 60, y: 45 }, // Adjusted for provided map
      color: "from-yellow-400 to-amber-400",
      icon: "✨",
      memories: ["Lujo total", "Desierto", "20 añitos"],
    },
    {
      id: 6,
      title: "España 🇪🇸",
      country: "España",
      date: "2023",
      description:
        "Destino mega compris, recorridos y Honest Greens. Como olvidar la dormida en el hall del hotel rancio y desp en Mac, donde el Mr. Correcto no se quería dormir jajaja",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 48, y: 38 }, // Adjusted for provided map
      color: "from-red-400 to-orange-400",
      icon: "🇪🇸",
      memories: ["Honest Greens", "Hotel rancio", "Mr. Correcto"],
    },
    {
      id: 7,
      title: "Grecia 🏛️",
      country: "Grecia",
      date: "2023",
      description:
        "Tremendo viajun romántico, playas, casitas pintorescas, cuatris y gyms como nos gusta jee. Santorini y Paros nuestros favs!",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 55, y: 40 }, // Adjusted for provided map
      color: "from-blue-400 to-indigo-400",
      icon: "🏛️",
      memories: ["Santorini", "Paros", "Cuatris y gyms"],
    },
    {
      id: 8,
      title: "USA Tour 🇺🇸",
      country: "Estados Unidos",
      date: "2019-2023",
      description:
        "NY, Boston, Washington y Miami. Como buenos consumistas de nuestros lugares favoritos en el mundo, muy buena comida (por más que haya un Mc por cuadra), ropita y compras siempre, gyms, autos y la verdadera buena vida. SUPLES Y MAS SUPLES!",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 18, y: 35 }, // Adjusted for provided map
      color: "from-purple-400 to-pink-400",
      icon: "🇺🇸",
      memories: ["NYC", "Miami", "SUPLES Y MAS SUPLES"],
    },
  ]

  // Timeline data
  const timeline = [
    {
      year: "2016",
      title: "El Comienzo Mágico",
      description: "Dos corazones que se encontraron en el momento perfecto del universo",
      highlights: ["Primer encuentro", "Primera cita", "Primer beso"],
      color: "from-pink-200 to-rose-200",
      emoji: "✨",
    },
    {
      year: "2017",
      title: "Descubriendo el Amor",
      description: "Cada día era una nueva aventura contigo, mi compañera perfecta",
      highlights: ["Primer 'te amo'", "Conocer a las familias", "Primer viaje"],
      color: "from-purple-200 to-pink-200",
      emoji: "💕",
    },
    {
      year: "2018",
      title: "Creciendo Juntos",
      description: "Aprendimos que el amor también es paciencia, comprensión y risas",
      highlights: ["Mudanza juntos", "Adoptar rutinas", "Primeros desafíos"],
      color: "from-blue-200 to-purple-200",
      emoji: "🌱",
    },
    {
      year: "2019",
      title: "Fortaleciendo Lazos",
      description: "Nuestro amor se volvió más profundo, más fuerte, más verdadero",
      highlights: ["Aniversario especial", "Nuevos proyectos", "Más viajes"],
      color: "from-teal-200 to-blue-200",
      emoji: "💪",
    },
    {
      year: "2020",
      title: "Juntos en Todo",
      description: "Un año difícil que nos unió más que nunca, demostrando nuestro amor",
      highlights: ["Cuarentena juntos", "Apoyo mutuo", "Planes futuros"],
      color: "from-green-200 to-teal-200",
      emoji: "🤝",
    },
    {
      year: "2021",
      title: "Nuevos Horizontes",
      description: "Explorando nuevos sueños y metas compartidas, siempre juntos",
      highlights: ["Nuevos hobbies", "Crecimiento personal", "Más aventuras"],
      color: "from-yellow-200 to-green-200",
      emoji: "🌅",
    },
    {
      year: "2022",
      title: "Consolidando Sueños",
      description: "Construyendo el futuro que siempre imaginamos, paso a paso",
      highlights: ["Logros profesionales", "Hogar perfecto", "Estabilidad"],
      color: "from-orange-200 to-yellow-200",
      emoji: "🏗️",
    },
    {
      year: "2023",
      title: "Amor Maduro",
      description: "Celebrando todo lo que hemos construido con nuestras propias manos",
      highlights: ["7 años cumplidos", "Nuevas metas", "Amor incondicional"],
      color: "from-red-200 to-orange-200",
      emoji: "👑",
    },
  ]

  const sections = [
    { id: "inicio", title: "Inicio", icon: Heart },
    { id: "mapa", title: "Mapa del Amor", icon: MapPin },
    { id: "timeline", title: "Nuestra Historia", icon: Calendar },
    { id: "galeria", title: "Recuerdos", icon: Camera },
    { id: "cartas", title: "Cartas del Corazón", icon: Mail },
    { id: "futuro", title: "Nuestro Futuro", icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      <MagicalBackground />

      {/* Parallax background */}
      <motion.div className="fixed inset-0 opacity-30" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-purple-100/50 to-blue-100/50" />
      </motion.div>

      {/* Enhanced Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-pink-200 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-4 md:space-x-8">
            {" "}
            {/* Adjusted spacing for mobile */}
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => setCurrentSection(index)}
                className={`flex items-center space-x-2 px-3 py-2 md:px-4 md:py-3 rounded-full transition-all duration-300 ${
                  currentSection === index
                    ? "bg-gradient-to-r from-pink-200 to-purple-200 text-pink-800 shadow-lg scale-110"
                    : "text-gray-600 hover:text-pink-600 hover:bg-pink-50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div animate={currentSection === index ? { rotate: 360 } : {}} transition={{ duration: 0.5 }}>
                  <section.icon className="w-5 h-5" />
                </motion.div>
                <span className="hidden md:inline text-sm font-medium">{section.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Content Sections */}
      <div className="pt-24 relative z-10">
        <AnimatePresence mode="wait">
          {currentSection === 0 && (
            <motion.section
              key="inicio"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen flex items-center justify-center p-4"
            >
              <div className="text-center max-w-5xl">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, y: 100 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1.2, type: "spring", stiffness: 100 }}
                  className="mb-12"
                >
                  <motion.h1
                    className="text-7xl md:text-9xl font-serif text-gray-800 mb-6 relative"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                        "0 0 40px rgba(139, 92, 246, 0.3)",
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    8 años contigo
                    {/* Floating hearts around title */}
                    {[...Array(6)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="absolute text-pink-400 text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          x: [0, i % 2 === 0 ? 50 : -50],
                          y: [0, -30],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.5,
                        }}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${20 + (i % 2) * 60}%`,
                        }}
                      >
                        💕
                      </motion.span>
                    ))}
                  </motion.h1>

                  <motion.div
                    className="w-40 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto mb-8 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 160, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />

                  <motion.p
                    className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    Un diario de nuestro amor, escrito con el corazón
                  </motion.p>
                </motion.div>

                <motion.div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-pink-200 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-pink-400 rounded-full"
                        animate={{
                          x: [0, 100, 0],
                          y: [0, -50, 0],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>

                  <motion.p
                    className="text-lg md:text-xl text-gray-700 italic mb-6 md:mb-8 leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    "Querida Jose, este es nuestro espacio sagrado donde cada recuerdo cobra vida. Aquí están guardados
                    todos los momentos que han hecho de nosotros la historia de amor más hermosa que conozco. Cada
                    página de este diario digital late con el ritmo de nuestros corazones unidos."
                  </motion.p>

                  <motion.p
                    className="text-right text-gray-600 font-serif text-base md:text-lg relative z-10"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3 }}
                  >
                    Con todo mi amor infinito, Juan 💕✨
                  </motion.p>
                </motion.div>

                {/* Call to action */}
                <motion.div
                  className="text-center mt-12 md:mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.button
                    onClick={() => setCurrentSection(1)}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(236, 72, 153, 0.3)",
                        "0 10px 30px rgba(139, 92, 246, 0.3)",
                        "0 10px 30px rgba(236, 72, 153, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ✨ Comenzar Nuestro Viaje ✨
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>
          )}

          {currentSection === 1 && (
            <motion.section
              key="mapa"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen p-4 py-12 relative overflow-hidden"
            >
              {/* Enhanced animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full"
                    initial={{
                      x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
                      y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
                      scale: 0,
                    }}
                    animate={{
                      x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1200,
                      y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
                      scale: [0, 1, 0],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                  className="text-center mb-12 md:mb-16"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <motion.h2
                    className="text-5xl md:text-8xl font-serif text-gray-800 mb-6 md:mb-8 relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    Mapa de Nuestras Aventuras
                    {/* Orbiting elements around title */}
                    {[...Array(4)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="absolute text-xl md:text-3xl"
                        animate={{
                          rotate: 360,
                          x: [0, 100 * Math.cos((i * Math.PI) / 2), 0],
                          y: [0, 100 * Math.sin((i * Math.PI) / 2), 0],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          delay: i * 2,
                        }}
                        style={{
                          left: "50%",
                          top: "50%",
                        }}
                      >
                        {["🌍", "✈️", "💕", "🗺️"][i]}
                      </motion.span>
                    ))}
                  </motion.h2>

                  <motion.div
                    className="w-40 md:w-48 h-2 bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-green-400 mx-auto mb-6 md:mb-8 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 192, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />

                  <motion.p
                    className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Cada punto marca una aventura épica, un recuerdo imborrable en nuestro mapa del amor 🗺️💕
                  </motion.p>
                </motion.div>

                <motion.div
                  className="relative bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl border border-pink-200 overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0, y: 100 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {/* World map background image */}
                  <motion.div className="relative w-full h-[400px] md:h-[700px] rounded-2xl overflow-hidden shadow-inner">
                    <img
                      src="/images/map.jpg"
                      alt="World Map"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Animated connection lines with enhanced effects */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
                          <stop offset="25%" stopColor="#8b5cf6" stopOpacity="0.4" />
                          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                          <stop offset="75%" stopColor="#10b981" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
                        </linearGradient>

                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {worldMemories.map((memory, index) => {
                        const nextMemory = worldMemories[index + 1]
                        if (!nextMemory) return null

                        return (
                          <motion.line
                            key={`line-${memory.id}`}
                            x1={`${memory.coordinates.x}%`}
                            y1={`${memory.coordinates.y}%`}
                            x2={`${nextMemory.coordinates.x}%`}
                            y2={`${nextMemory.coordinates.y}%`}
                            stroke="url(#connectionGradient)"
                            strokeWidth="3"
                            strokeDasharray="8,4"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, delay: index * 0.3 + 1 }}
                          />
                        )
                      })}
                    </svg>

                    {/* Enhanced memory points */}
                    {worldMemories.map((memory, index) => (
                      <Dialog key={memory.id}>
                        <DialogTrigger asChild>
                          <motion.button
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                            style={{
                              left: `${memory.coordinates.x}%`,
                              top: `${memory.coordinates.y}%`,
                            }}
                            initial={{
                              scale: 0,
                              rotate: -360,
                              opacity: 0,
                            }}
                            animate={{
                              scale: 1,
                              rotate: 0,
                              opacity: 1,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.2 + 0.5,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{
                              scale: 1.4,
                              rotate: 10,
                              transition: { duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {/* Multiple pulsing ring effects */}
                            {[...Array(3)].map((_, ringIndex) => (
                              <motion.div
                                key={ringIndex}
                                className={`absolute inset-0 rounded-full bg-gradient-to-r ${memory.color} opacity-20`}
                                animate={{
                                  scale: [1, 2 + ringIndex * 0.5, 1],
                                  opacity: [0.2, 0.05, 0.2],
                                }}
                                transition={{
                                  duration: 3 + ringIndex,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                  delay: ringIndex * 0.5,
                                }}
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  marginLeft: "-40px",
                                  marginTop: "-40px",
                                }}
                              />
                            ))}

                            {/* Main enhanced point */}
                            <motion.div
                              className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${memory.color} rounded-full border-4 border-white shadow-2xl flex items-center justify-center group-hover:shadow-3xl transition-all duration-300`}
                              animate={{
                                boxShadow: [
                                  "0 10px 30px rgba(0,0,0,0.2)",
                                  "0 15px 40px rgba(0,0,0,0.3)",
                                  "0 10px 30px rgba(0,0,0,0.2)",
                                ],
                              }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <motion.span
                                className="text-xl md:text-2xl"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              >
                                {memory.icon}
                              </motion.span>
                            </motion.div>

                            {/* Enhanced floating label */}
                            <motion.div
                              className="absolute -top-12 md:-top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-2xl shadow-xl border border-pink-200 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
                              initial={{ y: 20, scale: 0.8 }}
                              whileHover={{ y: 0, scale: 1 }}
                            >
                              <span className="text-sm font-bold text-gray-800">{memory.title}</span>
                              <div className="text-xs text-gray-500 mt-1">{memory.date}</div>
                            </motion.div>
                          </motion.button>
                        </DialogTrigger>

                        <DialogContent className="max-w-lg md:max-w-2xl">
                          <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <motion.img
                              src={memory.image}
                              alt={memory.title}
                              className="w-full h-64 md:h-80 object-cover rounded-2xl mb-6 md:mb-8 shadow-2xl"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.6 }}
                            />

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                              <div className="flex items-center justify-center mb-4 md:mb-6">
                                <motion.span
                                  className="text-3xl md:text-4xl mr-3 md:mr-4"
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  {memory.icon}
                                </motion.span>
                                <div>
                                  <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-1 md:mb-2">
                                    {memory.title}
                                  </h3>
                                  <p className="text-sm md:text-lg text-gray-500">
                                    {memory.date} • {memory.country}
                                  </p>
                                </div>
                              </div>

                              <motion.div
                                className={`w-full h-1 md:h-2 bg-gradient-to-r ${memory.color} rounded-full mb-4 md:mb-6`}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                              />

                              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                                {memory.description}
                              </p>

                              {/* Memory highlights */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                                {memory.memories.map((mem, i) => (
                                  <motion.div
                                    key={i}
                                    className="bg-gradient-to-r from-pink-50 to-purple-50 p-2 md:p-3 rounded-xl border border-pink-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                  >
                                    <span className="text-sm font-medium text-gray-700">{mem}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </motion.div>
                        </DialogContent>
                      </Dialog>
                    ))}

                    {/* Enhanced animated travel path */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3 }}
                    >
                      {/* Multiple animated elements */}
                      <motion.div
                        className="absolute text-2xl md:text-3xl filter drop-shadow-lg"
                        initial={{
                          x: `${worldMemories[0]?.coordinates.x}%`,
                          y: `${worldMemories[0]?.coordinates.y}%`,
                        }}
                        animate={{
                          x: worldMemories.map((m) => `${m.coordinates.x}%`),
                          y: worldMemories.map((m) => `${m.coordinates.y}%`),
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 12,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        ✈️
                      </motion.div>

                      {/* Heart trail */}
                      <motion.div
                        className="absolute text-lg md:text-xl text-pink-400"
                        initial={{
                          x: `${worldMemories[0]?.coordinates.x}%`,
                          y: `${worldMemories[0]?.coordinates.y}%`,
                        }}
                        animate={{
                          x: worldMemories.map((m) => `${m.coordinates.x}%`),
                          y: worldMemories.map((m) => `${m.coordinates.y}%`),
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 12,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          delay: 1,
                        }}
                      >
                        💕
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced stats section */}
                  <motion.div
                    className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                  >
                    {[
                      {
                        number: worldMemories.length,
                        label: "Destinos Épicos",
                        icon: "🌍",
                        color: "from-blue-400 to-cyan-400",
                      },
                      { number: "8", label: "Años Viajando", icon: "⏰", color: "from-purple-400 to-pink-400" },
                      { number: "∞", label: "Recuerdos Creados", icon: "💭", color: "from-green-400 to-emerald-400" },
                      { number: "2", label: "Corazones Unidos", icon: "💕", color: "from-red-400 to-rose-400" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className={`bg-gradient-to-r ${stat.color} p-4 md:p-6 rounded-2xl text-center shadow-xl border border-white/50 text-white`}
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ delay: 2.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <motion.div
                          className="text-2xl md:text-3xl mb-2 md:mb-3"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        >
                          {stat.icon}
                        </motion.div>
                        <motion.div
                          className="text-2xl md:text-3xl font-bold mb-1 md:mb-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2.5 + index * 0.1, type: "spring" }}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="text-xs md:text-sm font-medium opacity-90">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* Continue with other sections... */}
          {currentSection === 2 && (
            <motion.section
              key="timeline"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen p-4 py-12"
            >
              <div className="container mx-auto max-w-5xl">
                <motion.div
                  className="text-center mb-12 md:mb-16"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h2
                    className="text-5xl md:text-7xl font-serif text-gray-800 mb-4 md:mb-6"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    Nuestra Historia Mágica
                  </motion.h2>
                  <motion.div
                    className="w-40 md:w-48 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto mb-6 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 192 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <motion.p
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    Ocho años de amor, crecimiento y aventuras que nos convirtieron en quienes somos hoy
                  </motion.p>
                </motion.div>

                <div className="space-y-8 md:space-y-12">
                  {timeline.map((year, index) => (
                    <motion.div
                      key={year.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                      className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                      <motion.div
                        className={`w-full md:w-2/3 relative`}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className={`bg-gradient-to-r ${year.color} border-0 shadow-2xl overflow-hidden`}>
                          <CardContent className="p-6 md:p-8 relative">
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-10">
                              {[...Array(10)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-6 h-6 bg-white rounded-full"
                                  animate={{
                                    x: [0, 50, 0],
                                    y: [0, -30, 0],
                                    opacity: [0, 0.3, 0],
                                  }}
                                  transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.4,
                                  }}
                                  style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                  }}
                                />
                              ))}
                            </div>

                            <div className="flex items-center mb-4 md:mb-6 relative z-10">
                              <motion.div
                                className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl mr-4 md:mr-6"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              >
                                <span className="text-lg md:text-xl font-bold text-gray-800">{year.year}</span>
                              </motion.div>
                              <div>
                                <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-1 md:mb-2">
                                  {year.title}
                                </h3>
                                <motion.span
                                  className="text-3xl md:text-4xl"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  {year.emoji}
                                </motion.span>
                              </div>
                            </div>

                            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 italic leading-relaxed relative z-10">
                              {year.description}
                            </p>

                            <div className="space-y-2 md:space-y-3 relative z-10">
                              {year.highlights.map((highlight, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center bg-white/30 backdrop-blur-sm rounded-lg p-2 md:p-3"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                                >
                                  <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                                  >
                                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-600 mr-2 md:mr-3 fill-current" />
                                  </motion.div>
                                  <span className="text-sm md:text-base font-medium text-gray-800">{highlight}</span>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Add similar enhanced animations for other sections... */}
          {currentSection === 3 && (
            <motion.section
              key="galeria"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen p-4 py-12"
            >
              <div className="container mx-auto max-w-7xl">
                <motion.div
                  className="text-center mb-12 md:mb-16"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h2
                    className="text-5xl md:text-7xl font-serif text-gray-800 mb-4 md:mb-6"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                        "0 0 40px rgba(139, 92, 246, 0.3)",
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Galería de Recuerdos Mágicos
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Momentos capturados en el tiempo, emociones que durarán para siempre
                  </motion.p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
                      whileHover={{
                        scale: 1.1,
                        rotate: Math.random() * 10 - 5,
                        zIndex: 10,
                        transition: { duration: 0.3 },
                      }}
                      className="relative group cursor-pointer"
                    >
                      <motion.div
                        className="bg-white p-2 md:p-3 rounded-2xl shadow-xl transform transition-all duration-300 group-hover:shadow-2xl"
                        style={{ rotate: `${Math.random() * 6 - 3}deg` }}
                        whileHover={{ rotate: 0 }}
                      >
                        <img
                          src={`/romantic-couple-memory-.png?key=np203&key=jta8z&height=250&width=250&query=romantic couple memory ${i + 1}`}
                          alt={`Recuerdo ${i + 1}`}
                          className="w-full h-32 md:h-40 object-cover rounded-xl"
                        />

                        {/* Magical overlay */}
                        <motion.div
                          className="absolute inset-2 md:inset-3 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Heart className="w-6 h-6 md:w-8 md:h-8 text-white fill-current drop-shadow-lg" />
                          </motion.div>
                        </motion.div>

                        {/* Sparkle effects */}
                        {[...Array(3)].map((_, sparkleIndex) => (
                          <motion.div
                            key={sparkleIndex}
                            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: sparkleIndex * 0.3,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="text-center mt-12 md:mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.button
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(236, 72, 153, 0.3)",
                        "0 15px 40px rgba(139, 92, 246, 0.4)",
                        "0 10px 30px rgba(236, 72, 153, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 inline" />✨ Recuerdo Sorpresa Mágico ✨
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>
          )}

          {currentSection === 4 && (
            <motion.section
              key="cartas"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -90 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen p-4 py-12"
            >
              <div className="container mx-auto max-w-6xl">
                <motion.div
                  className="text-center mb-12 md:mb-16"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h2
                    className="text-5xl md:text-7xl font-serif text-gray-800 mb-4 md:mb-6"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    Cartas del Corazón
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Palabras que nacen del alma y vuelan directo al corazón
                  </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -50, rotateY: -15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <Card className="bg-white/90 backdrop-blur-xl shadow-2xl border border-pink-200 overflow-hidden relative">
                      {/* Animated background */}
                      <div className="absolute inset-0 opacity-5">
                        {[...Array(15)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-8 h-8 text-pink-400"
                            animate={{
                              x: [0, 100, 0],
                              y: [0, -50, 0],
                              rotate: 360,
                              opacity: [0, 0.3, 0],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.5,
                            }}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                          >
                            💕
                          </motion.div>
                        ))}
                      </div>

                      <CardContent className="p-8 md:p-10 relative z-10">
                        <motion.div
                          className="text-center mb-6 md:mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <motion.div
                            animate={{
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          >
                            <Mail className="w-12 h-12 md:w-16 md:h-16 text-pink-400 mx-auto mb-4 md:mb-6 drop-shadow-lg" />
                          </motion.div>
                          <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-1 md:mb-2">Para Jose</h3>
                          <p className="text-sm md:text-base text-gray-500">De Juan, con amor infinito</p>
                        </motion.div>

                        <motion.div
                          className="space-y-4 md:space-y-6 text-gray-700 font-serif leading-relaxed text-base md:text-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          <motion.p
                            className="italic"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                          >
                            "Mi querida Jose, han pasado 8 años desde que nuestros caminos se cruzaron, y cada día
                            contigo ha sido un regalo del universo. Eres la melodía que acompaña mis días y la luz que
                            ilumina mis noches más oscuras."
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                          >
                            "Contigo he aprendido que el amor verdadero no es solo una emoción, sino una decisión que
                            tomamos cada día. Gracias por elegirme una y otra vez, por ser mi compañera de aventuras y
                            mi refugio en las tormentas."
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                          >
                            "Cada viaje, cada risa, cada momento de silencio compartido ha tejido la historia más
                            hermosa que podría imaginar. Eres mi presente perfecto y mi futuro soñado."
                          </motion.p>

                          <motion.p
                            className="text-right font-bold text-pink-600"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6 }}
                          >
                            Con todo mi amor infinito, Juan 💕✨
                          </motion.p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <Card className="bg-white/90 backdrop-blur-xl shadow-2xl border border-purple-200 overflow-hidden relative">
                      {/* Animated background */}
                      <div className="absolute inset-0 opacity-5">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-6 h-6 text-purple-400"
                            animate={{
                              rotate: 360,
                              scale: [1, 1.5, 1],
                              opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.4,
                            }}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                          >
                            ⭐
                          </motion.div>
                        ))}
                      </div>

                      <CardContent className="p-8 md:p-10 relative z-10">
                        <motion.div
                          className="text-center mb-6 md:mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          >
                            <Heart className="w-12 h-12 md:w-16 md:h-16 text-purple-400 mx-auto mb-4 md:mb-6 fill-current drop-shadow-lg" />
                          </motion.div>
                          <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-1 md:mb-2">
                            Nuestros Poemas
                          </h3>
                          <p className="text-sm md:text-base text-gray-500">Versos que definen nuestro amor</p>
                        </motion.div>

                        <motion.div
                          className="space-y-6 md:space-y-8 text-gray-700 font-serif leading-relaxed text-base md:text-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        >
                          <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                          >
                            <p className="italic text-lg md:text-xl mb-3 md:mb-4 leading-relaxed">
                              "Dos corazones, un latido,
                              <br />
                              Dos almas, un destino,
                              <br />
                              Ocho años de camino
                              <br />Y un amor que no se olvida."
                            </p>
                          </motion.div>

                          <motion.div
                            className="border-t border-purple-200 pt-4 md:pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                          >
                            <p className="text-center italic text-base md:text-lg leading-relaxed">
                              "En cada amanecer contigo,
                              <br />
                              Descubro un nuevo motivo
                              <br />
                              Para agradecer al destino
                              <br />
                              Por tenerte como testigo
                              <br />
                              De esta historia de amor
                              <br />
                              Que escribimos con el corazón."
                            </p>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {currentSection === 5 && (
            <motion.section
              key="futuro"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen p-4 py-12"
            >
              <div className="container mx-auto max-w-7xl">
                <motion.div
                  className="text-center mb-12 md:mb-16"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h2
                    className="text-5xl md:text-7xl font-serif text-gray-800 mb-4 md:mb-6"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(139, 92, 246, 0.3)",
                        "0 0 40px rgba(236, 72, 153, 0.3)",
                        "0 0 20px rgba(139, 92, 246, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Nuestro Futuro Mágico
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Los sueños que construiremos juntos, paso a paso, con amor infinito
                  </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {[
                    {
                      year: "2025",
                      dream: "Nuestro primer hogar propio",
                      icon: "🏠",
                      color: "from-pink-400 to-rose-400",
                    },
                    {
                      year: "2026",
                      dream: "Viaje épico a Europa que tanto soñamos",
                      icon: "✈️",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      year: "2027",
                      dream: "Tal vez un pequeño compañero peludo",
                      icon: "🐕",
                      color: "from-blue-400 to-purple-400",
                    },
                    {
                      year: "2028",
                      dream: "Celebrar 10 años de amor puro",
                      icon: "💍",
                      color: "from-green-400 to-blue-400",
                    },
                    {
                      year: "2029",
                      dream: "Nuevas aventuras por descubrir",
                      icon: "🌟",
                      color: "from-yellow-400 to-green-400",
                    },
                    {
                      year: "2030",
                      dream: "Seguir escribiendo nuestra historia",
                      icon: "📖",
                      color: "from-red-400 to-yellow-400",
                    },
                  ].map((future, index) => (
                    <motion.div
                      key={future.year}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="relative group"
                    >
                      <Card
                        className={`bg-gradient-to-br ${future.color} border-0 shadow-2xl h-full text-white overflow-hidden relative`}
                      >
                        {/* Magical background effects */}
                        <div className="absolute inset-0 opacity-20">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-4 h-4 bg-white rounded-full"
                              animate={{
                                x: [0, 50, 0],
                                y: [0, -30, 0],
                                opacity: [0, 0.6, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.3,
                              }}
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                            />
                          ))}
                        </div>

                        <CardContent className="p-6 md:p-8 text-center relative z-10">
                          <motion.div
                            className="text-4xl md:text-5xl mb-4 md:mb-6"
                            animate={{
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.2,
                            }}
                          >
                            {future.icon}
                          </motion.div>

                          <motion.h3
                            className="text-xl md:text-2xl font-serif mb-2 md:mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.15 + 0.3 }}
                          >
                            {future.year}
                          </motion.h3>

                          <motion.p
                            className="text-base md:text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 + 0.5 }}
                          >
                            {future.dream}
                          </motion.p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="text-center mt-12 md:mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <Card className="bg-white/90 backdrop-blur-xl shadow-2xl border border-pink-200 max-w-2xl md:max-w-3xl mx-auto overflow-hidden relative">
                    {/* Magical sparkles */}
                    <div className="absolute inset-0">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            x: Math.random() * 100,
                            y: Math.random() * 100,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.1,
                          }}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                    </div>

                    <CardContent className="p-8 md:p-12 relative z-10">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 mx-auto mb-4 md:mb-6" />
                      </motion.div>

                      <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4 md:mb-6">
                        Sorpresa Final Mágica
                      </h3>

                      <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 italic leading-relaxed">
                        "Hay algo muy especial esperándote, mi amor... pero eso es una sorpresa que solo el tiempo
                        revelará. Cada día contigo es un regalo, y tengo muchos más preparados para ti 😉✨"
                      </p>

                      <motion.button
                        className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          boxShadow: [
                            "0 15px 40px rgba(236, 72, 153, 0.4)",
                            "0 20px 50px rgba(139, 92, 246, 0.5)",
                            "0 15px 40px rgba(236, 72, 153, 0.4)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Lock className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 inline" />✨ Descubrir Sorpresa Mágica ✨
                      </motion.button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function LoveStoryWebsite() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  return <>{!isUnlocked ? <PasswordGate onUnlock={() => setIsUnlocked(true)} /> : <LoveStoryContent />}</>
}
