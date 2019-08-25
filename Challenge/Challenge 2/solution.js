
const tasks = {
    tasks: [{
        text: 'Grocery Shopping' ,
        completed: true
    }, {
        text: 'Clean Yard' ,
        completed: false
    }, {
        text: 'Film Course',
        completed: false
    }],

    getTasksToDo : function()
    {
        return this.tasks.filter((task)=> task.completed === false)
    }

}
console.log(tasks.getTasksToDo())