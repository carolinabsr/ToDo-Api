import {Router} from 'express'
import User from '../models/User.model.js'

const usersRouter = Router()

usersRouter.post('/sign-up', async (req, res) => {
    
    const payload = req.body

    try {

        const newUser = await User.create(payload)
        return res.status(201).json(newUser)
        
    
    } catch (error) {
        console.log(error.name)
        return res.status(500).json({message:'Internal Server Error'})
    }

})

export default usersRouter