
const express = require('express')
const app = express()
app.use(json)
const cors = require('cors')
const PORT = 3000
const taskAPI = `http://localhost:3000/tasks`

const tasks = [
    {taskId: 1, title: "", priority: ""},
    {taskId: 2, title: "", priority: ""}
]

app.post('/tasks', (req, res) => {
    const title = req.body.title
    const priority = req.body.priority

    const task = {taskId: tasks.length + 1, title: title, priority: priority}
    tasks.push(task)
    res.json({success: true, message: 'The task has been added.'})
})

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id)
    tasks = tasks.filter((task) => {
        return task.taskId != id
    })
    res.json({success: true, message: 'The task has been deleted.'})
})

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.listen(PORT, () => {
    console.log('The server is running...')
})