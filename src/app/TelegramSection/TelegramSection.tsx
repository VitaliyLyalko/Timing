import React from 'react';
import s from '@/app/TelegramSection/telegramSection.module.scss';

interface ITelegram {
  href: string;
  src: string;
}
const TelegramSection = ({ href, src }: ITelegram) => {
  return (
    <section className={s.all}>
      <div className='_container'>
        <img src={src} alt='julia' className={s.image} />
        <p className={s.title}>Details</p>
        <p className={s.text}>
          Для зворотнього зв’язку та узгодження питань запрошуємо перейти у телеграм-канал
        </p>
        <div className={s.button}>
          <a rel='noreferrer' target='_blank' href={href}>
            телеграм-канал
          </a>
        </div>
      </div>
    </section>
  );
};

export default TelegramSection;
