import About from '@/components/home/About';
import Access from '@/components/home/Access';
import Flow from '@/components/home/Flow';
import Menu from '@/components/home/Menu';
import Mv from '@/components/home/Mv';
import News from '@/components/home/News';

export default function Home() {
  return (
    <>
      <Mv />
      <About />
      <Menu />
      <Flow />
      <News />
      <Access />
    </>
  );
}
