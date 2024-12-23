"use client";

import { ReactNode } from 'react';
import './socials.css'
import { ArrowRight, FacebookIcon, InstagramIcon, TiktokIcon, TwitchIcon, YoutubeIcon } from '@/utils/Icon';

export default function Socials() {
  return (
    <section className="socials">
      <div className='container'>
        <h2>Social media</h2>
        <main>
          <Card
            link='https://www.youtube.com/sparkles'
            color="255, 0, 0"
            account='Sparkles'
            accountLogo="ninjalogo.webp"
            platform='YOUTUBE'
            platformIcon={<YoutubeIcon />}
            count='2.39M'
          />
          <Card
            link='https://www.twitch.tv/Sparkles'
            color="200, 0, 255"
            account='Sparkles'
            accountLogo="ninjalogo.webp"
            platform='TWITCH'
            platformIcon={<TwitchIcon />}
            count='100K'
          />
          <Card
            link='https://www.facebook.com/SparklesYT'
            color="50, 100, 255"
            account='SparklesYT'
            accountLogo="ninjalogo.webp"
            platform='FACEBOOK'
            platformIcon={<FacebookIcon />}
            count='91K'
          />
          <Card
            link='https://www.instagram.com/sparkles1337'
            color="255, 0, 162"
            account='sparkles1337'
            accountLogo="iglogo.jpg"
            platform='INSTAGRAM'
            platformIcon={<InstagramIcon />}
            count='30K'
          />
          <Card
            link='https://www.tiktok.com/@sparklesyt_official'
            color="0, 229, 255"
            account='sparklesyt_official'
            accountLogo="ninjalogo.webp"
            platform='TIKTOK'
            platformIcon={<TiktokIcon />}
            count='347'
          />
        </main>
      </div>
    </section>
  )
}

type CardProps = {
  link: string,
  account: string,
  accountLogo: string,
  platform: string,
  platformIcon: ReactNode,
  count: string,
  color: string
};

const Card = ({ link, account, accountLogo, platform, platformIcon, count, color }: CardProps) => {
  return <a href={link} className='socialsCard' style={{"--color": color } as React.CSSProperties}>
    <div className='spread'>
      {platformIcon}
      <span>{platform}</span>
    </div>
    <div className='account'>
      <img src={'/' + accountLogo} />
      <span>@{account}</span>
    </div>
    <div className='spread'>
      <span>{count}</span>
      <ArrowRight />
    </div>
  </a>;
};
