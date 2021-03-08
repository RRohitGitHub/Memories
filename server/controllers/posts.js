import PostMessage from '../models/postMessage.js'

export const getPosts = async (req,res) => {
    try {
        // Asynchronous function
        const postMessages = await PostMessage.find() 
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message:error.message })
    }
}

export const createPost = async (req,res) =>{
    const post = req.body;
    
    const newPost = new PostMessage(post);
    try {
        await newPost.save() 
        res.sendStatus(201).json(newPost)
    } catch (error) {
        res.sendStatus(409).json({message: error.message})
    }
}