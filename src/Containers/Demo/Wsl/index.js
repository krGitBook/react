import React from 'react';
import './index.less';
import {
  CheckBox,
  Toolbar,
  Toolbars,
  GoText
} from 'react-ui';
var breakList=[
  {
    id:'1',
    label:'d',
    children:[
      {
        id:'11',
        label:'d1',
        children:[
          {
            id:'111',
            label:'d11'
          }
        ]
      },
      {
        id:'12',
        label:'d2',
      }
    ]
  },
  {
    id:'2',
    label:'f',
    children:[
      {
        id:'21',
        label:'f1',
        children:[
          {  id:'211',
            label:'f11',
          }
        ]
      }
    ]
  }
]
export default class Wsl extends React.Component{

  constructor(props,context){
   super(props, context);
     this.state={
       other:''
     }
     this.saveData=[];
     this.nextData=[];
  }
  /*onChange=(param)=>{
    console.log('ffff',param);
  }
  editClick=()=>{
    console.log('wedit');
  }*/


 tipClick=(event,item)=>{
   this.saveData=[];
   this.saveData.push(item)
   if(item.children&&item.children.length!=0){
     this.nextData=item.children;
   }
   this.setState({
     other:+new Date()
   })
 }


 tipSecondClick=(event,item)=>{
   this.saveData.push(item)
   if(item.children&&item.children.length!=0){
      this.nextData=item.children;
   }
   this.setState({
     other:+new Date()
   })
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
         />

           <Toolbars>

               <Toolbar label='编辑' iconClass='edit-wrap' propsClick={this.editClick} />

           </Toolbars>

           <GoText>
              <span>ruwrhtgrshgjrhgjdfhgjdfhgdghdjfhgjdfhgjdfhjdfhgjdfhjgdfjgdfjdffdjsfhjsfh</span>
           </GoText>*/}


           <div className='break-list'>
             {
               breakList.map((item,index)=>{
                  return <div key={index} onClick={
                    (event)=>{
                      this.tipClick(event,item)
                    }
                  }>{item.label}</div>
               })
             }
           </div>

           <div style={{display:'inline-block'}}>
             <div>
                {
                  this.saveData.map((item,index)=>{
                     return <p
                      key={index}
                      style={{margin:'0'}}>{item.label}</p>
                  })
                }
             </div>
             <div className='break-render-list'>
               {
                 this.nextData.map((item,index)=>{
                    return <div key={index} onClick={
                      (event)=>{
                        this.tipSecondClick(event,item)
                      }
                    }>{item.label}</div>
                 })
               }
             </div>
          </div>



       </div>
     )
   }
}
