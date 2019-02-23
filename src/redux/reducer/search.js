const search = (state = {},action)=>{
  switch(action.type){
    case 'SEARCH': return Object.assign({},state,action.search);
    default: return state;
  }
}
export default search;