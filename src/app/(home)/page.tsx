import Button from '@/components/button/Button';
import Heading from '@/components/heading/Heading';
import Inner from '@/components/inner/Inner';

export default function Home() {
  return (
    <Inner>
      <div className="test" style={{ height: '200px' }}></div>

      <Heading label="日々のこと" />

      <div className="test" style={{ height: '200px' }}></div>

      <Button href="/news/" text="一覧へ" center />

      <div id="anc_1" className="test" style={{ height: '200px' }}></div>

      <Button
        href="https://maps.app.goo.gl/sFwV36UioEouegU38"
        text="Google mapへ"
        variant="outline"
        center
        blank
      />

      <div id="anc_2" className="test" style={{ height: '200px' }}></div>
    </Inner>
  );
}
