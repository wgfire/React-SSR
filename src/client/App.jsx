import React, { useEffect, useState } from "react";
import Index from './view/index.jsx'
import { Switch, Route } from "react-router-dom";
import  router from  '../router/index'
const App = () => {
  

  return (
    <>
    <Index />
      {/* <Switch>
       {
         router.map(el=>{
           return  <Route exact path={el.path} component={el.component} />
         })
       }
      </Switch> */}
    </>
  );
};

export default App;
