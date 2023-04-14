import React from 'react'

 const Test = () => {
        const handelClick = () => {
          console.log("sss");
        };
  return <div onClick={()=>{
    handelClick()
  }}>Test</div>;
}
export default Test