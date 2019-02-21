import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'
 
export default class Dialog_tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: [{ title: 'Chicken', children: [ { title: 'Egg' } ] },{ title: 'Chicken1', children: [ { title: 'Egg1' } ] }],
        };
    }
 
    render() {
        return (
            <div style={{ height: 400 }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                />
            </div>
        );
    }
}