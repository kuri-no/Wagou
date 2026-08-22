import Button from '@/components/button/Button';
import Heading from '@/components/heading/Heading';
import About from '@/components/home/About';
import Access from '@/components/home/Access';
import Mv from '@/components/home/Mv';
import Content from '@/components/layout/Content';

export default function Home() {
  return (
    <>
      <Mv />

      <About />

      <Content>
        <div
          className="test"
          style={{ height: '600px', background: '#f9f6f1' }}
        ></div>
        <Heading label="日々のこと" />
        <div className="test" style={{ height: '200px' }}></div>
        <Button href="/news/" text="一覧へ" center />
        <div
          id="anc_1"
          className="test"
          style={{ height: '600px', backgroundColor: 'blue' }}
        ></div>
        <Button
          href="https://maps.app.goo.gl/sFwV36UioEouegU38"
          text="Google mapへ"
          variant="outline"
          center
          blank
        />
        <div
          id="anc_2"
          className="test"
          style={{ height: '600px', backgroundColor: 'purple' }}
        ></div>
        <Button
          href="https://maps.app.goo.gl/sFwV36UioEouegU38"
          text="Google mapへ"
          variant="outline"
          center
          blank
        />
        <div
          id="anc_3"
          className="test"
          style={{ height: '600px', backgroundColor: 'green' }}
        ></div>
      </Content>

      <Access />
    </>
  );
}
