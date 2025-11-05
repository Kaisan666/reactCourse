

export const counterReducerFunc = (state, action) => {
  console.log(state);
  
    if (action.type === "increment"){
        return state + 1
    }
    else if (action.type === "decrement"){
      return state - 1
    }
    else if (action.type === "powTwo"){
      return state ** 2 
    } 
}