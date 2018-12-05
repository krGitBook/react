import React, { Component } from 'react';
import {BackTop,Icon} from 'antd';
import {findDimensions} from 'Utils'
import './index.less';

class Page extends Component {
  state = {
    visibilityHeight:40,
  }
  constructor(props,context){
    super(props)
  }
  componentDidMount(){
    this.setVisibilityHeight();
    window.onresize=this.setVisibilityHeight;
      
  }
  setVisibilityHeight = () => {
    const {winHeight} = findDimensions()
    this.setState({
        visibilityHeight:winHeight
    })
  }
  render() {
    const {children} = this.props;
    const {visibilityHeight} = this.state;
    return (
      <div className="g-page">
        {children}
        <BackTop visibilityHeight={visibilityHeight}>
          <div className="g-back-up"><Icon type="arrow-up" /></div>
        </BackTop>
      </div>
    );
  }
}
export default Page;
