import React, { useMemo } from "react";

const Value = (props) => <span>{props.value}</span>;

const Cell = (props) => (
  <div>
    <Value { ...props.inner } />
  </div>
);

function List(props) {
  const { data } = props;
  const cells = data;
  return (
    <div>
      {cells.map((cell, idx) => <Cell key={idx} {...cell} />)}
    </div>
  );
}

export default List;
// export default React.memo(List, (lhs, rhs) => {
//   if (lhs.data.length !== rhs.data.length) {
//     return false;
//   } else {
//     return lhs.data.map((val, idx) => val.inner.value === rhs.data[idx].inner.value)
//        .reduce((agg, next) => agg & next, true)
//   }
// });
