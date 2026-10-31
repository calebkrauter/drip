import { useState } from 'react';

interface Props {
  name: string;
  id?: string;
  targetId?: string;
}

export function scollNav(targetId: string) {
  if (targetId === '' || targetId === 'introduction')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById(targetId)?.scrollIntoView({
    behavior: 'smooth',
  });
}

export function Button({ name, id = '', targetId = '' }: Props) {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <button
      id={id}
      className={
        buttonPressed && id === 'home-button'
          ? 'squish'
          : buttonPressed && id === ''
            ? 'bounce'
            : ''
      }
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
      {name}
    </button>
  );
}
