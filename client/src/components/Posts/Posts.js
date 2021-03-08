import React from 'react'
import Post from './Post/Post'
import useStyles from '../Posts/style'
import { useSelector } from 'react-redux'

const Posts =() =>{
    const posts = useSelector((state)=>
        state.posts
    )
    const classess = useStyles()
    return(
        <>
            <h1 align="center">------POSTS------</h1>
            <Post/>
            <Post/>
        </>
    )
}

export default Posts