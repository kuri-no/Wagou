import styles from "@/components/ui/Heading.module.css";

export type HeadingProps = {
  subText: string;
  mainText: string;
  textAlign: "isLeft" | "isCenter" | "isRight";
};

export default function Heading({
  subText,
  mainText,
  textAlign = "isCenter",
}: HeadingProps) {
  return (
    <div className={`${styles.heading} ${styles[textAlign]}`}>
      <p className={styles.sub}>{subText}</p>
      <h2 className={styles.main}>{mainText}</h2>
    </div>
  );
}
