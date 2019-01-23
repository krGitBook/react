import React from 'react';
import { Menu, Icon, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';
import navs from './navs'
const TabPane = Tabs.TabPane;
let menuItemKey = 1;
class Hander extends React.Component {
  state = {
    current: navs[0].name,
    tabsData: navs[0].children,
    activeKey: navs[0].children[0].url
  }
  componentDidMount() {
    
  }
  handleClick = (e) => {
 
    this.setState({
      current: e.key,
    });
  }
  // 
  flogLink = (url) => {

    if (url && (url.indexOf('http://') != -1 || url.indexOf('https://') != -1)) {
      return true;
    }
    return false;
  }
  goPage = (data) => {
    if (data && data.children && data.children.length) {
      this.setState({
        tabsData: data.children,
        activeKey: data.children[0].url
      })
    } else {
      this.setState({
        tabsData: [],
        activeKey: data.children[0].url
      })
    }
    location.hash = data.children[0].url;

  }

  handerRender = (data) => {

    let arr = data.map((item, index) => {
      let itemKey = item.name||item.url;
      const { url, title } = item;
    
      const type = this.menuType(item);
      if (type == 'default') {
        return (
          <Menu.Item key={itemKey}>
            <div onClick={() => {
              this.goPage(item)
            }}>
              <span>{title}</span>
            </div>
          </Menu.Item>
        )
      }

      if (type == 'link') {
        return (
          <Menu.Item key={itemKey}>
            <a href={url} target="_blank" rel="noopener noreferrer">

              <span>{title}</span>
            </a>
          </Menu.Item>
        )
      }
      if (type == 'disabled') {
        return (
          <Menu.Item key={itemKey} disabled>

            <span>{title}</span>
          </Menu.Item>
        )
      }
      return (<Menu.Item key={itemKey}>
        <Link to={url} >
          <span>{title}</span>
        </Link>
      </Menu.Item>)

    })

    return arr

  }
  tabsChange = (val) => {
   
    location.hash = val;
    this.setState({
      activeKey: val
    })
  }
  // 
  renderTabs = (data) => {
    const { activeKey } = this.state;
    let tabs = data.map((item, index) => {
      return (<TabPane tab={item.title} key={item.url}>

      </TabPane>)
    })
    console.log(activeKey, "oooooo")
    return <Tabs activeKey={activeKey} onChange={this.tabsChange} type="card">{tabs}</Tabs>
  }
  menuType = (data) => {
    const { url, icon, children, title } = data;
    const isLink = this.flogLink(url);
    if (isLink) {
      return 'link'
    }
    if (!url && !children) {
      return 'disabled'
    }
    return 'default'

  }

  render() {
    const { children } = this.props;
    const { tabsData } = this.state;
    return (
      <div className="g-layout">
        <div className="g-hander">
          <Link to="/"><div className="g-logo"><img src="./images/logo.png" /></div></Link>
          <div className="g-top-hander">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >


              {this.handerRender(navs)}
            </Menu>
          </div>
        </div>
        <div className="g-content">

          {this.renderTabs(tabsData)}
          {children}
        </div>
      </div>
    );
  }
}
export default Hander;