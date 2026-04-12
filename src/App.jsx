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
import taipeiword from './assets/taipei-word.png'
import bbt1 from './assets/bbthunt/bbt1.jpg'
import bbt2 from './assets/bbthunt/bbt2.jpg'
import bbt3 from './assets/bbthunt/bbt3.jpg'
import bbt4 from './assets/bbthunt/bbt4.jpg'
import hunt1 from './assets/bbthunt/hunt1.jpg'
import hunt2 from './assets/bbthunt/hunt2.jpg'
import hunt3 from './assets/bbthunt/hunt3.jpg'
import hunt4 from './assets/bbthunt/hunt4.jpg'
import './App.css'

const categoryColors = {
  'metro': '#e89975', /* 179 ​Danish Delicious */
  'nat. parks': '#82c394', /* 168 ​Wonder Walks */
  'retail shops': '#58afcf', /* 173 ​Water Wakeup */
  'f&b': '#d9eb75', /* 166 ​Daylight Song */
  'museums': '#ffc454', /* 163 ​Sunshine Kick */
  'tourist centres': '#c5a491', /* 178 ​Sweet Tea */
}

const stampData = [
  { location: 'Airport T1', date: '17 Feb 2026', time: '7:51 AM', category: 'metro' },
  { location: 'Taipei Main Station', date: '17 Feb 2026', time: '8:38 AM', category: 'metro' },
  { location: 'Taipei Main Station', date: '17 Feb 2026', time: '8:56 AM', category: 'metro' },
  { location: 'Gongguan Station', date: '17 Feb 2026', time: '9:39 AM', category: 'metro' },
  { location: 'Ximen Station', date: '17 Feb 2026', time: '12:38 PM', category: 'metro' },
  { location: 'Longshan Temple Station', date: '17 Feb 2026', time: '5:57 PM', category: 'metro' },
  { location: 'Qingtiangang', date: '18 Feb 2026', time: '10:49 AM', category: 'nat. parks' },
  { location: 'Qingtiangang', date: '18 Feb 2026', time: '10:49 AM', category: 'nat. parks' },
  { location: 'Qingtiangang', date: '18 Feb 2026', time: '10:49 AM', category: 'nat. parks' },
  { location: 'Qingtiangang', date: '18 Feb 2026', time: '10:49 AM', category: 'nat. parks' },
  { location: 'Qingtiangang', date: '18 Feb 2026', time: '10:49 AM', category: 'nat. parks' },
  { location: 'Qingtiangang', date: '18 Feb 2026', time: '10:49 AM', category: 'nat. parks' },
  { location: 'Qingtiangang', date: '18 Feb 2026', time: '10:49 AM', category: 'nat. parks' },
  { location: 'Qingtiangang', date: '18 Feb 2026', time: '10:49 AM', category: 'nat. parks' },
  { location: 'Qingtiangang', date: '18 Feb 2026', time: '10:49 AM', category: 'nat. parks' },
  { location: 'Flower Clock', date: '18 Feb 2026', time: '1:07 PM', category: 'nat. parks' },
  { location: 'Jiantan Station', date: '18 Feb 2026', time: '3:47 PM', category: 'metro' },
  { location: 'Dongmen Station', date: '19 Feb 2026', time: '10:37 AM', category: 'metro' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Lai Hao Da\'an', date: '19 Feb 2026', time: '10:56 AM', category: 'retail shops' },
  { location: 'Bao Maison Da\'an', date: '19 Feb 2026', time: '11:28 AM', category: 'retail shops' },
  { location: 'Bao Maison Da\'an', date: '19 Feb 2026', time: '11:28 AM', category: 'retail shops' },
  { location: 'Bao Maison Da\'an', date: '19 Feb 2026', time: '11:28 AM', category: 'retail shops' },
  { location: 'Bao Maison Da\'an', date: '19 Feb 2026', time: '11:28 AM', category: 'retail shops' },
  { location: 'Bao Maison Da\'an', date: '19 Feb 2026', time: '11:28 AM', category: 'retail shops' },
  { location: 'Bao Maison Da\'an', date: '19 Feb 2026', time: '11:28 AM', category: 'retail shops' },
  { location: 'Bao Maison Da\'an', date: '19 Feb 2026', time: '11:28 AM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Huashan 1914 Creative Park', date: '19 Feb 2026', time: '12:28 PM', category: 'retail shops' },
  { location: 'Songjiang Nanjing Station', date: '19 Feb 2026', time: '3:09 PM', category: 'metro' },
  { location: 'Zhongshan Station', date: '19 Feb 2026', time: '3:27 PM', category: 'metro' },
  { location: 'Keelung Station', date: '20 Feb 2026', time: '10:52 AM', category: 'metro' },
  { location: 'Keelung Station', date: '20 Feb 2026', time: '10:52 AM', category: 'metro' },
  { location: 'Keelung Starbucks', date: '20 Feb 2026', time: '11:27 AM', category: 'f&b' },
  { location: 'Keelung Starbucks', date: '20 Feb 2026', time: '11:27 AM', category: 'f&b' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '2:59 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '3:00 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '3:00 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '3:00 PM', category: 'nat. parks' },
  { location: 'Heping Geo Park', date: '20 Feb 2026', time: '3:00 PM', category: 'nat. parks' },
  { location: 'The Red House', date: '21 Feb 2026', time: '11:56 AM', category: 'museums' },
  { location: 'The Red House', date: '21 Feb 2026', time: '11:56 AM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:48 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:48 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:48 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:48 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:48 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:51 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:51 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:51 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:51 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:51 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:54 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:57 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:57 PM', category: 'museums' },
  { location: 'Postal Museum Beimen', date: '21 Feb 2026', time: '2:57 PM', category: 'museums' },
  { location: 'Beimen Station', date: '21 Feb 2026', time: '3:21 PM', category: 'metro' },
  { location: 'Dadaocheng Tourist Centre', date: '21 Feb 2026', time: '3:45 PM', category: 'tourist centres' },
  { location: 'Dadaocheng Tourist Centre', date: '21 Feb 2026', time: '3:45 PM', category: 'tourist centres' },
  { location: 'Dadaocheng Tourist Centre', date: '21 Feb 2026', time: '3:45 PM', category: 'tourist centres' },
]

const allStamps = [
  stamp01, stamp02, stamp03, stamp04, stamp05, stamp06, stamp07, stamp08, stamp09, stamp10,
  stamp11, stamp12, stamp13, stamp14, stamp15, stamp16, stamp17, stamp18, stamp19, stamp20,
  stamp21, stamp22, stamp23, stamp24, stamp25, stamp26, stamp27, stamp28, stamp29, stamp30,
  stamp31, stamp32, stamp33, stamp34, stamp35, stamp36, stamp37, stamp38, stamp39, stamp40,
  stamp41, stamp42, stamp43, stamp44, stamp45, stamp46, stamp47, stamp48, stamp49, stamp50,
  stamp51, stamp52, stamp53, stamp54, stamp55, stamp56, stamp57, stamp58, stamp59, stamp60,
  stamp61, stamp62, stamp63, stamp64, stamp65, stamp66, stamp67, stamp68, stamp69, stamp70,
  stamp71, stamp72, stamp73, stamp74, stamp75, stamp76, stamp77, stamp78, stamp79, stamp80,
  stamp81, stamp82, stamp83, stamp84, stamp85, stamp86, stamp87, stamp88, stamp89, stamp90,
  stamp91,
]

const stickerData = [
  { src: stamp06, className: 'stickerv2 sticker-06', rotate: -12 },
  { src: stamp19, className: 'stickerv2 sticker-19', rotate: 15 },
  { src: stamp17, className: 'stickerv2 sticker-17', rotate: -8, centerX: true },
  { src: stamp73, className: 'sticker sticker-73', rotate: 10 },
  { src: stamp46, className: 'sticker sticker-46', rotate: -18 },
  { src: stamp78, className: 'sticker sticker-78', rotate: 14 },
  { src: stamp51, className: 'stickerv2 sticker-51', rotate: -5 },
]

export function App() {
  const appRef = useRef(null)
  const [headerScrollProgress, setHeaderScrollProgress] = useState(0)
  const [introScrollProgress, setIntroScrollProgress] = useState(0)

  return (
    <div ref={appRef} style={{ position: 'relative' }}>
      <Header onScroll={setHeaderScrollProgress} />
      <Aeroplane headerProgress={headerScrollProgress} />
      <Intro headerProgress={headerScrollProgress} />
      <Intro2 onScroll={setIntroScrollProgress} />
      <Stat1 introProgress={introScrollProgress} />
      <Stat2 />
      <StampCatalogue />
    </div>
  )
}

function Header({ onScroll }) {
  const sectionRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height))
      setScrollProgress(progress)
      onScroll?.(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onScroll])

  return (
    <section id="title" className="header-container" ref={sectionRef}>
      <div className="title-container">
        <h1>stamping across taipei <br /> in 5 days</h1>
        <p1 onClick={() => document.getElementById('stamp-catalogue').scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>{'> skip to stamp catalogue'}</p1>
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

function Aeroplane({ headerProgress }) {
  const [startY, setStartY] = useState(37)

  useEffect(() => {
    const update = () => {
      const textEl = document.querySelector('.title-container p1')
      if (!textEl) return
      const rect = textEl.getBoundingClientRect()
      const layerHeight = window.innerHeight * 2 // 200vh
      const textBottomPx = rect.bottom + window.scrollY + 30 // 30px gap below text
      setStartY((textBottomPx / layerHeight) * 100)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Stamps at 0.3 opacity = headerProgress 0.35
  // Stamps at 0.1 opacity = headerProgress 0.45
  // Animation starts at 0.35, sharpens right movement at 0.45
  const stickerExitProgress = 0.25
  const flyProgress = Math.max(0, (headerProgress - stickerExitProgress) / (1 - stickerExitProgress))

  // Cubic bezier: down → sharp right → down
  const getPoint = (t) => {
    const dy = startY - 37
    const p0 = { x: 50, y: startY }
    const p1 = { x: 60, y: 95 + dy }
    const p2 = { x: 80, y: 20 + dy }
    const p3 = { x: 125, y: 120 }
    const mt = 1 - t
    const x = mt * mt * mt * p0.x + 3 * mt * mt * t * p1.x + 3 * mt * t * t * p2.x + t * t * t * p3.x 
    const y = mt * mt * mt * p0.y + 3 * mt * mt * t * p1.y + 3 * mt * t * t * p2.y + t * t * t * p3.y
    return { x, y }
  }

  const getAngle = (t) => {
    const dt = 0.01
    const a = getPoint(Math.max(0, t - dt))
    const b = getPoint(Math.min(1, t + dt))
    return Math.atan2(b.y - a.y, b.x - a.x) * (180 / Math.PI)
  }

  // Build the dotted trail path (only up to current progress)
  const trailPoints = []
  const steps = Math.floor(flyProgress * 80)
  for (let i = 0; i <= steps; i++) {
    const t = i / 80
    const pt = getPoint(t)
    trailPoints.push(pt)
  }
  const trailD = trailPoints.length > 1
    ? `M ${trailPoints[0].x} ${trailPoints[0].y} ` +
      trailPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')
    : ''

  const plane = getPoint(flyProgress)
  const angle = flyProgress > 0 ? getAngle(flyProgress) : 0

  return (
    <div className="aeroplane-layer">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="aeroplane-svg">
        {trailD && (
          <path
            d={trailD}
            fill="none"
            stroke="#999"
            strokeWidth="0.8"
            strokeDasharray="10 10"
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
      <div
        className="aeroplane-icon"
        style={{
          left: `${plane.x}%`,
          top: `${plane.y}%`,
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          opacity: flyProgress > 0.9 ? Math.max(0, (1 - flyProgress) * 10) : 1,
        }}
      >
        ✈
      </div>
    </div>
  )
}

const introStamps = [
  { src: hunt1, baseRotate: -12, left: '0%',  bottom: '30%' },
  { src: hunt2, baseRotate: -8,  left: '25%', bottom: '20%' },
  { src: hunt3, baseRotate: -15, left: '50%', bottom: '15%' },
  { src: hunt4, baseRotate: -18, left: '75%', bottom: '25%' },
]

function Intro({headerProgress}) {
  const sectionRef = useRef(null)
  const [wobble, setWobble] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height))
      setWobble(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section id="Intro" ref={sectionRef} style={{ position: 'relative' }}>
        <div class="Stat-container">
          <h3>i love collecting stamps. <br></br>so when my family planned for a trip to taipei, taiwan... <br></br> i *had* to go on a stamp hunt <br></br> <span className="word2">(and obsessively tracked them all)</span></h3>
          <p2>
            { 'basically 5 days of me dragging my family around for some inked images' }<br></br> {'17 - 21 february 2026' }
          </p2>
          <img src={taipeiword} 
          style={{ width: '250px', position: 'relative', left: '-400px', top: '-370px', transform: 'rotate(-20deg)', opacity: 0, opacity: headerProgress +0.2,
        transition: 'opacity 0.2s ease-in',}}/>
        </div>
        {introStamps.map((stamp, i) => {
          const wobbleAngle = Math.sin(wobble * Math.PI * 6 + i * 0.8) * 10
          const rotate = stamp.baseRotate + wobbleAngle
          return (
            <img
              key={i}
              src={stamp.src}
              className="intro-stamp"
              style={{
                left: stamp.left,
                bottom: stamp.bottom,
                transform: `rotate(${rotate}deg)`,
              }}
              alt=""
            />
          )
        })}
      </section>
    </>
  )
}

function Intro2() {
  const sectionRef1 = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [introScrollProgress, setIntroScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting)
      });
    }, {
      // rootMargin: '500px 0px',
      // thresholds: [0.1, 0.2]
    })

    if (sectionRef1.current) {
      observer.observe(sectionRef1.current);
    }

    return () => {
      if (sectionRef1.current) {
        observer.unobserve(sectionRef1.current)
      }
    };
  }, [])

  useEffect(() => {
    if (isInView) {
      console.log("attaching...")

      const handleScroll = () => {
        if (!sectionRef1.current ) return
        const rect = sectionRef1.current.getBoundingClientRect()
        // const progress = Math.max(0, Math.min(1, -rect.top / rect.height))
        // setIntroScrollProgress(progress)

        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
        setIntroScrollProgress(visibleHeight / rect.height)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        console.log("detaching...")

        window.removeEventListener('scroll', handleScroll)
      } 
    }
  }, [isInView])

  console.log("introScrollProgress: ", introScrollProgress);

  return (
    <>
      <section id="Intro">
        <div class="Stat-container" ref={sectionRef1}>
          <h3><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>and have <br></br>some very <span style={{ color: '#58afcf', fontWeight: 'bold' }}>sweet</span>, <br></br>
          very <span style={{ color: '#82c394', fontWeight: 'bold' }}>calorie-heavy</span>, <br></br>
          <span style={{ color: '#ffd4a2', fontWeight: 'bold' }}>beige</span> drink <br></br>
          with black round pearls<br></br> 
          or sometimes <span style={{ color: '#ffc454', fontWeight: 'bold' }}>gold</span></h3>
      
      {/* sweet: 173 ​Water Wakeup; calorie: 168 ​Wonder Walks; beige: 164 ​Creamed Butter; gold: 163 ​Sunshine Kick  */}

          <p2>
            how can we not in the land of bubble tea //<br></br> i was wondering why i cannot see <br></br>my beige x black pearls combo anymore, and<br></br> turns out plastic cups was banned in 2022 in taipei, <br></br>and throughout taiwan by end of 2024
          </p2>
          <img src={stamp29}
          style={{ width: '250px', position: 'relative', left: '400px', top: '-300px', transform: 'rotate(20deg)', opacity: introScrollProgress,
        transition: 'opacity 0.2s ease-in'}}/>
        <img src={bbt1}
          style={{ width: '150px', position: 'relative', left: '-300px', top: '-700px', transform: 'rotate(-20deg)', opacity: introScrollProgress,
        transition: 'opacity 0.2s ease-in'}}/>
        <img src={bbt2}
          style={{ width: '150px', position: 'relative', left: '-500px', top: '-750px', transform: 'rotate(10deg)', opacity: introScrollProgress,
        transition: 'opacity 0.2s ease-in'}}/>
        <img src={bbt3}
          style={{ width: '150px', position: 'relative', left: '-300px', top: '-800px', transform: 'rotate(-10deg)', opacity: introScrollProgress,
        transition: 'opacity 0.2s ease-in'}}/>
        <img src={bbt4}
          style={{ width: '150px', position: 'relative', left: '-500px', top: '-900px', transform: 'rotate(-10deg)', opacity: introScrollProgress,
        transition: 'opacity 0.2s ease-in'}}/>
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
          <h2>five days here yielded <span className="word1">91</span>stamps in total</h2>
          <p2>
            { 'and that is 18.2 stamps per day!' }
          </p2>
        </div>
      </section>
    </>
  )
}

function Stat2() {
  return (
    <>
      <section id="Stat1">
        <div class="Stat-container">
          <h2>and out of that 91 stamps,<span className="word1">32</span>were from retail shops</h2>
          <p2>
            { 'maybe include the dates of this project' }
          </p2>
        </div>
      </section>
    </>
  )
}

function StampCatalogue() {
  return (
    <section id="stamp-catalogue" className="catalogue-section">
      <h2 className="catalogue-title">stamp catalogue</h2>
      <div className="catalogue-grid">
        {allStamps.map((src, i) => {
          const num = String(i + 1).padStart(2, '0')
          const info = stampData[i]
          const catColor = info ? categoryColors[info.category] : undefined
          return (
            <div
              key={i}
              className="catalogue-item"
              style={catColor ? { '--cat-color': catColor } : undefined}
            >
              <img src={src} alt={`Stamp ${num}`} />
              <span className="catalogue-number">{num}</span>
              {info && (
                <div className="catalogue-tooltip">
                  <span>📍 location: {info.location}</span>
                  <span>📅 date: {info.date}</span>
                  <span>🕰️ time: {info.time}</span>
                  <span>🏷️ category: {info.category}</span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default App
