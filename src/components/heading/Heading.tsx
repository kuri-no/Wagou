export type HeadingProps = {
  subText: string;
  mainText: string;
};

export default function Heading({
  subText,
  mainText,
}: HeadingProps) {
  return (
    <div className="heading">
      <p className="sub">{subText}</p>
      <h2 className="main">{mainText}</h2>
    </div>
  );
}
