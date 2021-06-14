import React from "react";
import { Button } from "antd-mobile";
const Page = () => {
  return (
    <>
      <Button
        onClick={() => {
          alert("xx");
        }}
      >
        page页面
      </Button>
    </>
  );
};

export default Page;
