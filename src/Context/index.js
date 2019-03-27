
import React, { useState,useEffect , useContext} from 'react';
//创建Context组件
const ThemeContext = React.createContext({
  theme: 'dark',
  toggle: () => {}, //向上下文设定一个回调方法
});

//运行APP
class Context extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = () => { //设定toggle方法，会作为context参数传递
      this.setState(state => ({
        theme:
          state.theme === ThemeContext.dark
            ? ThemeContext.light
            : ThemeContext.dark,
      }));
    };

    this.state = {
      theme: ThemeContext.light,
      toggle: this.toggle,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}> 
        <Content />
      </ThemeContext.Provider>
    );
  }
}

//中间组件
function Content() {
  return (
    <div>
      <Button />
    </div>
  );
}

//接收组件
function Button() {
  return (
    <ThemeContext.Consumer>
      {({theme, toggle}) => (
        <button
          onClick={toggle} //调用回调
          style={{backgroundColor: theme}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
export default Context;