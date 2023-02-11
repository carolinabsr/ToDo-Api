import mongoose from 'mongoose'

// const MONGODB_URI = 'mongodb://127.0.0.1:27017/to-do-list-dev'
const MONGODB_URI = 'mongodb://localhost/to-do-list-dev'
 
const connectDB = async () => {
    const connection = await mongoose.connect(MONGODB_URI)
    console.log('Conectado ao mongo! Database name: ', connection.connections[0].name)
}

export default connectDB