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
        <Label text="お名前" id="your-name" />
        <Input id="your-name" type="text" name="お名前" required={true} />
      </div>
      <div className={styles.row}>
        <Label text="メールアドレス" id="your-email" />
        <Input
          id="your-email"
          type="email"
          name="メールアドレス"
          required={true}
        />
      </div>
      <div className={styles.row}>
        <Label text="電話番号" id="your-tel" />
        <Input id="your-tel" type="tel" name="電話番号" required={true} />
      </div>
      <div className={styles.row}>
        <Label text="予約希望日" id="your-date" />
        <Input id="your-date" type="text" name="予約希望日" required={true} />
      </div>
      <div className={styles.row}>
        <Label text="お席の希望" id="your-seat" />
        <Select
          id="your-seat"
          name="お席の希望"
          required={true}
          options={[
            '選択してください',
            'カウンター席',
            'テーブル席',
            '個室',
            '希望なし',
          ]}
        />
      </div>
      <div className={styles.row}>
        <Label text="備考欄" id="your-message" isRequired={false} />
        <Textarea
          id="your-message"
          type="textarea"
          name="備考欄"
          required={true}
        />
      </div>
      <Button type="submit" text="送信する" className={styles.submit} center />
    </form>
  );
}
