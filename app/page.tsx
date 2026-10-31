'use client';
import { Card } from './components/Card';
import { Hero } from './components/Hero';
import { ProfileImage } from './components/ProfileImage';
import { Section } from './components/Section';
import { SideNav } from './components/SideNav';
import { Button, scollNav } from './components/Button';

export default function Home() {
  return (
    <body>
      <nav
        className='nav'
        onClick={() => {
          scollNav('');
        }}
      >
        <Button name='CK' id='home-button' />
        <div className='nav-line-1'></div>
        <div className='nav-button-container'>
          <div className='nav-buttons'>
            <Button name='Introduction' />
            <Button name='Projects' targetId='projects' />
            <Button name='Experience' targetId='experience' />
            <Button name='Education' targetId='education' />
          </div>
        </div>
      </nav>
      <main>
        <div className='hero-space'>
          <Hero>
            <ProfileImage />
          </Hero>
        </div>

        <div className='body-space-frame'>
          <div className='body-space-left-column' />
          <div className='body-space'>
            <Section name='Projects' id='projects' />
            <Card />
            <Card />
            <Section name='Experience' id='experience' />
            <Card />
            <Card />
            <Section name='Education' id='education' />
            <Card />
            <Card />
          </div>
          {/* <SideNav /> */}
        </div>
      </main>
      <footer></footer>
    </body>
  );
}
