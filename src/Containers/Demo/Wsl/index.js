import React from 'react';
import './index.less';
import {
  CheckBox,
  Toolbar,
  Toolbars
} from 'react-ui';
export default class Wsl extends React.Component{

  constructor(props,context){
   super(props, context);

  }

  onChange=(param)=>{
    console.log('ffff',param);
  }
  

  editClick=()=>{
    console.log('wedit');
  }


  render() {


     return (

       <div>
         {/*<CheckBox
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
         />*/}


           <Toolbars>

               <Toolbar label='编辑' iconClass='edit-wrap' propsClick={this.editClick} />

           </Toolbars>


       </div>
     )
   }
}
