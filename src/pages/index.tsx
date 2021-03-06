import Head from "next/head";

import { Spotify } from "../components/spotify";
import { Consts } from "../misc/consts";

export default function Home(): JSX.Element {
  return (
    <div className='centerThisPlease'>
      <Head>
        <title>DEVLOOSKIE - Home</title>
      </Head>
      <nav>
        <a href='#' className='noOpacity'>
          <img src='./img/logo.png' alt="DEVLOOSKIE'S LOGO" className='logo' />
        </a>
        <h6>DEVLOOSKIE</h6>
      </nav>
      <main>
        {/* SPOTIFY */}
        <Spotify />

        {/* ABOUT */}
        <span className='headingStarter'>//</span>
        <h1>ABOUT</h1>
        <p>
          Hey, I&apos;m Cody, a 17 y/o full-stack web developer & designer. I
          love building things for the web and tools for people from all over
          the world to use. I&apos;ve contributed to many Open Source(d)
          organizations, and have worked for two notable names, dahliaOS and
          BlissOS. I am currently working at Giggl.
        </p>

        <div className='spaceInBetweenSections' />

        {/* PROJECTS */}
        <span className='headingStarter'>//</span>
        <h1>PROJECTS</h1>
        <div className='grid'>
          <div className='gridItem'>
            <h1 className='gridHeader'>IMPERIAL</h1>
            <p className='gridParagraph'>
              IMPERIAL is a code/text storing site where you can share, edit, or
              encrypt documents.
            </p>
            <a
              href='https://imperialb.in/'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              WEBSITE
            </a>
          </div>
          <div className='gridItem'>
            <h1 className='gridHeader'>Hiven</h1>
            <p className='gridParagraph'>
              Privacy-focussed chat for communities and people that live in the future. Premium groups, encrypted chat, voice chat & more.
            </p>
            <a
              href='https://hiven.io'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              WEBSITE
            </a>
          </div>
          <br /> {/* We're breaking here so they don't go all inline */}
          <div className='gridItem'>
            <h1 className='gridHeader'>dahliaOS</h1>
            <p className='gridParagraph'>
              dahliaOS is a modern, secure, lightweight and responsive operating
              system, combining the best of GNU/Linux and Fuchsia OS.
            </p>
            <a
              href='https://dahliaOS.io'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              WEBSITE
            </a>
          </div>
          <div className='gridItem'>
            <h1 className='gridHeader'>Giggl</h1>
            <p className='gridParagraph'>
              From hosting virtual movie nights, browsing the web with friends or watching anime with your long-distance partner: Giggl lets you do that together in real-time.
            </p>
            <a
              href='https://giggl.app'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              WEBSITE
            </a>
          </div>
        </div>

        <div className='spaceInBetweenSections' />

        {/* DESIGNS */}
        <span className='headingStarter'>//</span>
        <h1>DESIGNS</h1>
        <div className='designGrid'>
          <div className='designGridItem'>
            <a
              className='noOpacity designGridAnchor'
              href='https://www.instagram.com/p/CNEKawnAIKj/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/img/designs/QUADECA.webp'
                className='designGridImage'
                alt='QUADECA web design'
              />
            </a>
          </div>
          <div className='designGridItem'>
            <a
              className='noOpacity designGridAnchor'
              href='https://www.instagram.com/p/CGdZlqiAao9/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/img/designs/OFFWHITE.webp'
                className='designGridImage'
                alt='OFFWHITE web design'
              />
            </a>
          </div>
          <br />
          <div className='designGridItem'>
            <a
              className='noOpacity designGridAnchor'
              href='https://www.instagram.com/p/CJHkHnGgxG6/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/img/designs/ARIES.webp'
                className='designGridImage'
                alt='ARIES web design'
              />
            </a>
          </div>
          <div className='designGridItem'>
            <a
              className='noOpacity designGridAnchor'
              href='https://www.instagram.com/p/CDb3eGajPP_/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/img/designs/DBRAND.webp'
                className='designGridImage'
                alt='DBRAND web design'
              />
            </a>
          </div>
        </div>

        <div className='spaceInBetweenSections' />

        {/* CONTACT */}
        <span className='headingStarter'>//</span>
        <h1>CONTACT</h1>
        <ul className='socialMedias'>
          <li className='socialMedia'>
            <span className='socialStart'>\\</span>
            <a
              href={"https://instagram.com/" + Consts.instagram}
              target='_blank'
              rel='noreferrer'
            >
              <h2>INSTAGRAM</h2>
            </a>
          </li>
          <li className='socialMedia'>
            <span className='socialStart'>\\</span>
            <a
              href={"https://twitter.com/" + Consts.twitter}
              target='_blank'
              rel='noreferrer'
            >
              <h2>TWITTER</h2>
            </a>
          </li>
          <li className='socialMedia'>
            <span className='socialStart'>\\</span>
            <a
              href={"https://github.com/" + Consts.github}
              target='_blank'
              rel='noreferrer'
            >
              <h2>GITHUB</h2>
            </a>
          </li>
          <li className='socialMedia'>
            <span className='socialStart'>\\</span>
            <a
              href={"https://discord.com/users/" + Consts.discordID}
              target='_blank'
              rel='noreferrer'
            >
              <h2>DISCORD</h2>
            </a>
          </li>
        </ul>

        <div className='spaceInBetweenSections' />
      </main>
    </div>
  );
}
