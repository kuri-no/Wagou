import Button from '@/components/button/Button';
import styles from './Form.module.scss';
import Input from './Input';
import Label from './Label';
import Select from './Select';
import Textarea from './Textarea';

// const SSG_FORM_URL = process.env.NEXT_PUBLIC_SSG_FORM;

export default function Form() {
  return (
    <form className={styles.form} action="" method="post">
      <div className={styles.row}>
        <Label htmlFor="your-name" text="お名前" />
        <Input
          type="text"
          id="your-name"
          name="お名前"
          autoComplete="name"
          required
        />
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
      </div>
      <div className={styles.row}>
        <Label htmlFor="your-date" text="予約希望日" />
        <Input
          type="text"
          id="your-date"
          name="予約希望日"
          autoComplete="off"
          required
        />
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
      </div>
      <div className={styles.row}>
        <Label htmlFor="your-message" text="備考欄" required={false} />
        <Textarea id="your-message" name="備考欄" required={false} />
      </div>
      <Button type="submit" text="送信する" className={styles.submit} center />
    </form>
  );
}
