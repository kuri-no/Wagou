import styles from "./Form.module.css";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Radio from "../ui/Radio";
import Checkbox from "../ui/Checkbox";
import Submit from "../ui/Submit";

const SSG_FORM_URL = process.env.NEXT_PUBLIC_SSG_FORM;

export default function Form() {

  if( ! SSG_FORM_URL ) {
    return (
      <p>現在はフォームの送信ができない状態です。しばらくしてもう一度お試しいただくか、xxx@example.comまでご連絡ください。</p>
    );
  }

  return (
    <form className={styles.form} action={SSG_FORM_URL} method="post">
      <div className={styles.body}>
        <div className={styles.field}>
          <Label text="会社・組織名" id="your-company" />
          <Input
            type="text"
            name="会社・組織名"
            placeholder="例）山田株式会社"
            required={true}
            id="your-company"
          />
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label text="お名前" id="your-name" />
          <Input
            type="text"
            name="お名前"
            placeholder="例）山田太郎"
            required={true}
            id="your-name"
          />
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label text="従業員数" />
          <Radio
            name="従業員数"
            items={[
              { value: "1000", text: "1,000名以上" },
              { value: "500-1000", text: "500名以上1,000名未満" },
              { value: "100-500", text: "100名以上500名未満" },
            ]}
            required={true}
          />
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label text="メールアドレス" id="your-email" />
          <Input
            type="email"
            name="メールアドレス"
            placeholder="例）info@example.com"
            required={true}
            id="your-email"
            pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
          />
          <p className={styles.error}>
            入力がないか、入力内容に問題があります。
          </p>
        </div>
        <div className={styles.field}>
          <Label text="連絡先電話番号" id="your-tel" />
          <Input
            type="tel"
            name="連絡先電話番号"
            placeholder="例）000-0000-000"
            required={true}
            id="your-tel"
          />
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label text="その他" id="your-other" isRequired={false} />
          <Textarea
            name="その他"
            placeholder="お伝え事項がございましたらご自由にご記入ください。"
            required={true}
            id="your-other"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.privacy}>
          <p className={styles.privacyText}>個人情報保護方針に同意しますか？</p>
          <Checkbox
            name="個人情報保護方針に同意しますか？"
            items={[{ value: "同意する", text: "同意する" }]}
            required={true}
          />
        </div>
        <div className={styles.submit}>
          <Submit text="送信する" />
        </div>
      </div>
    </form>
  );
}
