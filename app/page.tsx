import { Card } from './components/Card';
import { Hero } from './components/Hero';
import { ProfileImage } from './components/ProfileImage';
import { Section } from './components/Section';

export default function Home() {
  return (
    <body>
      <nav className='nav'>
        <div className='nav-button-container'>
          <button id='home-button'>Caleb Krauter</button>
          <div className='nav-buttons'>
            <button>Introduction</button>
            <button>Projects</button>
            <button>Experience</button>
            <button>Education</button>
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
            <Section />
            <Card />
            <Card />
            <Section />
            <Card />
            <Card />
            <Section />
            <Card />
            <Card />
          </div>
          <div className='side-nav'>Nav Placeholder</div>
        </div>
      </main>
      <footer></footer>
    </body>
  );
}
