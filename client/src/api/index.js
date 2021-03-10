import axios from 'axios' //Make API call

const url = 'http://localhost:5000/posts'


export const fetchPost = () => axios.get(url)

export const createPost = (newPost) => axios.post(url,newPost) 

export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
