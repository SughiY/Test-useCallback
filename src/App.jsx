import React, { useState, useCallback } from "react";

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

const MemoWrapper = React.memo(({ title, date }) => (
  <Component>
    <Weather title={title} date={date} handler={() => {}} />
  </Component>
));

const fake_memo_func = () => {};

export const MemoizedWeather = React.memo(Weather);

const Button = (props) => (<button onClick={props.onClick}>{props.children}</button>)

const TestListMap = () => {

  const memo_func = useCallback(()=>{}, []);

  const [weather, setWeather] = useState({ title: "Sun", date: "Yesterday" });

  return (
    <div>
      <br/>
      <div> Component with arrow function </div>
      <Weather {...weather} handler={() => {}} />
      <br/>
      <div> Memocomponent with arrow function </div>
      <MemoizedWeather {...weather} handler={() => {}}/>
      <br/>
      <div> Component with useCallback function </div>
      <Weather title={"test"} date={"Today"} handler={memo_func} />
      <br/>
      <div> MemoComponent with useCallback function </div>
      <MemoizedWeather {...weather} handler={memo_func}/>
      <br/>
      <div> MemoParent with arrow function on child </div>
      <MemoWrapper {...weather} />
      <br/>
      <div><Button onClick={() => setWeather({ title: "Sun", date: "Yesterday" })}>Yesterday is a good day</Button></div>
      <div><Button onClick={() => setWeather({ title: "Snow", date: "Tomorrow" })}>Tommorrow has snow!</Button></div>
      <br/>
      <br/>
    </div>
  );
}


export default TestListMap;
