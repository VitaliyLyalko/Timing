'use client';

// import React from 'react';
import s from '@/app/TimeSection/timeSection.module.scss';
import React, { useEffect } from 'react';

interface ITime {
  date: string;
  data: string;
}
const TimeSection = ({ date, data }: ITime) => {
  useEffect(() => {
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // конечная дата, например 1 июля 2021
    const deadline = new Date(date);
    // id таймера
    let timerId: any = null;

    // склонение числительных
    //@ts-ignore
    function declensionNum(num, words) {
      return words[
        num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
      ];
    }

    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      //@ts-ignore
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      if ($days && $hours && $minutes && $seconds) {
        //@ts-ignore
        $days.textContent = days < 10 ? `0${days}` : days; //@ts-ignore
        $hours.textContent = hours < 10 ? `0${hours}` : hours; //@ts-ignore
        $minutes.textContent = minutes < 10 ? `0${minutes}` : minutes; //@ts-ignore
        $seconds.textContent = seconds < 10 ? `0${seconds}` : seconds; //@ts-ignore
        $days.dataset.title = declensionNum(days, ['день', 'дні', 'днів']); //@ts-ignore
        $hours.dataset.title = declensionNum(hours, ['година', 'години', 'годин']); //@ts-ignore
        $minutes.dataset.title = declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин']); //@ts-ignore
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
      }
    }

    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  }, []);

  return (
    <section className={s.all}>
      <div className='_container'>
        <p className={s.title}>Будемо раді бачити Вас</p>
        <p className={s.data}>{data}</p>
        <p className={s.text}>
          Цей день неможливо уявити без найближчих для нас людей, тому були б дуже раді, якщо Ви
          розділите цю важливу подію разом з нами через
        </p>
        <div className={s.content__time}>
          <div className={s.timer__items}>
            <div className={`${s.timer__item} timer__days`}>00</div>
            <div className={`${s.timer__item} timer__hours`}>00</div>
            <div className={`${s.timer__item} timer__minutes`}>00</div>
            <div className={`${s.timer__item} timer__seconds`}>00</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSection;
