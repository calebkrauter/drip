'use client';
import { Hero } from './components/Hero';
import { ProfileImage } from './components/ProfileImage';
import { Section } from './components/Section';
import { ProjectCards } from './components/ProjectCards';
import { ExperienceCards } from './components/ExperienceCards';
import { experiences, projects, education } from './lib/content';
import { EducationCards } from './components/EducationCards';
import { Nav } from './components/Nav';
import { NavMobile } from './components/NavMobile';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const homeElementId = document.getElementById('home')!;
    const experienceElementId = document.getElementById('experience')!;
    const projectsElementId = document.getElementById('projects')!;
    const educationElementId = document.getElementById('education')!;

    const homeButtonMobile = document.getElementById('home-mobile-button')!;
    const experienceButtonMobile = document.getElementById(
      'experience-mobile-button',
    )!;
    const projectsButtonMobile = document.getElementById(
      'projects-mobile-button',
    )!;
    const educationButtonMobile = document.getElementById(
      'education-mobile-button',
    )!;

    const homeButton = document.getElementById('home-button')!;
    const experienceButton = document.getElementById('experience-button')!;
    const projectsButton = document.getElementById('projects-button')!;
    const educationButton = document.getElementById('education-button')!;

    const sections = [
      homeElementId,
      experienceElementId,
      projectsElementId,
      educationElementId,
    ];
    const sectionButtonsMobile = [
      homeButtonMobile,
      experienceButtonMobile,
      projectsButtonMobile,
      educationButtonMobile,
    ];

    const sectionButtons = [
      homeButton,
      experienceButton,
      projectsButton,
      educationButton,
    ];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const i = sections.indexOf(entry.target as HTMLElement);
        if (entry.isIntersecting) {
          sectionButtonsMobile[i].classList.add(`on-nav`);
          sectionButtons[i].classList.add(`on-nav`);
          sectionButtons[i].focus();
        } else {
          sectionButtonsMobile[i].classList.remove(`on-nav`);
          sectionButtons[i].classList.remove(`on-nav`);
        }
      });
    });

    sections.forEach((element) => {
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <Nav />
      <div className='background-image-frame'>
        <Image
          className='background-image'
          src={'/background.png'}
          alt={'profile image'}
          fill
        ></Image>
      </div>
      <div id='home'></div>
      <main>
        <div className='hero-space'>
          <Hero>
            <ProfileImage />
          </Hero>
        </div>
        <div className='body-space-frame'>
          <div className='body-space-left-column' />
          <div className='body-space'>
            <Section name='Experience' id='experience' />
            <ExperienceCards content={experiences} />
            <Section name='Projects' id='projects' />
            <ProjectCards content={projects} />
            <Section name='Education' id='education' />
            <EducationCards content={education} />
          </div>
        </div>
      </main>
      <NavMobile />

      <footer></footer>
    </div>
  );
}
