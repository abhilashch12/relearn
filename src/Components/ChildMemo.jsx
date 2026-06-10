import {memo} from "react";
const ChildMemo=memo(function ChildMemo({greet}){
  console.log("child rendered");
  return(
    <button onClick={greet}>
      Greet
    </button>
  )
})
export default ChildMemo;