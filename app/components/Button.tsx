import { useState } from 'react';
import { scollNav } from '../hooks/scrollNav';

interface Props {
  name: string;
  id?: string;
  targetId?: string;
  className?: string;
}

export function Button({
  name,
  id = '',
  targetId = 'home-button',
  className = '',
}: Props) {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <button
      id={id}
      className={
        buttonPressed && id === 'ck-home-button'
          ? 'squish className'
          : buttonPressed
            ? 'bounce className'
            : 'className'
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
