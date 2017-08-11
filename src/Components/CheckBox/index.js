import React from 'react';
import './index.less'
export default class CheckBox extends React.Component {

  constructor(props,context){
  super(props, context);
      this.state = {
          writeIn:this.props.value
      }
  }

  checkChange=(event,item)=>{
     if(event.target.checked){
       const {onChange}=this.props;
       onChange && onChange(item);
     }
  }

   render() {

     let {writeIn}=this.state;

     return (

       <div>
         <div className='detail-write'>
           <ul>
            {
              writeIn.map((item,index)=>{
                return (
                     <li key={index}>
                       <input
                       type="checkbox"
                       onChange={(event) => {
                         this.checkChange(event,item)
                       }}
                       />
                       <span>{item.type}:{item.label}</span>
                     </li>
                 )
              })
           }
           </ul>
         </div>
       </div>
     )
   }

}
