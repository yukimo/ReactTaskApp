import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todotext, settodotext] = useState("");
  const [imcompleteTodos, setincompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setcompleteTodos] = useState(["うううう", "eee"]);
  const onChangeTodotext = (event) => settodotext(event.target.value);
  const onClickAdd = () => {
    const newTodos = [...imcompleteTodos, todotext];
    setincompleteTodos(newTodos);
    alert(todotext);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="todoを入力"
          value={todotext}
          onChange={onChangeTodotext}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="imcomlete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}

          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="comlete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
