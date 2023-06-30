export const  redcuer = (state = {cat:'Facebook Ads'},action : {type :string,payload :string}) => {
  switch (action.type) {
   case 'get':
    
    return {cat:'new value'};
  
   default:
    return state;
  }
}