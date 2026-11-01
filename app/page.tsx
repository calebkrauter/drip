'use client';
import { Hero } from './components/Hero';
import { ProfileImage } from './components/ProfileImage';
import { Section } from './components/Section';
import { Button, scollNav } from './components/Button';
import { ProjectCards } from './components/ProjectCards';
import { ExperienceCards } from './components/ExperienceCards';

import { experiences, projects, education } from './lib/content';
import { EducationCards } from './components/EducationCards';

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
            <ExperienceCards content={experiences} />
            <Section name='Experience' id='experience' />
            <ProjectCards content={projects} />
            <Section name='Education' id='education' />
            <EducationCards content={education} />
          </div>
        </div>
      </main>
      <footer></footer>
    </body>
  );
}
