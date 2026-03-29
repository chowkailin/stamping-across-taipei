import { useState } from 'react'
import './App.css'

function importAll(r) {
    return Object.values(r).map(o => o.default );
}
const images = importAll(import.meta.glob('./assets/stamps/*', { eager: true }));

/*
[
'stamps/1.png',
'stamps/2.png'
'stamps/3.png'
'stamps/4.png'
]

[
<img src='stamps/1.png' width="200" height="200" />
<img src='stamps/2.png' width="200" height="200" />
<img src='stamps/3.png' width="200" height="200" />
<img src='stamps/4.png' width="200" height="200" />
]
*/

export function App() {
  return (
    <>
      <section>
        <Header />
        <Intro />
        <Stat1 />
      </section>

    <div>
      {images.map(path => <img src={path} width="200" height="200" />)}
    </div>
    </>
  )
}

function Header() {
  return (
    <>
      <section id="title" class="header-container">
        <div class="title-container">
          <h1>stamping across taipei <br /> in 5 days</h1>
          <p1>
            { '> skip to stamp catalogue' }
          </p1>
          {/* <img src={1.png} alt="Company Logo" /> */}
        </div>

        <div class="sticker-container">
          <p1> flying stickers yay </p1>
        </div>

      </section>
    </>
  )
}

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
