import React from 'react';
import './index.less';
import Steps from './Steps';
import Step from './Step';

const steps = [{
    title: 'First',
    content: 'First-content',
  }, {
    title: 'Second',
    content: 'Second-content',
  }, {
    title: 'third',
    content: 'third-content',
  }, {
    title: 'Last',
    content: 'Last-content',
  }];
  
export default class ProcessLine extends React.Component {

	constructor(props) {
        super(props)
        this.state = {
          current:0,
        };
	}
    
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }

	render() {

    const { current } = this.state;

		return (
				<div className='ui-wrap-process'>
                    <Steps current={current}>
                      {
                         steps.map((item,index)=>{
                            return <step key={index} title={item.title}></step>
                         })
                      }
                    </Steps>
                    <div className="steps-content">{steps[this.state.current].content}</div>
                    {
                        current < steps.length - 1
                        &&
                        <div  className='ui-btn-process' onClick={() => this.next()}>Next</div>
                    }
                    {
                        current === steps.length - 1
                        &&
                        <div  className='ui-btn-process' onClick={() => alert('ok')}>Done</div>
                    }
                    {
                        current > 0
                        &&
                        <div  className='ui-btn-process' style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                          Previous
                        </div>
                    }
			    </div>
	   );
	}
}
