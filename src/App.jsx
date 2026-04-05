import { useState, useEffect, useRef } from 'react'
import stamp01 from './assets/stamps/01.png'
import stamp02 from './assets/stamps/02.png'
import stamp03 from './assets/stamps/03.png'
import stamp04 from './assets/stamps/04.png'
import stamp05 from './assets/stamps/05.png'
import stamp06 from './assets/stamps/06.png'
import stamp07 from './assets/stamps/07.png'
import stamp08 from './assets/stamps/08.png'
import stamp09 from './assets/stamps/09.png'
import stamp10 from './assets/stamps/10.png'
import stamp11 from './assets/stamps/11.png'
import stamp12 from './assets/stamps/12.png'
import stamp13 from './assets/stamps/13.png'
import stamp14 from './assets/stamps/14.png'
import stamp15 from './assets/stamps/15.png'
import stamp16 from './assets/stamps/16.png'
import stamp17 from './assets/stamps/17.png'
import stamp18 from './assets/stamps/18.png'
import stamp19 from './assets/stamps/19.png'
import stamp20 from './assets/stamps/20.png'
import stamp21 from './assets/stamps/21.png'
import stamp22 from './assets/stamps/22.png'
import stamp23 from './assets/stamps/23.png'
import stamp24 from './assets/stamps/24.png'
import stamp25 from './assets/stamps/25.png'
import stamp26 from './assets/stamps/26.png'
import stamp27 from './assets/stamps/27.png'
import stamp28 from './assets/stamps/28.png'
import stamp29 from './assets/stamps/29.png'
import stamp30 from './assets/stamps/30.png'
import stamp31 from './assets/stamps/31.png'
import stamp32 from './assets/stamps/32.png'
import stamp33 from './assets/stamps/33.png'
import stamp34 from './assets/stamps/34.png'
import stamp35 from './assets/stamps/35.png'
import stamp36 from './assets/stamps/36.png'
import stamp37 from './assets/stamps/37.png'
import stamp38 from './assets/stamps/38.png'
import stamp39 from './assets/stamps/39.png'
import stamp40 from './assets/stamps/40.png'
import stamp41 from './assets/stamps/41.png'
import stamp42 from './assets/stamps/42.png'
import stamp43 from './assets/stamps/43.png'
import stamp44 from './assets/stamps/44.png'
import stamp45 from './assets/stamps/45.png'
import stamp46 from './assets/stamps/46.png'
import stamp47 from './assets/stamps/47.png'
import stamp48 from './assets/stamps/48.png'
import stamp49 from './assets/stamps/49.png'
import stamp50 from './assets/stamps/50.png'
import stamp51 from './assets/stamps/51.png'
import stamp52 from './assets/stamps/52.png'
import stamp53 from './assets/stamps/53.png'
import stamp54 from './assets/stamps/54.png'
import stamp55 from './assets/stamps/55.png'
import stamp56 from './assets/stamps/56.png'
import stamp57 from './assets/stamps/57.png'
import stamp58 from './assets/stamps/58.png'
import stamp59 from './assets/stamps/59.png'
import stamp60 from './assets/stamps/60.png'
import stamp61 from './assets/stamps/61.png'
import stamp62 from './assets/stamps/62.png'
import stamp63 from './assets/stamps/63.png'
import stamp64 from './assets/stamps/64.png'
import stamp65 from './assets/stamps/65.png'
import stamp66 from './assets/stamps/66.png'
import stamp67 from './assets/stamps/67.png'
import stamp68 from './assets/stamps/68.png'
import stamp69 from './assets/stamps/69.png'
import stamp70 from './assets/stamps/70.png'
import stamp71 from './assets/stamps/71.png'
import stamp72 from './assets/stamps/72.png'
import stamp73 from './assets/stamps/73.png'
import stamp74 from './assets/stamps/74.png'
import stamp75 from './assets/stamps/75.png'
import stamp76 from './assets/stamps/76.png'
import stamp77 from './assets/stamps/77.png'
import stamp78 from './assets/stamps/78.png'
import stamp79 from './assets/stamps/79.png'
import stamp80 from './assets/stamps/80.png'
import stamp81 from './assets/stamps/81.png'
import stamp82 from './assets/stamps/82.png'
import stamp83 from './assets/stamps/83.png'
import stamp84 from './assets/stamps/84.png'
import stamp85 from './assets/stamps/85.png'
import stamp86 from './assets/stamps/86.png'
import stamp87 from './assets/stamps/87.png'
import stamp88 from './assets/stamps/88.png'
import stamp89 from './assets/stamps/89.png'
import stamp90 from './assets/stamps/90.png'
import stamp91 from './assets/stamps/91.png'
import './App.css'

const stickerData = [
  { src: stamp06, className: 'stickerv2 sticker-06', rotate: -12 },
  { src: stamp19, className: 'sticker sticker-19', rotate: 15 },
  { src: stamp17, className: 'stickerv2 sticker-17', rotate: -8, centerX: true },
  { src: stamp73, className: 'sticker sticker-73', rotate: 10 },
  { src: stamp46, className: 'sticker sticker-46', rotate: -18 },
  { src: stamp78, className: 'sticker sticker-78', rotate: 14 },
  { src: stamp51, className: 'stickerv2 sticker-51', rotate: -5 },
]

export function App() {
  const appRef = useRef(null)
  const [planeProgress, setPlaneProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight
      const start = vh * 0.6
      const end = vh * 1.8
      const p = Math.max(0, Math.min(1, (scrollY - start) / (end - start)))
      setPlaneProgress(p)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={appRef} style={{ position: 'relative' }}>
      <Header />
      <Aeroplane progress={planeProgress} />
      <Intro />
      <Stat1 />
    </div>
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
  { x: -0.5, y: -1.0 },  // sticker-06: top-left → fly up-left
  { x: 0.5,  y: -1.0 },  // sticker-19: top-right → fly up-right
  { x: 0,    y: -1.0 },  // sticker-17: top-center → fly up
  { x: -1.0, y: 0 },     // sticker-73: left side → fly left
  { x: 1.0,  y: 0 },     // sticker-46: right side → fly right
  { x: -1.0, y: -0.3 },  // sticker-78: bottom-left → fly left (+ slight up)
  { x: 1.0,  y: -0.3 },  // sticker-51: bottom-right → fly right (+ slight up)
]

function Aeroplane({ progress }) {
  // Quadratic bezier: bottom-center → far right (avoiding text) → top-right exit
  const getPoint = (t) => {
    // P0=(85,95) → P1=(105,40) → P2=(95,-35)
    const p0 = { x: 85, y: 95 }
    const p1 = { x: 105, y: 40 }
    const p2 = { x: 95, y: -35 }
    const mt = 1 - t
    const x = mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x
    const y = mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y
    return { x, y }
  }

  const getAngle = (t) => {
    const dt = 0.01
    const a = getPoint(Math.max(0, t - dt))
    const b = getPoint(Math.min(1, t + dt))
    return Math.atan2(a.y - b.y, b.x - a.x) * (180 / Math.PI)
  }

  // Build the dotted trail path (only up to current progress)
  const trailPoints = []
  const steps = Math.floor(progress * 80)
  for (let i = 0; i <= steps; i++) {
    const t = i / 80
    const pt = getPoint(t)
    trailPoints.push(pt)
  }
  const trailD = trailPoints.length > 1
    ? `M ${trailPoints[0].x} ${trailPoints[0].y} ` +
      trailPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')
    : ''

  const plane = getPoint(progress)
  const angle = getAngle(progress)

  if (progress <= 0) return null

  return (
    <div className="aeroplane-layer">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="aeroplane-svg">
        {trailD && (
          <path
            d={trailD}
            fill="none"
            stroke="#999"
            strokeWidth="0.3"
            strokeDasharray="1 1"
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
      <div
        className="aeroplane-icon"
        style={{
          left: `${plane.x}%`,
          top: `${plane.y}%`,
          transform: `translate(-50%, -50%) rotate(-${angle}deg)`,
          opacity: progress > 0.9 ? Math.max(0, (1 - progress) * 10) : 1,
        }}
      >
        ✈
      </div>
    </div>
  )
}

function Intro() {
  return (
    <>
      <section id="Intro">
        <div class="Stat-container">
          <h3>i love collecting stamps. <br></br>so when my family planned for a trip to taipei, taiwan... <br></br> i *had* to go on a stamp hunt <br></br> <span className="word2">(and obsessively tracked them all)</span></h3>
          <p2>
            { 'basically 5 days of me dragging my family around for some inked images' }<br></br> {'17 - 21 february 2026' }
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
          <h2>another stat here<span className="word1">styled</span>thing</h2>
          <p2>
            { 'maybe include the dates of this project' }
          </p2>
        </div>
      </section>
    </>
  )
}

export default App
