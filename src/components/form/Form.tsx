import Button from '@/components/button/Button';
import { getTodayDateInputValue } from '@/utils/dateFormat';
import styles from './Form.module.scss';
import Input from './Input';
import Label from './Label';
import Select from './Select';
import Textarea from './Textarea';

const SSG_FORM_URL = process.env.NEXT_PUBLIC_SSG_FORM;

export default function Form() {
  const today = getTodayDateInputValue();

  if (!SSG_FORM_URL) {
    return (
      <p className={styles.alert}>
        現在フォームの送信ができない状態です。
        <br />
        復旧までもうしばらくお待ちください。
      </p>
    );
  }

  return (
    <form className={styles.form} action={SSG_FORM_URL} method="post">
      <div className={styles.row}>
        <Label htmlFor="your-name" text="お名前" />
        <Input
          type="text"
          id="your-name"
          name="お名前"
          autoComplete="name"
          required
        />
        <p className={styles.error}>必須の入力項目です。</p>
      </div>
      <div className={styles.row}>
        <Label htmlFor="your-email" text="メールアドレス" />
        <Input
          type="email"
          id="your-email"
          name="メールアドレス"
          autoComplete="email"
          required
        />
        <p className={styles.error}>必須の入力項目です。</p>
      </div>
      <div className={styles.row}>
        <Label htmlFor="your-tel" text="電話番号" />
        <Input
          type="tel"
          id="your-tel"
          name="電話番号"
          autoComplete="tel"
          required
        />
        <p className={styles.error}>必須の入力項目です。</p>
      </div>
      <div className={styles.row}>
        <Label htmlFor="your-date" text="予約希望日" />
        <Input
          type="date"
          id="your-date"
          name="予約希望日"
          autoComplete="off"
          min={today}
          required
        />
        <p className={styles.error}>必須の入力項目です。</p>
      </div>
      <div className={styles.row}>
        <Label htmlFor="your-seat" text="お席の希望" />
        <Select
          id="your-seat"
          name="お席の希望"
          placeholder="選択してください"
          required
          options={['カウンター席', 'テーブル席', '個室', '希望なし']}
        />
        <p className={styles.error}>必須の入力項目です。</p>
      </div>
      <div className={styles.row}>
        <Label htmlFor="your-message" text="備考欄" required={false} />
        <Textarea id="your-message" name="備考欄" required={false} />
      </div>
      <div className={styles.submit}>
        <Button type="submit" text="送信する" center />
        <p className={styles.error}>入力内容に誤りがあります。</p>
      </div>
    </form>
  );
}
