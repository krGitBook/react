import React from 'react';
import PropTypes from 'prop-types';
class TabPane extends React.Component {
  // props类型校验
  static propTypes = {
    tab: PropTypes.node,
    forceRender: PropTypes.bool,
    label:PropTypes.string.isRequired,
  }
  // props设置默认值
  static defaultProps = {
    tab: '',
    forceRender: false,
  }
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {tab} = this.props;
    return (
      <div className="tab-pane">
        {tab}
      </div>
    );
  }
}
export default TabPane;