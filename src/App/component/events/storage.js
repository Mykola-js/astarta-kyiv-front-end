// creating a new story
// add story

const storage = Redux.createStore(
    function(state = [], action){
        
        switch (action.type) {
            case ('@@redux/INIT'):
               
                break;
            case ('add_event'):
                state = [action.one_name]
                state = [...state, action.two_name]
                break
    
            default:
            console.log(action.type + 'not registered')
                break;
        }
        
    return state
    }
)
module.exports = storage