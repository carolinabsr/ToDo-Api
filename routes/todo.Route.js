import {Router} from 'express'
import Task from '../models/Todo.model.js'
import isAuthenticatedMiddleware from '../middlewares/isAuthenticatedMiddleware.js'

const todosRouter = Router()

todosRouter.get('/todos', async (req, res) => {
    const todos = await Todo.find()
    console.log(todos)
    res.send(todos)
})

todosRouter.post('/todos', isAuthenticatedMiddleware, async (req, res) => {
    console.log('de dentro ds rota', req.user)
    try{
        const newTask = await Task.create(req.body)
        return res.status(201).json(newTask)
    } catch (error) {
        console.log('Erro ao criar task', error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
    
})

todosRouter.get('/todos', async (req, res) => {
    try {
        const tasks = await Task.find({})
        return res.status(200).json(tasks)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

todosRouter.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)

        if(!task) {
            return res.status(404).json({message: 'Task not found'})
        }

        return res.status(200).json(task)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

todosRouter.put('/todos/:id', async (req, res) => {
    try {
        const payload = req.body
        const { id } = req.params

        const updatedTask = await Task.findOneAndUpdate({_id: id}, payload, { new: true })

        if(!updatedTask) {
            return res.status(404).json({message: 'Task not found'})
        }

        return res.status(200).json(updatedTask)

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

todosRouter.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Task.findOneAndDelete({_id: id})
        res.status(204).json()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

export default todosRouter

