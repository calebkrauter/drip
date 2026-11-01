'use client';
import { ButtonMobile } from './ButtonMobile';

export function NavMobile() {
  return (
    <nav className='nav-mobile'>
      <ButtonMobile name='•' id='home-mobile-button' />
      <ButtonMobile
        name='•'
        targetId='experience'
        id='experience-mobile-button'
      />
      <ButtonMobile name='•' targetId='projects' id='projects-mobile-button' />
      <ButtonMobile
        name='•'
        targetId='education'
        id='education-mobile-button'
      />
    </nav>
  );
}
