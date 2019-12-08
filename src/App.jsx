import React, { useState, useCallback } from "react";

import "./App.css";

const Component = (props) => (<div>{props.children}</div>);
const MemoComponent = React.memo(Component);

const Text = ({text}) => (<div>{text}</div>);

function Weather({ title, date, handler }) {
  return (
    <div>
      <div>{handler}</div>
      <Text text={`Weather: ${title}`} />
      <Text text={`date: ${date}`} />
    </div>
  );
}

export const MemoizedWeather = React.memo(Weather);

const Button = (props) => (<button onClick={props.onClick}>{props.children}</button>)

const TestListMap = () => {

  const [weather, setWeather] = useState({ title: "Sun", date: "Yesterday" });

  const normal_func = () => weather;
  const memo_func = useCallback(() => weather, [weather]);

  return (
    <div>
      <br/>
      <div> Component with arrow function </div>
      <Weather {...weather} handler={normal_func} />
      <br/>
      <div> Memocomponent with arrow function </div>
      <MemoizedWeather {...weather} handler={normal_func}/>
      <br/>
      <div> Component with useCallback function </div>
      <Weather {...weather} handler={memo_func} />
      <br/>
      <div> MemoComponent with useCallback function </div>
      <MemoizedWeather {...weather} handler={memo_func}/>
      <br/>
      <div> MemoParent with arrow function on child </div>
      <MemoComponent>
        <Weather {...weather} handler={normal_func} />
      </MemoComponent>
      <br/>
      <div><Button onClick={() => setWeather({ title: "Sun", date: "Yesterday" })}>Yesterday is a good day</Button></div>
      <div><Button onClick={() => setWeather({ title: "Snow", date: "Tomorrow" })}>Tommorrow has snow!</Button></div>
      <br/>
      <br/>
    </div>
  );
}


export default TestListMap;
