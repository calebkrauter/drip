import Markdown from 'react-markdown';
import { Education } from '../lib/content';

interface Props {
  content: Education;
}
export function EducationCards({ content }: Props) {
  return (
    <div>
      {content.map((info, i) => (
        <div className='card' key={i}>
          <div className='card-header'>
            <div>{info.title}</div>
            <div className='card-date'>{info.date}</div>
          </div>
          <div className='card-description'>
            <Markdown>{info.description}</Markdown>
          </div>
          <div className='pills-block'>
            {info.tags.map((tag, i) => (
              <div
                className={
                  tag[1] === `skill`
                    ? `pill pill-skill`
                    : `pill pill-technology`
                }
                key={i}
              >
                {tag[0]}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
