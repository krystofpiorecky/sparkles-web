import styles from './page.module.css'
import Hero from '@/sections/hero/hero'
import Socials from '@/sections/socials/socials'
import Sticker from '@/sections/sticker/sticker'

export default function Home() {
  return (
    <main className={styles.div}>
      <Hero></Hero>
      <section className="content">
        <Socials />
        <Sticker />
      </section>
    </main>
  )
}
