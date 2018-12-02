import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import './index.less'
import navs from './navs'
let menuItemKey = 1;
export default class Hander extends React.Component {
  state = {
    current: 'item1',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  iconRender = (url)=>{
    let isLink = this.flogLink(url);
    if(!url){
      return '';
    }

    if(!isLink){
      return <Icon type={url} />
    }
    return <img src={url} />
  }
  flogLink=(url)=>{
  
    if(url && (url.indexOf('http://')!=-1||url.indexOf('https://')!=-1)){
        return true;
    }
    return false;
  }

  handerRender =(data,noOne)=>{
    console.log(data,"kkkk")
    let arr = data.map((item,index)=>{
      let itemKey = 'item'+menuItemKey++;
      const {url,icon,children,title,level} = item;
      
      const type = this.menuType(item);
        if(type == 'default'){
          return (
            <Menu.Item key={itemKey}>
              <Link to={url} >
                {this.iconRender(icon)}
                <span>{title}</span>
              </Link>
            </Menu.Item>
          )
        }
        
        if(type == 'link'){
          return (
            <Menu.Item key={itemKey}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {this.iconRender(icon)}
                <span>{title}</span>
              </a>
            </Menu.Item>
          )
        }
        if(type == 'select' && level!=1){
          return (
             <MenuItemGroup  key = {index} title={title}> 
             {this.handerRender(children,true)}
             </MenuItemGroup> 
          )
        }
        if(type == 'select' && level==1){
         
          return (<SubMenu 
            key = {index}
            title={
              <span className="submenu-title-wrapper">
                {this.iconRender(icon)}
                <span>{title}</span>
              </span>
            }
          > 
            {this.handerRender(children,true)}
          </SubMenu>)
        }
        if(type == 'disabled' ){
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
  menuType = (data)=>{
    const {url,icon,children,title} = data;
    console.log("hhhhhh",children)
    const isLink = this.flogLink(url);
    if(isLink){
      return 'link'
    }
    if(url && (!children||!children.length)){
      return 'default'
    }
    if(children && children.length){
     
      return 'select'
    }
    if(!url && !children ){
      return 'disabled'
    }
    
  }

  render() {
    const { children } = this.props;
    return (
      <div>
         <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
        {this.handerRender(navs)}
        </Menu>

        <div className="ui-react-left">

          {children}

        </div>
      </div>


    );
  }
}
