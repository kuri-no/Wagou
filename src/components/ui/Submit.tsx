import styles from "./Submit.module.css";

type SubmitProps = {
  text: string;
};

export default function Submit({ text }: SubmitProps) {
  return (
    <button type="submit" className={styles.submit}>
      {text}
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
      >
        <path
          d="M17.6223 8.62216C18.1246 8.11993 18.1246 7.3043 17.6223 6.80207L11.1938 0.3735C10.6915 -0.128732 9.87589 -0.128732 9.37366 0.3735C8.87143 0.875732 8.87143 1.69136 9.37366 2.19359L13.6125 6.42841H1.28571C0.574554 6.42841 0 7.00296 0 7.71413C0 8.42529 0.574554 8.99984 1.28571 8.99984H13.6085L9.37768 13.2347C8.87545 13.7369 8.87545 14.5525 9.37768 15.0548C9.87991 15.557 10.6955 15.557 11.1978 15.0548L17.6263 8.62618L17.6223 8.62216Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
