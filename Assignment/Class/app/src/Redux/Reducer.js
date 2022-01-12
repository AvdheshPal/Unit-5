import { ADD_TODO , REMOVE_TODO, ADD_TODO_LOADING , ADD_TODO_SUCCESS,ADD_TODO_ERROR , GET_TODO_SUCCESS, GET_TODO_ERROR,GET_TODO_LOADING} from './ActionType'

export const Reducer = (state = {loading: false,todos: [],error:false}, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos , payload]
            }
        case ADD_TODO_LOADING:
            return {
                ...state,
                loading:true,
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos , payload],
                loading: false,
            }
        case ADD_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
            case GET_TODO_LOADING: 
            return {
                ...state,
                loading: true
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos: payload,
                loading: false
            }
        case GET_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
};