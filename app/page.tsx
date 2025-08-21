"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Heart, MapPin, Calendar, Camera, Mail, Sparkles, Lock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Carousel } from "@/components/ui/carousel"
import { getTravelMedia } from "@/lib/travel-media"

// Enhanced floating elements
import Image from "next/image"

const MagicalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating hearts with different sizes and speeds */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-300/40"
          initial={{
            x: Math.random() * 100,
            y: 100 + Math.random() * 50,
            rotate: 0,
            scale: 0.3 + Math.random() * 0.7,
          }}
          animate={{
            y: -100,
            rotate: [0, 360, 720],
            x: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 1.5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
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
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
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
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
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
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
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
    if (password.toLowerCase() === "vuvuzela" || password === "jojolita") {
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
              x: Math.random() * 100,
              y: Math.random() * 100,
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
      title: "Punta del Este 💕 y otros del interior",
      country: "Uruguay",
      date: "Todos los años",
      description:
        "Nuestro lugar, donde nos pusimos de novios, muchos años del monomabiente y ahora mega upgrade al surfside jeee. Este año toco Londonnn. Tambien otros viajes al interior (Colonia, Paysandu y alguno mas seguro)",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 24, y: 78 }, // Adjusted for provided map
      color: "from-pink-400 to-rose-400",
      icon: "💕",
      memories: ["Findes", "Aniversarios", "Frozen, Starbucks, I'ma, etc"],
      destination: "interior",
    },
    {
      id: 2,
      title: "Buenos Aires & Bariloche 🏔️",
      country: "Argentina",
      date: "2017-2023",
      description:
        "Primer viaje oficial juntos. BSAS a ver a San Lorenzo, después Lollapalooza (a full monster ajjaja) y Coldplay. También Bariloche con viajun a full ski, yo con la melena gigante y la cara hinchada jeje",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 22, y: 73 }, // Adjusted for provided map
      color: "from-blue-400 to-cyan-400",
      icon: "🏔️",
      memories: ["San Lorenzo", "Lollapalooza", "Ski en Bariloche"],
      destination: "BS AS",
    },
    {
      id: 3,
      title: "Brasil variados 🇧🇷",
      country: "Brasil",
      date: "2018-2024",
      description:
        "Porto Alegre, Floripa, Rio, São Paulo, Porto Galinhas... Distintos viajes, muchos futboleros y otros de vacaciones. Muchas experiencias, fuimos a n lugares, proximo destino cual sera?",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 28, y: 60 }, // Adjusted for provided map
      color: "from-green-400 to-emerald-400",
      icon: "🇧🇷",
      memories: ["Playitas", "Fútbol", "Compras"],
      destination: "brasil",
    },
    {
      id: 4,
      title: "Irlanda & Londres 🍀",
      country: "Reino Unido/Irlanda",
      date: "2017 & 2025 Volvimoo",
      description:
        "Donde se plantó la semilla en enero/febrero 2017 y ahora volvemos a regarla más jeje.",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 46, y: 30 }, // Adjusted for provided map
      color: "from-emerald-400 to-green-400",
      icon: "🍀",
      memories: ["Niños", "Colegio", "Anecdotas"],
      destination: "Irlanda",
    },
    {
      id: 5,
      title: "Qatar ✨",
      country: "Qatar",
      date: "2020",
      description:
        "VIAJE mega con 20 añitos mansos en Qatar. Tremenda experiencia, todos los lujos. ",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 60, y: 45 }, // Adjusted for provided map
      color: "from-yellow-400 to-amber-400",
      icon: "✨",
      memories: ["Lujo total", "Desierto", "20 añitos"],
      destination: "qatar",
    },
    {
      id: 6,
      title: "España 🇪🇸",
      country: "España",
      date: "2020-2023",
      description:
        "Destino mega compris, recorridos y Honest Greens. Como olvidar la dormida en el hall del hotel rancio y desp en Mac, donde el Mr. Correcto no se quería dormir jajaja",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 48, y: 38 }, // Adjusted for provided map
      color: "from-red-400 to-orange-400",
      icon: "🇪🇸",
      memories: ["Honest Greens", "Compras", "Mr. Correcto"],
      destination: "interior", // Using interior as placeholder since Spain folder doesn't exist
    },
    {
      id: 7,
      title: "Grecia 🏛️",
      country: "Grecia",
      date: "2023",
      description:
        "Tremendo viajun romántico, playas, casitas pintorescas, cuatris y gyms como nos gusta jee. Santorini y Paros nuestros favs",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 55, y: 40 }, // Adjusted for provided map
      color: "from-blue-400 to-indigo-400",
      icon: "🏛️",
      memories: ["Santorini", "Paros", "Cuatris y gyms"],
      destination: "Grecia",
    },
    {
      id: 8,
      title: "USA 🇺🇸",
      country: "Estados Unidos",
      date: "2022-2025",
      description:
        "NY, Boston, Washington y Miami. Como buenos consumistas de nuestros lugares favoritos en el mundo, muy buena comida (por más que haya un Mc por cuadra), ropita y compras siempre, gyms, autos y la verdadera buena vida. SUPLES Y MAS SUPLES!",
      image: "/placeholder.svg?height=300&width=400",
      coordinates: { x: 18, y: 35 }, // Adjusted for provided map
      color: "from-purple-400 to-pink-400",
      icon: "🇺🇸",
      memories: ["NYC", "Miami", "SUPLES Y MAS SUPLES"],
      destination: "USA",
    },
  ]

  // Timeline data
  const timeline = [
    {
      year: "2016",
      title: "Capitulo 0",
      description: "Eramos 'amigos' y vos ni bola, pero yo empece a meter mis fichas. Estaba flechado",
      highlights: ["Colegio", "Squad", "Primeros acercamientos"],
      color: "from-pink-200 to-rose-200",
      emoji: "✨",
    },
    {
      year: "2017",
      title: "El comienzo",
      description: "Despues de mucho trabajo de mi lado jeje, fuimos empezando a ser cada vez mas 'amigos' y de poco se fue convirtiendo en alg mas. El viaje a Irlanda nos unio mucho y a la vuelta en Febrero nuestro primer beso. A partir de ahi, nos fuimos acercando cada vez mas y en agosto, de una forma muy romantica de mi parte, oficializamos en el monoambiente. Tremendo año todo nuevo para nosotros, conocer a las flias, tmb empezabamos a ser mas grandes y manejabamos entonces era todo una aventura.",
      highlights: ["Irlanda", "Primer beso", "Primer viaje a bsas"],
      color: "from-purple-200 to-pink-200",
      emoji: "💕",
    },
    {
      year: "2018",
      title: "Creciendo Juntos",
      description: "Primer año de facultad de ambos, muchas cosas juntos, 24/7 en nuestras casas viendonos. Viajecito a Sao Paulo y me infecte el mr.Ombligo, jajajaa lpm. Tmb en febrero fuimos al cabo con tu flia, en fin muuuchisimas cosas jutnos",
      highlights: ["Veranito juntos", "Idas a lisandro", "Viajecito SP"],
      color: "from-blue-200 to-purple-200",
      emoji: "🌱",
    },
    {
      year: "2019",
      title: "Otro añito mas, mas viajecitos",
      description: "Nos seguiamos conociendo, cada vez mas viajes. Este año salio tremendo viaje a Bariloche con tu flia y Floripa con la mia en semana santa. Ademas de los viajes y las anecdotas, seguiamos queriendonos y conociendonos cada vez mas.",
      highlights: ["2 añotes", "Bariloche BULK", "Más viajes"],
      color: "from-teal-200 to-blue-200",
      emoji: "💪",
    },
    {
      year: "2020",
      title: "Pandemia",
      description: "Arrancamos ATR con Colombia y despues el mega a Qatar y Madrir, y volvimos justo con el covid. Año distinto pero muy divertido, lleno de juegos de caja mucha flia y cenas juntos.Tmb viajecito a colonia, rompimos el maleficio",
      highlights: ["Cuarentena juntos", "Qatar y Madrid", "Planes futuros"],
      color: "from-green-200 to-teal-200",
      emoji: "🤝",
    },
    {
      year: "2021",
      title: "Mas pandemia",
      description: "Si bien empezo mas en 2020, en 2021 fuimos afianzando nuestro lazo como gymbros jeje. Viajecito a Poa en Julio, pasamos mi cumple y nos gozamos. Medio que la pandemia seguia y no se podian hacer muchas cosas. Mucho punta en la alfa, que la tuvimos como 5 meses alquilada. Verano a full flia que los primitos eran unos enanos y estabamos todo el dia jugando",
      highlights: ["Gymbros", "POA", "Verano a full flia"],
      color: "from-yellow-200 to-green-200",
      emoji: "🌅",
    },
    {
      year: "2022",
      title: "Primer desafio grande a distancia",
      description: "Primera vez que nos toco estar alejados por 6 meses, cuando te fuiste a gozar a NY. Si bien no fue facil y fueron momentos duros, supimos superarlo con nuestro amor y sabiendo que cuando vuelvas todo iba a ser como antes. Año muy importante para vos, porque hiciste el intercambio de tus sueños, viajaste, te recbiste y creciste muchisimo. La visita a NY fue tremenda, tengo epicos recuerdos juntos imborrables.",
      highlights: ["NYC", "Licenciada", "Crecimiento"],
      color: "from-orange-200 to-yellow-200",
      emoji: "🏗️",
    },
    {
      year: "2023",
      title: "Primer ida a Europa",
      description: "En 2023 hicimos nuestro primer viaje mano a mano a Europa (ya habiamos ido juntos pero nunca solos). Fue increible posta, tremendos lugares, tremendos planes y tengo altos recuerdos de todo, las playas, la convivencia, reirnos mucho juntos como nos gusta. Pasaban los años y seguiamos fortaleciendo nuestra relacion. Vos ese año entraste en Faro.",
      highlights: ["6 años cumplidos", "Europa", "Mas anecdotas"],
      color: "from-red-200 to-orange-200",
      emoji: "👑",
    },
    {
      year: "2024",
      title: "El año de los casamientos",
      description: "Tuvimos como 300 casamientos jajaja. No hicimos ningun viaje lejos pero tuvimos nuestras escapaditas. Ya 7 años y mucho recorrido juntos, en lo personal lo recuerdo como un año de madurez en el cual nos conocimos mas profundamente, nos entendimos mas y logramos tener una profundidad muy madura.",
      highlights: ["Casamientos", "Madurez", "Más aventuras"],
      color: "from-yellow-200 to-green-200",
      emoji: "🌅",
    },
    {
      year: "2025",
      title: "Nuevos Horizontes",
      description: "Nuevos desafios para ambos, mucho viaje como nos gusta (Miameeee fue un sueño) y tmb aventuras y desafios. Vos renunciaste y te vas a hacer un master, yo mudanza y nueva rutina con nuevo trabajo. Escribiendo esto ahora siento que estamos en un punto de nuestra vida en el cual estamos muy bien, y que vamos a seguir creciendo juntos y superando desafios. De verdad siento que con el paso de los años y el crecimento de ambos, nos fuimos entendiendo cada vez mas y valorando las fortalezas y debilidades de cada uno. Hoy puedo decir que me encanta estar contigo y que sos una persona increible que, aunque a veces me cueste entender, me haces crecer y me empujas a ser una mejor persona cada dia, no solo en la pareja sino profesionalmente, familiarmente, en mi vida personal. Te quiero mucho y aunque seguro esta distancia nos va a costar muchisimo, se que la vamos a poder pasar sin problemas.",
      highlights: ["Nuevos hobbies", "Crecimiento personal", "Más aventuras"],
      color: "from-yellow-200 to-green-200",
      emoji: "🌅",
    },
  ]

  const sections = [
    { id: "inicio", title: "Inicio", icon: Heart },
    { id: "mapa", title: "Mapa del Amor", icon: MapPin },
    { id: "timeline", title: "Nuestra Historia", icon: Calendar },
    { id: "galeria", title: "Recuerdos", icon: Camera },
    { id: "cartas", title: "Cartitas del cora", icon: Mail },
    //{ id: "futuro", title: "Nuestro Futuro", icon: Sparkles },
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
                    8 añitos juntos
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
                    Un album digital de nuestro historia
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-pink-200 relative overflow-hidden"
                >
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
                    "Jojolita, Este es un regalito a mi manera. Acá están guardados algunos de los momentos que vivimos
                    y que nos vieron crecer juntos. Podes mirar esto cuando quieras cuando estemos lejos para sentirnos un poquito mas cerca."
                  </motion.p>

                  <motion.p
                    className="text-right text-gray-600 font-serif text-base md:text-lg relative z-10"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3 }}
                  >
                   Te quiero mucho, Juancito 💕✨
                  </motion.p>
                </motion.div>

                {/* Call to action */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5 }}
                  className="mt-12"
                >
                  <motion.button
                    onClick={() => setCurrentSection(1)}
                    className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
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
              {/* Optimized animated background elements with reduced count and better positioning */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full"
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10 + Math.random() * 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: i * 0.4,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
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
                    Cada punto marca una aventura épica, un recuerdo único en nuestro mapa del amor 🗺️💕
                  </motion.p>
                  
                  <motion.div
                    className="mt-4 p-3 bg-pink-50/80 backdrop-blur-sm rounded-xl border border-pink-200 max-w-md mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <p className="text-sm text-gray-600 text-center">
                      💡 <strong>Tip:</strong> Parate sobre los puntos para ver detalles y click para abrir la historia completa
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-purple-50/90 rounded-3xl p-6 md:p-10 shadow-2xl border border-pink-200 overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0, y: 100 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  {/* World map background image */}
                  <motion.div className="relative w-full h-[400px] md:h-[700px] rounded-2xl overflow-hidden shadow-inner">
                    <Image
                      src="/images/map.jpg"
                      alt="World Map"
                      className="absolute inset-0 w-full h-full object-cover"
                      width={1000}
                      height={1000}
                    />

                    {/* Optimized connection lines with reduced opacity and better z-index */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                          <stop offset="25%" stopColor="#8b5cf6" stopOpacity="0.3" />
                          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
                          <stop offset="75%" stopColor="#10b981" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                        </linearGradient>

                        <filter id="glow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
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
                            strokeWidth="2"
                            strokeDasharray="6,3"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.8 }}
                            transition={{ duration: 2.5, delay: index * 0.4 + 1 }}
                          />
                        )
                      })}
                    </svg>

                    {/* Enhanced memory points with improved z-index and reduced overlap */}
                    {worldMemories.map((memory, index) => (
                      <Dialog key={memory.id}>
                        <DialogTrigger asChild>
                          <motion.button
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer"
                            style={{
                              left: `${memory.coordinates.x}%`,
                              top: `${memory.coordinates.y}%`,
                              width: "80px",
                              height: "80px",
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
                              scale: 1.2,
                              rotate: 3,
                              zIndex: 50,
                              transition: { duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Ver detalles de ${memory.title}`}
                          >
                            {/* Single optimized pulsing ring effect */}
                            <motion.div
                              className={`absolute inset-0 rounded-full bg-gradient-to-r ${memory.color} opacity-10`}
                              animate={{
                                scale: [1, 2.2, 1],
                                opacity: [0.1, 0.02, 0.1],
                              }}
                              transition={{
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.4,
                              }}
                              style={{
                                width: "60px",
                                height: "60px",
                                marginLeft: "-30px",
                                marginTop: "-30px",
                              }}
                            />

                            {/* Main enhanced point */}
                            <motion.div
                              className={`relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${memory.color} rounded-full border-4 border-white shadow-2xl flex items-center justify-center group-hover:shadow-3xl transition-all duration-300 z-10`}
                              animate={{
                                boxShadow: [
                                  "0 8px 25px rgba(0,0,0,0.2)",
                                  "0 10px 30px rgba(0,0,0,0.22)",
                                  "0 8px 25px rgba(0,0,0,0.2)",
                                ],
                              }}
                              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                              <motion.span
                                className="text-xl md:text-2xl"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                              >
                                {memory.icon}
                              </motion.span>
                            </motion.div>

                            {/* Enhanced floating label with better positioning and click indicator */}
                            <motion.div
                              className="absolute -top-10 md:-top-14 left-1/2 transform -translate-x-1/2 bg-white/98 px-3 py-1 md:px-4 md:py-2 rounded-2xl shadow-xl border border-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-30"
                              initial={{ y: 15, scale: 0.8 }}
                              whileHover={{ y: 0, scale: 1 }}
                            >
                              <span className="text-sm font-bold text-gray-800">{memory.title}</span>
                              <div className="text-xs text-gray-500 mt-1">{memory.date}</div>
                              <div className="text-xs text-pink-500 mt-1 font-medium">Click para ver más</div>
                            </motion.div>
                            
                            {/* Click indicator dot */}
                            <motion.div
                              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            />
                          </motion.button>
                        </DialogTrigger>

                        <DialogContent className="max-w-5xl lg:max-w-6xl xl:max-w-7xl max-h-[95vh] w-full p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
                          <motion.div
                            className="w-full h-full flex flex-col"
                            style={{ maxHeight: '95vh' }}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {/* Header with close button */}
                            <div className="flex items-center justify-between p-4 md:p-6 border-b border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50 flex-shrink-0">
                              <div className="flex items-center space-x-3 md:space-x-4">
                                <motion.span
                                  className="text-2xl md:text-3xl"
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  {memory.icon}
                                </motion.span>
                                <div>
                                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 font-bold">
                                    {memory.title}
                                  </h3>
                                  <p className="text-sm md:text-base text-gray-600">
                                    {memory.date} • {memory.country}
                                  </p>
                                  {/* Destination and memories preview */}
                                  <div className="flex flex-wrap items-center gap-2 mt-2">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                      📍 {memory.destination}
                                    </span>
                                    {memory.memories.slice(0, 2).map((mem, i) => (
                                      <motion.span
                                        key={i}
                                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 border border-pink-200"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                      >
                                        {mem}
                                      </motion.span>
                                    ))}
                                    {memory.memories.length > 2 && (
                                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                        +{memory.memories.length - 2} más
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Progress bar */}
                              <motion.div
                                className={`w-24 md:w-32 h-2 bg-gradient-to-r ${memory.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                              />
                            </div>

                            {/* Content area with scroll */}
                            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 modal-scroll" style={{ maxHeight: 'calc(95vh - 120px)' }}>
                              {/* Enhanced Carousel for images and videos */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full max-w-4xl mx-auto"
                              >
                                {(() => {
                                  const media = getTravelMedia(memory.destination)
                                  return (
                                    <Carousel 
                                      images={media.images} 
                                      videos={media.videos}
                                      className="w-full"
                                      showFullscreen={true}
                                    />
                                  )
                                })()}
                              </motion.div>

                              {/* Location and quick info */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-r from-pink-50/50 to-purple-50/50 p-4 md:p-6 rounded-2xl border border-pink-200/50"
                              >
                                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6">
                                  {/* Location and quick info */}
                                  <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-xl border border-pink-200/50 shadow-sm">
                                      <h5 className="text-sm md:text-base font-semibold text-gray-800 mb-2 flex items-center">
                                        <span className="mr-2">📍</span>
                                        Destino
                                      </h5>
                                      <p className="text-lg md:text-xl font-bold text-blue-600 mb-2">
                                        {memory.destination}
                                      </p>
                                      <p className="text-sm text-gray-600">
                                        {memory.country}
                                      </p>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-xl border border-pink-200/50 shadow-sm">
                                      <h5 className="text-sm md:text-base font-semibold text-gray-800 mb-2 flex items-center">
                                        <span className="mr-2">📅</span>
                                        Fecha
                                      </h5>
                                      <p className="text-base font-medium text-gray-700">
                                        {memory.date}
                                      </p>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-xl border border-pink-200/50 shadow-sm">
                                      <h5 className="text-sm md:text-base font-semibold text-gray-800 mb-2 flex items-center">
                                        <span className="mr-2">✨</span>
                                        Tipo de Viaje
                                      </h5>
                                      <div className="flex flex-wrap gap-1">
                                        {memory.memories.slice(0, 3).map((mem, i) => (
                                          <span
                                            key={i}
                                            className="inline-block px-2 py-1 text-xs font-medium bg-pink-100 text-pink-700 rounded-full"
                                          >
                                            {mem}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    
                                    {/* Description section */}
                                    <div className="bg-white p-4 rounded-xl border border-pink-200/50 shadow-sm">
                                      <h5 className="text-sm md:text-base font-semibold text-gray-800 mb-3 flex items-center">
                                        <span className="mr-2">📖</span>
                                        Nuestra Historia
                                      </h5>
                                      <div className="bg-pink-50/50 p-3 rounded-lg border border-pink-100">
                                        <p className="text-sm text-gray-700 leading-relaxed italic">
                                          {memory.description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>

                              {/* Memory highlights */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ delay: 0.6 }}
                                className="space-y-4"
                              >
                                <h4 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center">
                                  <span className="mr-2">✨</span>
                                  Momentos Destacados del Viaje
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                  Recuerdos especiales que hicieron este viaje único
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                  {memory.memories.map((mem, i) => (
                                    <motion.div
                                      key={i}
                                      className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 md:p-4 rounded-xl border border-pink-200 shadow-sm hover:shadow-md transition-all hover:scale-105 group"
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.8 + i * 0.1 }}
                                    >
                                      <div className="flex items-center space-x-2">
                                        <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                                          {i === 0 ? "🌟" : i === 1 ? "💫" : "⭐"}
                                        </span>
                                        <span className="text-sm md:text-base font-medium text-gray-700">{mem}</span>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>

                              {/* Stats section */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ delay: 1 }}
                                className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 p-4 md:p-6 rounded-2xl border border-blue-200/50"
                              >
                                <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center">
                                  <span className="mr-2">📊</span>
                                  Estadísticas del Viaje
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                  {(() => {
                                    const media = getTravelMedia(memory.destination)
                                    return [
                                      {
                                        label: "Fotos",
                                        value: media.images.length,
                                        icon: "📷",
                                        color: "from-pink-400 to-rose-400"
                                      },
                                      {
                                        label: "Videos",
                                        value: media.videos.length,
                                        icon: "🎥",
                                        color: "from-blue-400 to-cyan-400"
                                      },
                                      {
                                        label: "Memorias",
                                        value: memory.memories.length,
                                        icon: "💭",
                                        color: "from-purple-400 to-pink-400"
                                      },
                                      {
                                        label: "Años",
                                        value: "∞",
                                        icon: "⏰",
                                        color: "from-green-400 to-emerald-400"
                                      }
                                    ]
                                  })().map((stat, i) => (
                                    <motion.div
                                      key={i}
                                      className={`bg-gradient-to-r ${stat.color} p-3 md:p-4 rounded-xl text-center text-white shadow-lg`}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.2 + i * 0.1 }}
                                    >
                                      <div className="text-2xl md:text-3xl mb-1">{stat.icon}</div>
                                      <div className="text-lg md:text-xl font-bold">{stat.value}</div>
                                      <div className="text-xs md:text-sm opacity-90">{stat.label}</div>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        </DialogContent>
                      </Dialog>
                    ))}

                    {/* Optimized animated travel path with reduced interference */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none z-15"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4 }}
                    >
                      {/* Single optimized animated element */}
                      <motion.div
                        className="absolute text-xl md:text-2xl filter drop-shadow-lg opacity-70"
                        initial={{
                          x: `${worldMemories[0]?.coordinates.x}%`,
                          y: `${worldMemories[0]?.coordinates.y}%`,
                        }}
                        animate={{
                          x: worldMemories.map((m) => `${m.coordinates.x}%`),
                          y: worldMemories.map((m) => `${m.coordinates.y}%`),
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 15,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        ✈️
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
                    Galería de Recuerdos
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Momentos capturados en el tiempo, anecdotas para toda la vida.
                  </motion.p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {[
                    "02c76ac1-c8cf-4b9c-a901-b90330f5dd8a.jpg","209ec9a4-e914-45fa-8f66-d5bec37625d0.jpg","215d5b04-4d7f-45a2-b020-c1c15a923402.jpg","27a55f13-adf8-4d70-9531-d6fb624561fa.jpg","2e6717e1-9939-45fb-bdff-fa8cb6df53f4.jpg","37ec835f-98ec-4aeb-bfaa-fc2ad0c4e7db.jpg","41CFE299-8985-4535-93B8-23B07C93F71E.jpg","43c9b197-0446-4733-9994-d389ab51405a.jpg","44caffe63048cc2159016632969e468d69230e8932e15bdfaf73b8889108e4eb.jpeg","49aa928b-f968-4256-90fd-b5a0a0e61196.jpg","4a58cbde-542a-405a-9f54-e59bf5451750.jpg","51b3e8d8-eaa3-4b66-982a-55b96eccc795.jpg","5b2d4e3f-6e16-4418-8918-f17f6c4e3bbb.jpg","64b98bb7-a747-4a62-bfa8-d3b40f7b05a4.jpg","6ef95804-9325-4d09-8574-2702e021eb13.jpg","7456C7C7-A08A-4722-9A2D-7211D92B8DF7.jpg","75cd87bb-4931-4cbc-be17-6ee6f6ea9405.jpg","794f053c-2a80-4256-a1d5-802bce8b9c76.jpg","830dccc6-d3d3-4175-8f32-edfd29dd39ad.jpg","88756016-6db2-48a7-9527-bd5782368bc6.jpg","959e6642-0ddc-4bd7-bef4-9b88f5f4ceaa.jpg","97479B4F-7C8C-4841-B838-5CC931F2480C.jpg","99701648-f532-474a-8727-51c2c7a612ac.jpg","a29acda1-1b46-4f2f-b410-c82a6a2eb814.jpg","a34ed888-e3e6-4b6e-8ec8-af5ed9e8ba79.jpg","acf46b33-1457-4204-9d0b-393f4aafe553.jpg","c2a59e57-c17b-45d8-b361-e67ab6612580.jpg","C74AE685-D562-41B9-93E4-FCC8E0BBB205.JPG","d880b784-301a-4003-ae17-5a59cc54e747.jpg","dcba5a4f-fe02-4af6-8f9d-e6a6e1e2f2e0.jpg","DD41E310-AECC-428A-97D3-5D989EABEC8F.jpg","e7ba6c4f-ac29-4580-b684-9cc7ff91df63.jpg","EA052B77-2144-4923-B728-12F29335D8E8.jpg","F586E008-4BB0-4358-8625-4023E64F669C.JPEG","F6F40918-0A66-48BC-BE47-257A3FD9DBD7.jpg","FullSizeRender (1).jpeg","FullSizeRender (2).jpeg","FullSizeRender (3).jpeg","FullSizeRender.jpeg","IMG_0019.jpeg","IMG_0033.jpeg","IMG_0047.jpeg","IMG_0117.jpeg","IMG_0118.jpeg","IMG_0119.jpeg","IMG_0156.jpeg","IMG_0158.jpeg","IMG_0174.jpeg","IMG_0409.jpeg","IMG_0469.jpeg","IMG_0505.jpeg","IMG_0726.jpeg","IMG_0795.jpeg","IMG_0840.jpeg","IMG_1081.jpeg","IMG_1384.jpeg","IMG_1468.jpeg","IMG_1536.jpeg","IMG_1550.jpeg","IMG_1579.jpeg","IMG_1902.jpeg","IMG_1981.JPG","IMG_2045.jpeg","IMG_2099.jpeg","IMG_2104.jpeg","IMG_2147.jpeg","IMG_2244.JPG","IMG_2510.jpeg","IMG_2628.jpeg","IMG_2708.jpeg","IMG_2711.jpeg","IMG_2726.jpeg","IMG_2819.jpeg","IMG_2882.jpeg","IMG_2985.jpeg","IMG_2987.jpeg","IMG_3002.jpeg","IMG_3009.jpeg","IMG_3054.jpeg","IMG_3060.jpeg","IMG_3069.jpeg","IMG_3077.jpeg","IMG_3237.jpeg","IMG_3245.jpeg","IMG_3270.jpeg","IMG_3273.jpeg","IMG_3280.jpeg","IMG_3357.jpeg","IMG_3399.jpeg","IMG_3461.jpeg","IMG_3493.jpg","IMG_3530.jpeg","IMG_3595.jpeg","IMG_3611.jpeg","IMG_3691.JPG","IMG_3702.jpeg","IMG_3710.jpeg","IMG_3731.jpeg","IMG_3785.jpeg","IMG_3851.PNG","IMG_3932.jpeg","IMG_3979.jpg","IMG_4066.jpeg","IMG_4289.jpeg","IMG_4450.jpeg","IMG_4463.jpeg","IMG_4578 (1).jpeg","IMG_4578.jpeg","IMG_4601.jpeg","IMG_4646.jpeg","IMG_4697.JPG","IMG_4705.jpeg","IMG_4768.jpeg","IMG_4793.jpeg","IMG_4797.jpeg","IMG_4831.jpeg","IMG_5042.jpeg","IMG_5069.JPG","IMG_5081.jpeg","IMG_5199.jpeg","IMG_5239.JPG","IMG_5246.JPG","IMG_5246.PNG","IMG_5247.JPG","IMG_5282.JPG","IMG_5285.JPG","IMG_5290.JPG","IMG_5349.JPG","IMG_5368.jpeg","IMG_5421.jpeg","IMG_5438.JPG","IMG_5460.PNG","IMG_5543.jpeg","IMG_5858.jpeg","IMG_5996.jpeg","IMG_6056.jpeg","IMG_6135.jpeg","IMG_6139.jpeg","IMG_6512.jpeg","IMG_6533.jpeg","IMG_6535.jpeg","IMG_6596.jpeg","IMG_6608.jpeg","IMG_6675.JPG","IMG_6699.jpeg","IMG_6740.jpeg","IMG_6780.jpeg","IMG_6794.jpeg","IMG_7023.jpeg","IMG_7247.JPG","IMG_7538.jpeg","IMG_7608.jpeg","IMG_7633.jpeg","IMG_7667.jpeg","IMG_7862.jpeg","IMG_8024.JPG","IMG_8225.JPG","IMG_8238.JPG","IMG_8332.jpeg","IMG_8360.jpeg","IMG_8388.jpeg","IMG_8470.jpeg","IMG_8630.JPG","IMG_8660.jpeg","IMG_8715.jpeg","IMG_8719.jpeg","IMG_8740.jpeg","IMG_8807.jpeg","IMG_8888.jpeg","IMG_9307.jpeg","IMG_9365.jpeg","IMG_9564.jpeg","IMG_9658.jpeg","IMG_9661.jpeg","PHOTO-2021-01-12-20-50-57 2.jpg"
                  ].map((filename, i) => (
                    <motion.div
                      key={filename}
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
                          src={`/images/galeria/${encodeURIComponent(filename)}`}
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

                {/* <motion.div
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
                </motion.div> */}
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
                    Cartitas
                  </motion.h2>
                  <motion.p
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Aca te voy a ir dejando cartas que voy a ir escribiendo mientras estemos alejados.
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
                          <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-1 md:mb-2">Para Jo</h3>
                          <p className="text-sm md:text-base text-gray-500">De Juan Susana</p>
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
                            "Gordita, gracias por siempre estar ahi ayudando y apoyando a tu manera, sos muy especial para mi y para todos los que te rodean. Nos toca un nuevo desafio para enfrentar a distancia pero estoy seguro de que nos va a hacer mas fuertes todavia."
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                          >
                            "Cada dia aprendo cosas nuevas gracias a vos y siento que juntos crecemos cada dia. Gracias por bancarme"
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                          >
                            "Ademas de quererte te admiro muchisimo, y espero que vos tambien confies mucho en vos misma y no les des bola a tus inseguridades pq sos una crack."
                          </motion.p>

                          <motion.p
                            className="text-right font-bold text-pink-600"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6 }}
                          >
                            8 añitos y por mucho mas, Juancito 💕✨
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
                              Me acuerdo como si fuese hoy, <br />
                              El día en que me lo propuse<br />
                              Me acuerdo que agarré el celular <br />
                              Y en notas puse<br />
                              Hoy es el día<br />
                              Y aunque no le emboqué<br />
                              Un proceso provoqué<br />
                              Mi vida dejó de ser la misma<br />
                              Poco a poco<br />
                              La cosa más chica<br />
                              Pasaba a agigantarse<br />
                              Una sonrisa, un simple saludo<br />
                              Significaba la vida para mí.<br />
                              Ese día cuando escribí ese mensaje loco en notas<br />
                              Cambiaba muchas cosas que nunca entendí<br />
                              Cosas que nunca percibí<br />
                              Cosas que nunca sentí<br />
                              Y entre idas y vueltas de mi cabeza<br />
                              Había un objetivo claro<br />
                              Ser el mejor,<br />
                              Ser el más comprensivo,<br />
                              El más amigo<br />
                              Pero claro<br />
                              Había un largo camino<br />
                              Que yo seguro<br />
                              Confiaba en el resultado del destino<br />
                              Me acuerdo cada verano<br />
                              Cada madrugada<br />
                              Cuando no existía nada<br />
                              Pero en mí lo inventaba<br />
                              Cada recreo<br />
                              Donde yo buscaba tu estatura<br />
                              Baja pero inmensa,<br />
                              Flaca pero muy fuerte<br />
                              Que sin dudas me daría<br />
                              La alegría del día<br />
                              Esos momentos donde te escribía<br />
                              Y no lo percibías<br />
                              No quería ser tu amigo<br />
                              Quería ser tu abrigo<br />
                              Esas conversaciones mega superficiales<br />
                              Que para mí eran más profundas que el océano<br />
                              Y para vos era solo un pasatiempo<br />
                              Muchas veces pensé<br />
                              Me pregunté si hacía lo correcto<br />
                              Los dos sabemos bien que había algo en el medio<br />
                              Muchas veces mi confianza se derrumbaba<br />
                              Pero en cuestión de segundos mi deseo se agrandaba<br />
                              Quería ir por todo, quería llegar a lo alto<br />
                              Puedo mencionar numerosos momentos<br />
                              Cuando por dentro estaba llorando de la decepción<br />
                              Y por fuera me hacía el crack como si no me temblara el corazón<br />
                              Recuerdo noches, días<br />
                              Que me imaginaba a tu familia<br />
                              Que deseaba encontrármelos para saber cómo eran<br />
                              Yo era un gordito<br />
                              Que nunca había logrado nada<br />
                              Y que quería ir por todo<br />
                              Un chico que estaba dejando de lado<br />
                              Muchísimas cosas<br />
                              Para estar al lado<br />
                              De Jose<br />
                              De la mujer que me hizo feliz<br />
                              Como nunca lo hubiese pensado<br />
                              Muchas veces escucho música<br />
                              Muchas veces miro fotos<br />
                              Y los recuerdos que tengo<br />
                              Tanto malos como buenos<br />
                              Prometo contárselos a mis hijos<br />
                              O a mis nietos<br />
                              Son fracciones de canciones,<br />
                              A veces simples ritmos<br />
                              Que me llevan a ese momento<br />
                              Ese momento que será infinito<br />
                              Ese momento de risas, llantos, declaraciones<br />
                              Ese momento de la primera vez,<br />
                              El primer mensaje<br />
                              El primer beso<br />
                              El primer te quiero<br />
                              El primer desencuentro<br />
                              Ese momento que no me arrepiento nunca,<br />
                              Ese momento en que me propuse<br />
                              Ser el único en tu lista.<br />
                              Podría seguir escribiendo por años<br />
                              Pero solo te quería recordar<br />
                              Que vos fuiste, sos y serás<br />
                              La meta que me prometí alcanzar.<br />
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
