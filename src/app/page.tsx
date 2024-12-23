"use client";

import styles from './page.module.css'
import Hero from '@/sections/hero/hero'
import Projects from '@/sections/projects/projects'
import Socials from '@/sections/socials/socials'
import Sticker from '@/sections/sticker/sticker'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function Home() {
  const userAgent = navigator.userAgent;
  const isSamsungBrowser = /SamsungBrowser/i.test(userAgent);
  return <SimpleBar style={{ maxHeight: '100vh', overflowX: 'hidden', color: "#fff" }}>
    <main className={styles.div} data-samsungbrowser={isSamsungBrowser}>
      <Hero></Hero>
      <section className="content">
        <Socials />
        <Sticker />
        <Projects />
      </section>
    </main>
  </SimpleBar>
}
