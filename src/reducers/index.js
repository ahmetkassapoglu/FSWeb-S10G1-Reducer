import { ADD_MEMORY, MC,MR, ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return Number(num1) + Number(num2);
        case("*"):
            return Number(num1) * Number(num2);
        case("-"):
            return Number(num1) -Number(num2);
    }
}

 export const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
            case(CLEAR):
            return({
                ...state,
                total: Number(0)
            });
            case(ADD_MEMORY):
            return({
                ...state,
                memory: state.total + state.memory
            });
            case(MR):
            return (
                {
                    ...state,
                    total: state.total+state.memory
                }
            )
            case (MC):
                return({...state, memory: Number(0)})

        default:
            return state;
    }
}

export default reducer;