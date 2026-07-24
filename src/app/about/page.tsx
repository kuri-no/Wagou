import ButtonSample from "@/components/ui/ButtonSample";
import CardSample from "@/components/ui/CardSample";
import TwoColumnSample from "@/components/layout/TwoColumnSample";
import MenuSample from "@/components/ui/MenuSample";
import Button from "@/components/ui/Button";
import ButtonOutline from "@/components/ui/ButtonOutline";
import Heading from "@/components/ui/Heading";
import HamburgerIcon from "@/components/ui/HamburgerIcon";
import PageFirstView from "@/components/layout/PageFirstView";

export default function About() {
  const boxClass = "box";

  return (
    <>
      <PageFirstView
        subText="About"
        mainText="サンプルページ"
        textAlign="isCenter"
      />
      <TwoColumnSample>
        <div className={boxClass}>
          <Button href="#" text="導入事例をすべて見る" />
          <ButtonOutline href="#" text="導入事例をすべて見る" />
          <hr />
          <Heading subText="Feature" mainText="3つの特徴" textAlign="isLeft" />
          <hr />
          {/* <HamburgerIcon isOpen={false} /> */}
          <p style={{ color: "#333", backgroundColor: "pink" }}>
            段落が入ります。段落が入ります。
            <br />
            段落が入ります。
          </p>
          <ButtonSample
            text="ボタン"
            type="submit"
            disabled={true}
            title="テスト"
          />
          <hr />
          <CardSample />
          <hr />
          <MenuSample />
        </div>
      </TwoColumnSample>
    </>
  );
}
