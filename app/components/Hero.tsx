import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Hero({ children }: Props) {
  return (
    <div className='hero'>
      <div className='hero-summary'>
        I am an IT Technician I and a Software Developer. Full Time as an IT
        Technician I at Neptune Aviation Services, Inc. where I serve employees
        across the organization by providing front-line technical support by
        maintaining computers, and resolving technical issues. Upon graduating
        at UWT I was given an opportunity to collaborate with a team of
        developers and designers on a web development project for Global Radio
        Outreach as a Software Developer intern.
      </div>
      {children}
    </div>
  );
}
