import React from "react";

export const ColorfulMessage = (props) => {
  // console.log("colorful");
  // オブジェクトの分割代入
  const { color, children } = props;
  const contentStyle = {
    // color: color,
    // オブジェクトとプロパティ名が同じ場合は、:以降は省略可能
    color,
    fontSize: "18px"
  };
  // return内の場合は、javascriptを書く場合は{}を忘れない事
  // return <p style={contentStyle}>{props.message}</p>;
  // chidrenを指定して受け取れる
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
