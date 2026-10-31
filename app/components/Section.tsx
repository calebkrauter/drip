interface Props {
  name: string;
  id: string;
}

export function Section({ name, id }: Props) {
  return (
    <div className='section' id={id}>
      <div>{name}</div>
      <hr className='section-line'></hr>
    </div>
  );
}
