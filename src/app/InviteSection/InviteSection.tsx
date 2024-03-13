import s from './inviteSection.module.scss';
import 'swiper/css';

interface IInviteSection {
  title?: string;
  src: string;
}

const InviteSection = ({ title, src }: IInviteSection) => {
  return (
    <section className={s.all}>
      <div className='_container'>
        <h1 className={s.names}>{title}</h1>
        <div className={s.text}>
          <p className={s.text1}>Дорогі гості! </p>
          <p className={s.text2}>
            Запрошуємо Вас розділити з нами дуже важливу і радісну подію - наше весілля
          </p>
          <div className={s.images}>
            <img src='/images/Vector.svg' alt='images' className={s.icon} />
            <img src={src} alt='images' className={s.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteSection;
