"use client";

import { ArrowRight, SteamIcon } from '@/utils/Icon';
import './sticker.css'

export default function Sticker() {
  return (
    <section className="sticker">
      <div className='container'>
        <h2>My CS2 Sticker</h2>
        <main>
          <div className='image'>
            <img src='/sticker.png' />
          </div>
          <div className='info'>
            <h3>Ninja Defuse</h3>
            <span>April 28th, 2015</span>
            <span>Community Stickers Series 5</span>
            <a target="_blank" href='https://steamcommunity.com/market/listings/730/Sticker%20%7C%20Ninja%20Defuse' className='steam'>
              <SteamIcon />
              Steam
              <ArrowRight />
            </a>
            <a href='https://skinsearch.com' target="_blank" className='price'>
              <div className='value'>$0.88</div>
              <div className='skinsearch'>
                PRICE CHECKED BY
                <div>SKINSEARCH</div>
              </div>
            </a>
          </div>
        </main>
      </div>
    </section>
  )
}
