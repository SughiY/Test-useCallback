import React, { useState, useCallback, useRef } from "react";

const Text = ({text}) => (<div>{text}</div>);

const useRenderCounts = (componentName) => {
  const render = useRef(1);
  console.log(`${componentName} renders count: ${render.current++}`);
};

function Weather({ name, title, date, handler }) {
  useRenderCounts(name);
  return (
    <div>
      <div>{handler}</div>
      <Text text={`Weather: ${title}`} />
      <Text text={`date: ${date}`} />
    </div>
  );
}
export const MemoizedWeather = React.memo(Weather);

const MemoWrapper = React.memo(({ name, title, date }) => (
  <div>
    <Weather name={name} title={title} date={date} handler={() => {}} />
  </div>
));

const Button = (props) => (<button onClick={props.onClick}>{props.children}</button>)

export default (() => {

  const [weather, setWeather] = useState({ title: "Sun", date: "Yesterday" });

  const memo_func = useCallback(()=> {}, []);

  return (
    <div>
      <br/>
      <div> Component with arrow function </div>
      <Weather name={"Weather1"} {...weather} handler={() => {}} />
      <br/>
      <div> Memocomponent with arrow function </div>
      <MemoizedWeather name={"Weather2"} {...weather} handler={() => {}}/>
      <br/>
      <div> Component with useCallback function </div>
      <Weather name={"Weather3"} title={"test"} date={"Today"} handler={memo_func} />
      <br/>
      <div> MemoComponent with useCallback function </div>
      <MemoizedWeather name={"Weather4"} {...weather} handler={memo_func}/>
      <br/>
      <div> MemoParent with arrow function on child </div>
      <MemoWrapper name={"Weather5"} {...weather} />
      <br/>
      <div><Button onClick={() => setWeather({ title: "Sun", date: "Yesterday" })}>Yesterday is a good day</Button></div>
      <div><Button onClick={() => setWeather({ title: "Snow", date: "Tomorrow" })}>Tommorrow has snow!</Button></div>
      <br/>
      <br/>
    </div>
  );

});
