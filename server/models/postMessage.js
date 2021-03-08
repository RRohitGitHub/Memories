import mongoose from 'mongoose'

// Creating mongoose schema
// Schema is used to create documents in MongoDB
const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,  //Convert image into string using base64
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

// Turn schema into model
const PostMessage = mongoose.model('PostMessage',postSchema)

export default PostMessage