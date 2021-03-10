// Accepts state and action

// In reducers state always needs to be equal to something
export default (posts=[],action)=>{
    switch (action.type) {
        case 'UPDATE':
            return posts.map((post)=> post._id === action.payload ? action.payload : post)

        case 'FETCH_ALL':
            return action.payload
        
        case 'CREATE':
            return [...posts,action.payload]           
    
        default:
            return posts    
        
    }
}