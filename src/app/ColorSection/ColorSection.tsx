import React from 'react';
import s from '@/app/ColorSection/colorSection.module.scss';

interface IColor {
  begColors: {
    color: string;
  }[];
}
const ColorSection = ({ begColors }: IColor) => {
  return (
    <section className={s.all}>
      <div className='_container'>
        <p className={s.title}>Dress code</p>
        <p className={s.text}>
          Будемо неймовірно раді, якщо ви дотримаєтесь дресс-коду нашого свята
        </p>
        <div className={s.colorsItem}>
          {begColors.map((col) => (
            <div key={col.color} className={s.colorItem} style={{ background: col.color }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSection;
