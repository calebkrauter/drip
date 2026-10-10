import Image from 'next/image';

export function ProfileImage() {
  return (
    <div className='profile-image-frame-block'>
      <div className='profile-image-frame'>
        <Image
          className='profile-image'
          src={'/profile.png'}
          alt={'profile image'}
          fill
        ></Image>
      </div>
    </div>
  );
}
