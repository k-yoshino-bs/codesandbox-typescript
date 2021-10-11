export const Practice1 = () => {
  const clacTotalTee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onCickPractice = () => clacTotalTee(1000);

  return (
    <div>
      <p>練習問題: 引数の型指定</p>
      <button onClick={onCickPractice}>練習問題1を実行</button>
    </div>
  );
};
