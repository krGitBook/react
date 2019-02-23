const search = (state = {},action)=>{
  console.log(Object.assign({},state,action.search),"-----11")
  switch(action.type){
    case 'SEARCH': return Object.assign({},state,action.search);
    default: return state;
  }
}
export default search;