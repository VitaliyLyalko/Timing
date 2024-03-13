import React from 'react';
import s from '@/app/AddressSection/addressSection.module.scss';

interface IAddress {
  text: string;
  href: string;
  src: string;
}
const AddressSection = ({ text, href, src }: IAddress) => {
  return (
    <section className={s.all}>
      <div className='_container'>
        <img src={src} alt='vitalic' className={s.image} />
        <p className={s.text1}>Ми з нетерпінням чекаємо Вас за адресою:</p>
        <p className={s.text2}>{text}</p>
        <div className={s.button}>
          <a rel='noreferrer' target='_blank' href={href}>
            прокласти маршрут
          </a>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
