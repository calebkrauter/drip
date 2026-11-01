import { useState } from 'react';
import { scollNav } from '../hooks/scrollNav';

interface Props {
  name: string;
  id?: string;
  targetId?: string;
}

export function ButtonMobile({
  name,
  id = '',
  targetId = 'home-button',
}: Props) {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <button
      id={id}
      className={`button-mobile`}
      onClick={(e) => {
        e.stopPropagation();

        setButtonPressed(false);
        requestAnimationFrame(() => {
          setButtonPressed(true);
        });

        scollNav(targetId);
      }}
      onAnimationEnd={() => {
        setButtonPressed(false);
      }}
    >
      <div className='nav-dot'>{name}</div>
    </button>
  );
}
