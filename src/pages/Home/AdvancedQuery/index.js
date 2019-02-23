import React from 'react';
import { Input, Button, Form } from 'antd';
import { connect } from 'react-redux'
import { Store } from 'redux'
import { searchTap } from 'actions'
class AdvancedQuery extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    
    this.state = {
      search: {}
    };
  }

  componentDidMount() {

  }
  componentWillReceiveProps(nextProps){
    const {setFieldsValue} = this.props.form;
    if(JSON.stringify(this.props.searchData)!= JSON.stringify(nextProps.searchData)){
      setFieldsValue({name:nextProps.searchData.name})
    }
  }
  handleSubmit = (e) => {
    let {dispatch} = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      dispatch(searchTap(values));
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const {searchData} = this.props;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="serch-form">
          <Form.Item>
            <span>姓名</span>
            {getFieldDecorator('name',{initialValue:searchData.name})(

              <Input placeholder="请输入姓名" />
            )}
          </Form.Item>
          <Form.Item>
            <span>年龄</span>
            {getFieldDecorator('age')(
              <Input placeholder="请输入年龄" />
            )}
          </Form.Item>
          <Form.Item>
            <span>经历</span>
            {getFieldDecorator('experience')(
              <Input placeholder="请输入经历" />
            )}
          </Form.Item>
          <Form.Item>
            <span>学历</span>
            {getFieldDecorator('school')(
              <Input placeholder="请输入学历" />
            )}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" >
              搜索
          </Button>

          </Form.Item>
        </Form>

      </div>
    );
  }
}

let advancedQueryStore = Form.create({ name: 'advanced-query-from' })(AdvancedQuery);

export default connect((state)=>{
  return {
    searchData:state.search
  }
  })(advancedQueryStore);