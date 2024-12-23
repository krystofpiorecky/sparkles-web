"use client";

import { ArrowRight } from '@/utils/Icon';
import './projects.css'

export default function Projects() {
  return (
    <section className="projects">
      <div className='container'>
        <h2>My Projects</h2>
        <main>
          <Card
            name="SkinSearch"
            link='https://skinsearch.com'
            linkText='skinsearch.com'
            description='Skin search is a fresh website to find the best deals on your dream CS:GO skins. Find your new Counter Strike knife, pistol or a weapon for the cheapest price today.'
            preview='screenshot-skinsearch.png'
          />
          <Card
            name="YT-Encrypt"
            link='https://chromewebstore.google.com/detail/yt-encrypt/pcihlmcbnllaghbgjddinocpdcpfecbm'
            linkText='chromewebstore.google.com'
            description='YT-Encrypt offers you a privacy option to directly encrypt your Steam-Tradelink in the Youtube™ comment section, making it only accessible to Sparkles.'
            preview='screenshot-ytencrypt.png'
          />
          <Card
            name="Daiz Clothing"
            link='https://daizclothing.com'
            linkText='daizclothing.com'
            description='Daiz is a fashion brand founded by Donja in 2024. Donja has transferred her love for illustration into her work by creating urban streetwear with an artistic twist.'
            preview='screenshot-daizclothing.png'
          />
        </main>
      </div>
    </section>
  )
};

type CardProps = {
  name: string,
  link: string,
  linkText: string,
  description: string,
  preview: string
};

const Card = ({ name, link, linkText, description, preview }: CardProps) => {
  return <a href={link} className='projectCard' target='_blank'>
    <div className='image'>
      <img src={'/' + preview} />
    </div>
    <div className='info'>
      <h3>{name}</h3>
      <span>{linkText}</span>
      <p>{description}</p>
      <div className='button'>
        {linkText}
        <ArrowRight />
      </div>
    </div>
  </a>;
};
