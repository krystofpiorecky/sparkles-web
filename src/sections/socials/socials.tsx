"use client";

import { ReactNode } from 'react';
import './socials.css'

const ArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>;
const YoutubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="576" height="512" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"/></svg>;
const TiktokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121 121 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"/></svg>;
const TwitchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M391.17 103.47h-38.63v109.7h38.63ZM285 103h-38.63v109.75H285ZM120.83 0L24.31 91.42v329.16h115.83V512l96.53-91.42h77.25L487.69 256V0Zm328.24 237.75l-77.22 73.12h-77.24l-67.6 64v-64h-86.87V36.58h308.93Z"/></svg>;

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
