import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import {
  Welcome,
  Initialize,
  Undefined,
  Lyh,
  Dfa,
  Slider,
  Wsl,
  Communication,
  LazyImgDemo,
  CircleDemo
} from 'react-pages';
import {
	Paper,
  List,
  Logo,
  Hander
} from "react-ui"
import './index.less'
import {Router} from 'react-config';
var navs = [
  {textValue:'首页',router:'/',component:Welcome},
  {textValue:'关于',router:'/news',component:Initialize},
  {textValue:'',router:'/demo/lyh',component:Lyh},
  {textValue:'',router:'/demo/dfa',component:Dfa},
  {textValue:'通信',router:'/summedUp/communication',component:Dfa},
  {textValue:'高斯模糊效果',router:'/lazyImgDemo',component:LazyImgDemo},
  {textValue:'时间轴',router:'/circleDemo',component:CircleDemo},
]
export default class DevRouter extends React.Component{
    constructor(props,context){
    super(props, context);
          this.state = {
              activeIndex:0,
          }
    }
    click = (index) =>{
      var activeIndex = index;
      this.setState({
        activeIndex
      })
    }

    renderLink = () =>{
      let {activeIndex} = this.state;
      var list = navs.map((item,index)=>{

          if(item.textValue){
            return (
                     <List className = "router-list" key = {index}>
                          <Link to={item.router}
                            onClick = {() =>{
                              this.click(index);
                            }}
                            style = {{backgroundColor:activeIndex == index ? "#e0e0e0" : "rgba(255, 255, 255, 1)"}}
                          >
                            {item.textValue}
                          </Link>
                     </List>
                   )
          }


      })
        return list;
    }
	  render() {

	    return (
        <div className = "ui-react-box">


            <Paper className = "ui-react-left">
              <Logo></Logo>
              {this.renderLink()}
            </Paper>

          <div className = "ui-react-content">
            <Hander title = "首页"/>
            <div className = "ui-react-right-content">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/news" component={Initialize} />
                <Route path="/demo/lyh" component={Lyh} />
                <Route path="/demo/dfa" component={Dfa} />
                <Route path="/demo/wsl" component={Wsl} />
                <Route path="/summedUp/communication" component={Communication} />
                <Route path="/lazyImgDemo" component={LazyImgDemo} />
                <Route path="/circleDemo" component={CircleDemo} />

                <Route component={Undefined} />
              </Switch>
            </div>
          </div>
        </div>
	    );
	  }
}
