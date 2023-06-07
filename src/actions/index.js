export const ADD_ONE = "ADD_ONE";
export const ADD_MEMORY= "ADD_MEMORY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = "CLEAR"
export const MR ="MR"
export const MC = "MC"
export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const changeOperations = (symbol) =>{
    return ({type:CHANGE_OPERATION, payload: symbol,})
}
export const beClear = () => {
    return({type:CLEAR})
}
export const addToMemory = (state) => {
    return({type:ADD_MEMORY, payload:state})
}
export const addToTotal = (state) => {
    return({type:MR, paylod:state})
}
export const clearMemory = () =>{
    return({type:MC})
}