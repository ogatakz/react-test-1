// eslintの無効化
// 静的構文解析の最終行に記載されている文と「off」を記載する
/* react-hooks/exhaustive-deps: off */

// Reactのコードを書いていく
// Reactを使用している場合、拡張子をjsxにしておくこと（推奨）
import React, { useEffect, useState } from "react";

// defaultでexportしていた時は、importしたものに名称付けれていた。
// 通常のexportの場合、分割代入する必要がある。
/**
 * reactの場合、コンポーネントの名称が確約されるため、
 * reactを使用する際は、通常のexportでも問題ない。
 */
// import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage } from "./components/ColorfulMessage";

/**
 * Reactとレンダリングの関係性
 *
 * Steteの変更で表示が変わる
 * →再読み込みもしていないのに、表示が変わる理由とは？
 *
 * Reactのコンポーネントが再レンダリングされているから。
 * →閉じたコンポーネントの中で、Stateの更新があった場合、Reactが検知して、
 * 　コンポーネントの初めから順に読み込み、再レンダリングを行う。
 *
 * 再レンダリングの条件
 * ①Stateを変更したとき、
 * ②propsの中身が変更されたとき
 * ③親のコンポーネントが再レンダリングされたとき
 */

const App = () => {
  console.log("最初");
  // 配列の分割代入
  // 動的に変わる変数「set」と、それを更新していく「setNum」という関数？
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  /**
   * useEffectの第２引数に配列を取ることが出来る
   * この第2引数に空の配列[]を渡すと、
   * そのコンポーネントで最初の１回だけ通したい処理を実行することが出来る
   *
   * 第2引数に変数(num)を指定すると、その変数が変化したときだけ処理を走らせることが出来る。
   * ->numを監視するような設定
   */
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      {/* スタイル内の{}について、外側はjavascriptを書くことの宣言、内側はjavascriptのオブジェクトの指定 */}
      {/* CSSのプロパティとして扱う場合,文字('')で指定する */}
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      {/* {}で直接styleを記載する */}
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

/**
 * Props：コンポーネントに渡す引数のようなもの
 * コンポーネント：画面要素の１単位。１画面から１要素まで様々
 */

// 他でも上記の関数を使用するため
export default App;
