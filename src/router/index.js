import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import routeRender from './newRouter';
function renderRoute(){
    return routeRender.map((item,index)=>{
        return <Route path={item.path} component={item.component} />
    })
}
export default  ()=>{
  return (
      <Switch>
        {renderRoute()}
      </Switch>
  );
}


	
