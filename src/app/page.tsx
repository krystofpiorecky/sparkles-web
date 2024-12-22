import styles from './page.module.css'
import Hero from '@/sections/hero/hero'
import Socials from '@/sections/socials/socials'

export default function Home() {
  return (
    <main className={styles.div}>
      <Hero></Hero>
      <section className="content">
        <Socials />
      </section>
    </main>
  )
}
