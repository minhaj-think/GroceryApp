const initialState = {
    screen:'Home',
}



 const setScreen = (state=initialState,action)=>{

    console.log('here==>',action.type)

    switch (action.type) {
        case 'setCurrentScreen':
            return{
            ...state,
            screen:action.val
        };
        break;

        default:
            return{
                ...state
            }
            break;
    }
}

export default setScreen;