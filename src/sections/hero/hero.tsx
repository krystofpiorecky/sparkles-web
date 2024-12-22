"use client";

import Planet from '@/components/planet/planet';
import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <img src='/text.svg' />
      <div>
        <Planet></Planet>
      </div>
    </section>
  )
}
