import React, { Component } from 'react';
import {Button} from 'antd';
import './index.less';

class Hello extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Hello</Button>
      </div>
    );
  }
}

export default Hello;