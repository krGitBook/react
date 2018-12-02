import React, { Component } from 'react';
import {Button} from 'antd';
import './index.less';

class World extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">World</Button>
      </div>
    );
  }
}

export default World;