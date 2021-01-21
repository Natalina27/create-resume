const initialState = {
    users:[],
    infos:[]
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_INFO':
            return {
                ...state,
                infos:action.payload
            }
        case 'ADD_INFO':
            return {
                ...state,
                infos: [
                    ...state.infos,
                    action.payload
                ]
            }
        case 'DELETE_INFO':
            return {
                ...state,
                infos: state.infos.filter(el => el._id !== action.payload)
            }
        case 'ADD_USER':
            return {
                ...state,
                users: state.users.filter(el => el._id !== action.payload)
            }
        case 'SET_LOGIN_STATE':
            return {
                ...state,
                users: state.users.filter(el => el._id !== action.payload)
            }
        default:
            return state;
    }
}
export default appReducer;