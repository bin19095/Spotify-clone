export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove After finishing Developing...
    token: 'BQC6BRCT_WdUwzRKtC5mVsEQ4gFbqp36OOVq2zq5SvnTNmPr5_YuaujJjRW7-KcAgxVwIdsc-0h5U2EHdeuUBaCr-dR1vDUz2FyPKNw4uwiZruIoJFKJfzGW4RjiTi2F9yYdo5O2xrZdpQlBdyJIPOCUpDgiK-M',
}

 const reducer =(state, action) =>{
console.log(action);

switch(action.type){
    case 'SET_USER':
        return {
            ...state, 
            user: action.user
        }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }
        default:
    return state;
}

    
}

export default reducer;