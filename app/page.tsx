import { Hero } from './components/Hero';
import { ProfileImage } from './components/ProfileImage';

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
        <Hero>
          <ProfileImage />
        </Hero>
      </main>
      <footer></footer>
    </body>
  );
}
