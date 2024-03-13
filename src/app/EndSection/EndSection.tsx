import React from 'react';
import s from '@/app/EndSection/endSection.module.scss';

const EndSection = () => {
  return (
    <section className={s.all}>
      <div className='_container'>
        <div className={s.text}>
          <p>З нетерпінням чекаємо цього дня!</p>
          <p>До зустрічі!</p>
          <img src='/images/Vector.svg' alt='images' className={s.icon} />
        </div>
      </div>
    </section>
  );
};

export default EndSection;
