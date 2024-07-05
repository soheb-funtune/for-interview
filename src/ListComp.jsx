import React, { memo } from "react";

const ListComp = ({ list, callBackFun }) => {
  console.log("List component is called !");

  return (
    <div>
      ListComp
      <button onClick={() => callBackFun()}>Call useCallback</button>
      <div>
        {list.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default memo(ListComp);
