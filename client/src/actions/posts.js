import * as api from '../api'

// Create acitons / action creators

export const getPosts = () => async(dispatch)=>{
    try {
        const {data} = await api.fetchPost()
        dispatch({type:'FETCH_ALL',payload:data})
    } catch (error) {
        console.log(error.nessage)
    }
   
}

export const createPost = (post)=>async(dispatch)=>{
    try {
        const {data} = await api.createPost(post)    
        dispatch({type:'CREATE',payload:data})
    } catch (error) {
        console.log(error.message)
    }
}