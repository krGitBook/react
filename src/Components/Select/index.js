import { Select } from 'antd';
import React from 'react';
const { Component, PropTypes } = React;
const Option = Select.Option;
export default class Select extends Component {
    // state
    static defaultProps = {

    }
    static propTypes = {

    }
    constructor(props) {
        super(props)
    }
    onChange = (event) => {
        const {onChange} = this.props;
        console.log(event,"fddd")

    }
    onBlur = () => {

    }
    onFocus = () => {

    }
    onSearch = () => {

    }
    render() {
        return (
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onSearch={this.onSearch}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
        )
    }
}


