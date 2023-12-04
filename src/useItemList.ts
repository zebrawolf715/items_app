import { useCallback, useState } from "react";

// 商品一覧に関するカスタムフック
export const useItemList = () => {
  // 商品一覧State
  const [items, setItems] = useState<string[]>([]);
  const [items2, setItems2] = useState<string[]>([]);

  // 商品追加ロジック
  const addTodo = useCallback(
    (name: string, explanation: string) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newItems = [...items];
      const newItems2 = [...items2];
      // テキストボックスの入力内容をメモ配列に追加
      newItems.push(name);
      setItems(newItems);
      newItems2.push(explanation);
      setItems2(newItems2);
      // 依存配列に忘れずにitemsを設定
    },
    [items, items2]
  );
  

  // 商品削除ロジック
  const deleteTodo = useCallback(
    (index: number) => {
      // State変更を正常に検知させるため新たな配列を生成
      const newItems = [...items];
      // 商品配列から該当の要素を削除
      newItems.splice(index, 1);
      setItems(newItems);
    },
    [items]
  );

  return { items, items2, addTodo, deleteTodo };
};
