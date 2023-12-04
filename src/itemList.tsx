import { FC } from "react";

// 必要なPropsは商品一覧と削除時に実行する関数
type Props = {
  items: string[];
  items2: string[];
  onClickDelete: (index: number) => void;
};

export const ItemList: FC<Props> = (props) => {
  const { items, items2, onClickDelete } = props;

  return (
    
    <div>
      <h2>商品一覧</h2>
      <div>
      {items.map((name, index) => (
            <div key={name}>
                <dl>
                    <dt><span>商品タイトル：</span>{name}</dt>
                    <dd>商品説明：{items2[index]}</dd>
                </dl>
                <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
        ))}
      </div>
    </div>
  );
};