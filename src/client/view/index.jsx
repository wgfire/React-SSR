import React from "react";
import { Button } from "antd-mobile";
const Test = () => {
  return (
    <>
      <Button
        onClick={() => {
          alert("xx");
        }}
      >
        index页面
      </Button>
    </>
  );
};

export default Test;
