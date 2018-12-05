import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Page from '../Page';
import './index.less';
import navs from './navs'
import {Http} from 'Utils'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
let menuItemKey = 1;
 class Hander extends React.Component {
  state = {
    current: 'item1',
  }
  componentDidMount(){
    Http.get('/api/krspace-op-web/app/operation/community/use-rate',{dataDate: '2018-12-04'}).then((res)=>{
			console.log(res,"kkkkk")
		}).catch(()=>{

		})
  }
  handleClick = (e) => {
   
    this.setState({
      current: e.key,
    });
  }
  iconRender = (url) => {
    let isLink = this.flogLink(url);
    if (!url) {
      return '';
    }

    if (!isLink) {
      return <Icon type={url} />
    }
    return <img src={url} />
  }
  flogLink = (url) => {

    if (url && (url.indexOf('http://') != -1 || url.indexOf('https://') != -1)) {
      return true;
    }
    return false;
  }

  handerRender = (data, noOne) => {
  
    let arr = data.map((item, index) => {
      let itemKey = item.name ||'item' + menuItemKey++;
      const { url, icon, children, title, level } = item;

      const type = this.menuType(item);
      if (type == 'default') {
        return (
          <Menu.Item key={itemKey}>
            <Link to={url} >
              {this.iconRender(icon)}
              <span>{title}</span>
            </Link>
          </Menu.Item>
        )
      }

      if (type == 'link') {
        return (
          <Menu.Item key={itemKey}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {this.iconRender(icon)}
              <span>{title}</span>
            </a>
          </Menu.Item>
        )
      }
      if (type == 'select' && level != 1) {
        return (
          <MenuItemGroup key={index} title={title}>
            {this.handerRender(children, true)}
          </MenuItemGroup>
        )
      }
      if (type == 'select' && level == 1) {

        return (<SubMenu
          key={index}
          title={
            <span className="submenu-title-wrapper">
              {this.iconRender(icon)}
              <span>{title}</span>
            </span>
          }
        >
          {this.handerRender(children, true)}
        </SubMenu>)
      }
      if (type == 'disabled') {
        return (
          <Menu.Item key={itemKey} disabled>
            {this.iconRender(icon)}
            <span>{title}</span>
          </Menu.Item>
        )
      }
      return (<Menu.Item key={itemKey}>
        <Link to={url} >
          {this.iconRender(icon)}
          <span>{title}</span>
        </Link>
      </Menu.Item>)

    })

    return arr

  }
  menuType = (data) => {
    const { url, icon, children, title } = data;
    const isLink = this.flogLink(url);
    if (isLink) {
      return 'link'
    }
    if (url && (!children || !children.length)) {
      return 'default'
    }
    if (children && children.length) {

      return 'select'
    }
    if (!url && !children) {
      return 'disabled'
    }

  }

  render() {
    const { children } = this.props;
    return (
      <div className="g-layout">
        <div className="g-hander">
          <Link to="/"><div className="g-logo"><img src="./images/logo.png"/></div></Link>
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
          <Page >
            {children}
          </Page>
        </div>
      </div>
    );
  }
}
export default Hander;