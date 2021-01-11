import { createStore } from "redux";

const incremenCount=({incrementBy=1}={})=>({
    type:"INCREMENT",
    incrementBy
});
const decremenCount=({decrementBy=1}={})=>({
    type:"DECREMENT",
    decrementBy
});
const resetCount=()=>({
    type:"RESET"
});
const setCount=({count})=>({
    type:"SET",
    count
});
//reduser
const countReduser=(state = { count: 0 }, action) => {
  switch (action.type) {
      case "INCREMENT":
        // const incrementBy=typeof action.incrementBy ==='number'?action.incrementBy:1;  
        return  { count: state.count + action.incrementBy };
         
      case "DECREMENT":
          // const decrementBy=typeof action.decrementBy ==='number'?action.decrementBy:1; 
        return  { count: state.count - action.decrementBy };
      case "RESET":
        return  { count: 0 };
      case "SET":
        return  { count: action.count };
         
      default:
          return state;
  }
};

const store = createStore(countReduser);
let br=0;
store.subscribe(()=>{
   br=br+1;
    console.log(store.getState(),'poziv=',br);
})


store.dispatch(incremenCount());
store.dispatch(incremenCount({incrementBy:55}));
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy:7
// });
// store.dispatch({
//   type: "INCREMENT",
// });

store.dispatch(resetCount());
store.dispatch(decremenCount());
store.dispatch(decremenCount({decrementBy:7}));
store.dispatch(setCount({count:100}));

