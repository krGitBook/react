import React from 'react';
import './index.less';
import {
  CheckBox
} from 'react-ui';
export default class Wsl extends React.Component{

  constructor(props,context){
   super(props, context);

  }

  onChange=(param)=>{
    console.log('ffff',param);
  }

  render() {


     return (

       <div>
         <CheckBox
              value={[{
                type:'float',
                label:'left'
                },
                {
                  type:'float',
                  label:'right'
                },
              ]}
             onChange={this.onChange}
         />
       </div>
     )
   }
}
