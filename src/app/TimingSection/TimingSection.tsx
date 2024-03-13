import React from 'react';
import s from '@/app/TimingSection/timingSection.module.scss';

interface ITiming {
  timings: {
    clock: string;
    name: string;
    id: string;
  }[];
}

const TimingSection = ({ timings }: ITiming) => {
  return (
    <section className={s.all}>
      <div className='_container'>
        <p className={s.title}>Timing</p>
        <div className={s.timings}>
          <div className={s.timings1}>
            {timings.map((timing) => (
              <p key={timing.name} id={timing.id} className={s.timingsClock}>
                {timing.clock}
              </p>
            ))}
          </div>
          <div className={s.timings2}>
            {timings.map((timing) => (
              <p key={timing.name} id={timing.id} className={s.timingsName}>
                {timing.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingSection;
