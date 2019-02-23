import React from 'react';
import PropTypes from 'prop-types';
import './index.less'
class Tabs extends React.Component {

  static propTypes = {
    defaultActiveKey: PropTypes.string,
    onTabClick:PropTypes.func,
    children: PropTypes.node
  }

  static defaultProps = {

  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: props.defaultActiveKey,
      activeStyle: {}
    };
    this.activeElem = null
  }

  componentDidMount() {
    this.initActiveStyle();
  }
  // 高亮样式初始化
  initActiveStyle = () => {
    const { clientWidth, offsetLeft } = this.activeElem;
    this.setState({
      activeStyle: {
        width: clientWidth + 'px',
        left: offsetLeft + 'px'
      }
    })


  }
  // 主体渲染
  contentRender = (tabPanes) => {
    const { active } = this.state;
    return tabPanes.map(item => {
      const { label, children } = item.props;

      if (label == active) {
        return children;
      }
    })
  }
  // tab被点击
  onTitleClick = (event, label) => {
    const {onTabClick} = this.props;
    // event.target 和 event.currentTarget
    const { clientWidth, offsetLeft } = event.currentTarget;

    onTabClick && onTabClick(label);
    this.setState({
      active: label,
      activeStyle: {
        width: clientWidth + 'px',
        left: offsetLeft + 'px'
      }
    })
  }
  // 切换标签渲染
  titleRender = (tabChildren) => {
    const { active } = this.state;

    return tabChildren.map((item, index) => {
      const { label } = item.props;
      let className = 'tabs-pane-label'
      if (label == active) {
        className += ' tabs-pane-label-active'
      }

      return <div ref={(ref) => {
                    if (label == active) {
                      this.activeElem = ref;
                    }
                  }} 
                  className={className} 
                  onClick={(event) => {
                    this.onTitleClick(event, label)
                  }} 
                  key={index}
              >{item}</div>
    })
  }
  render() {
    const { children } = this.props;
    const {activeStyle} = this.state;


    return (
      <div className="tabs">
        <div className="tabs-hander">
          {this.titleRender(children)}
          <div className="active-bar" style={activeStyle}></div>
        </div>
        <div className="tabs-content">
          {this.contentRender(children)}
        </div>
      </div>
    );
  }
}
export default Tabs;