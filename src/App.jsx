import { useState, useEffect, useRef } from 'react'
import stamp06 from './assets/stamps/06.png'
import stamp19 from './assets/stamps/19.png'
import stamp17 from './assets/stamps/17.png'
import stamp46 from './assets/stamps/46.png'
import stamp73 from './assets/stamps/73.png'
import stamp78 from './assets/stamps/78.png'
import stamp51 from './assets/stamps/51.png'
import './App.css'

const stickerData = [
  { src: stamp06, className: 'sticker sticker-1', rotate: -12 },
  { src: stamp19, className: 'sticker sticker-2', rotate: 15 },
  { src: stamp17, className: 'sticker sticker-3', rotate: -8, centerX: true },
  { src: stamp46, className: 'sticker sticker-4', rotate: 10 },
  { src: stamp73, className: 'sticker sticker-5', rotate: -18 },
  { src: stamp78, className: 'sticker sticker-6', rotate: 14 },
  { src: stamp51, className: 'sticker sticker-7', rotate: -5 },
]

export function App() {
  return (
    <>
      <Header />
      <Intro />
      <Stat1 />
    </>
  )
}

function Header() {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height))
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="title" className="header-container" ref={sectionRef}>
      <div className="title-container">
        <h1>stamping across taipei <br /> in 5 days</h1>
        <p1>{'> skip to stamp catalogue'}</p1>
      </div>

      <div className="sticker-container">
        {stickerData.map((sticker, i) => {
          const fly = flyDirections[i]
          const t = Math.min(scrollProgress * 2, 1)
          const cx = sticker.centerX ? 'translateX(-50%) ' : ''
          const style = {
            transform: `${cx}translate(${fly.x * t * 60}vw, ${fly.y * t * 60}vh) rotate(${sticker.rotate}deg)`,
            opacity: Math.max(0, 1 - t),
          }
          return (
            <img
              key={i}
              src={sticker.src}
              className={sticker.className}
              style={style}
              alt=""
            />
          )
        })}
      </div>
    </section>
  )
}

// Each sticker flies to its nearest edge (top/left/right, never bottom)
const flyDirections = [
  { x: -0.5, y: -1.0 },  // sticker-1: top-left → fly up-left
  { x: 0.5,  y: -1.0 },  // sticker-2: top-right → fly up-right
  { x: 0,    y: -1.0 },  // sticker-3: top-center → fly up
  { x: -1.0, y: 0 },     // sticker-4: left side → fly left
  { x: 1.0,  y: 0 },     // sticker-5: right side → fly right
  { x: -1.0, y: -0.3 },  // sticker-6: bottom-left → fly left (+ slight up)
  { x: 1.0,  y: -0.3 },  // sticker-7: bottom-right → fly right (+ slight up)
]

function Intro() {
  return (
    <>
      <section id="Intro">
        <div class="Stat-container">
          <h2>some introduction about this <span className="word1">styled</span>thing</h2>
          <p2>
            { 'maybe include the dates of this project' }
          </p2>
        </div>
      </section>
    </>
  )
}

function Stat1() {
  return (
    <>
      <section id="Stat1">
        <div class="Stat-container">
          <h2>another stat here</h2>
          <p2>
            { 'maybe include the dates of this project' }
          </p2>
        </div>
      </section>
    </>
  )
}

export default App
