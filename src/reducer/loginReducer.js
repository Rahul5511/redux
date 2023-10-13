
const initialState = {
    loginData:{}
}

export const loginReducer = (state=initialState,action) => {
  switch(action.type){
    case "BOLT_ON":
        return {
            ...state,loginData:action.payload
        }
        default:
            return state
  }
}