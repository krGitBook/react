import React from 'react';
import { Input,Button,Form } from 'antd';
import { connect } from 'react-redux'
import { Store } from 'redux'
import { searchTap } from 'actions'
class Search extends React.Component {
	constructor(props,context){
		super(props, context);
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
      // 传输到全局
     
      dispatch(searchTap(values));
      // if (!err) {
      //   console.log('Received values of form: ', values);
      // }
    });
  }

	
	render() {	
    const {getFieldDecorator,setFieldsValue} = this.props.form;
  
		return (
			<div>
        <Form onSubmit={this.handleSubmit} className="serch-form">
        <Form.Item>
        <span>姓名</span>
          {getFieldDecorator('name')(
           
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
          <Button type="primary" htmlType="submit" >
              搜索
          </Button>
         
        </Form.Item>
      </Form>
					
			</div>
		);
	}
}

let searchStore = Form.create({ name: 'search-from' })(Search);


export default connect(
  (state)=>{
    return {
      searchData:state.search
    }
  }
)(searchStore);