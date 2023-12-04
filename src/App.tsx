import { ChangeEvent, FC, useState, useCallback } from "react";
import { ItemList } from "./itemList";
import { useItemList } from "./useItemList";

export const App: FC = () => {
  // カスタムフックからそれぞれ取得
  const { items, items2, addTodo, deleteTodo } = useItemList();
  // テキストボックスState
  const [name, setText] = useState<string>("");
  const [explanation, setContent] = useState<string>("");

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const setPostContent = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

  // [追加]ボタン押下時
  const onClickAdd = () => {
    // カスタムフックの商品追加ロジック実行
    addTodo(name, explanation);
    // テキストボックスを空に
    setText("");
    setContent("");
  };

  // [削除]ボタン押下時(何番目が押されたかを引数で受け取る)
  const onClickDelete = useCallback(
    (index: number) => {
      // カスタムフックの商品削除ロジック実行
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div className="wrap">
        <h1>商品を追加したり、消したり</h1>
        <label htmlFor="item">商品タイトル</label>
        <input type="text" value={name} onChange={onChangeText} />
        <label htmlFor="ex">商品説明</label>
        <textarea value={explanation} onChange={setPostContent} />
        <button onClick={onClickAdd}>追加</button>
        <ItemList items={items} items2={items2} onClickDelete={onClickDelete} />
    </div>
  );

};
