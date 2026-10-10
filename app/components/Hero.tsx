import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Hero({ children }: Props) {
  return (
    <div className='hero'>
      <div className='hero-summary'>
        Has 47 browser tabs open and considers that organized. Can spend three
        hours researching a $12 purchase. Starts a simple project and somehow
        ends up rebuilding the entire system. Says “quick question” before
        asking something that requires a whiteboard. Has enough unfinished
        projects to keep a small team busy. Reads documentation only after
        trying everything else. Wants to do things the right way, preferably
        without paying for anything.
      </div>
      {children}
    </div>
  );
}
