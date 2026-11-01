'use client';
import { scollNav } from '../hooks/scrollNav';
import { Button } from './Button';

export function Nav() {
  return (
    <nav
      className='nav'
      onClick={() => {
        scollNav('home-button');
      }}
    >
      <Button name='CK' id='ck-home-button' />
      <div className='nav-line-1'></div>
      <div className='nav-button-container'>
        <div className='nav-buttons'>
          <Button name='Introduction' id='home-button' targetId='home-button' />
          <Button
            name='Experience'
            id='experience-button'
            targetId='experience'
          />
          <Button name='Projects' id='projects-button' targetId='projects' />
          <Button name='Education' id='education-button' targetId='education' />
        </div>
      </div>
    </nav>
  );
}
