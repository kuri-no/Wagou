import ButtonSample from "./ButtonSample";

export default async function CardSample() {
  const buttons = [
    { id: 1, text: "詳細を見る" },
    { id: 2, text: "購入する" },
    { id: 3, text: "お気に入りを追加" },
    { id: 4, text: "もっと見る" }
  ]

  const isError = true;

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const json = await response.json();

  console.log("" ?? "空の説明文です。");

  return (
    <div className="card">
      <p style={{ color: "#333", backgroundColor: "orange" }}>
        カードの内容が入ります。
      </p>
      <p>fetchで取得したタイトルは、「{json.title}」です。</p>
      {
        buttons.map((button) => {
          return <ButtonSample text={button.text} type="button" key={button.id} />
        })
      }
      {
        isError && <p>エラーがあります。</p>
      }
    </div>
  );
}
