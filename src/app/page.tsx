import InviteSection from '@/app/InviteSection/InviteSection';
import TimeSection from '@/app/TimeSection/TimeSection';
import AddressSection from '@/app/AddressSection/AddressSection';
import TimingSection from '@/app/TimingSection/TimingSection';
import ColorSection from '@/app/ColorSection/ColorSection';
import TelegramSection from '@/app/TelegramSection/TelegramSection';
import EndSection from '@/app/EndSection/EndSection';

export default function Home() {
  return (
    <>
      <main>
        {/*<MainSlider />*/}
        <InviteSection title={'Vitaliy & Julia'} src={'/images/image1.webp'} />
        <TimeSection date={'2024-03-29T14:00:00'} data={'29.07.2024'} />
        <AddressSection
          text={'м. Київ, вулиця Микільсько-Хутірська, 66'}
          href={
            'https://www.google.com/maps/dir/50.4366899,30.4236933/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9C%D0%B8%D0%BA%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%BE-%D0%A5%D1%83%D1%82%D1%96%D1%80%D1%81%D1%8C%D0%BA%D0%B0,+66,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4351909,30.4537415,13z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x40d4cf7a729e7b19:0xc122709db061155c!2m2!1d30.5654038!2d50.4226209!3e2?entry=ttu'
          }
          src={'/images/image2.webp'}
        />
        <TimingSection
          timings={[
            { clock: '13:30', name: 'фуршет', id: 'фуршет' },
            {
              clock: '14:00',
              name: 'вінчання',
              id: 'вінчання',
            },
            { clock: '15:00', name: 'вітання', id: 'вітання' },
            {
              clock: '16:00',
              name: 'пір',
              id: 'пір',
            },
            { clock: '17:30', name: 'перерва', id: 'перерва' },
            {
              clock: '18:00',
              name: 'торт',
              id: 'торт',
            },
            { clock: '20:00', name: 'завершення', id: 'завершення' },
          ]}
        />
        <ColorSection
          begColors={[
            { color: '#F4C5C7' },
            { color: '#B31A14' },
            { color: '#EFB98D' },
            { color: '#292929' },
          ]}
        />
        <TelegramSection
          href={'https://web.telegram.org/a/#-1001367089506'}
          src={'/images/image3.webp'}
        />
        <EndSection />
      </main>
    </>
  );
}
