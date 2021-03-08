// Accepts state and action

// In reducers state always needs to be equal to something
export default (posts=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        
        case 'CREATE':
            console.log(action.payload)
            return [...posts,action.payload]           
    
        default:
            return posts    

    }
}