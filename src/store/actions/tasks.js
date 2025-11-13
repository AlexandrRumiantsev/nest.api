export const fetchTasks = () => async (dispatch) => {

    const data = await fetch("http://localhost:5000/tasks").then((response) => response.json())

    dispatch(
        {
            type: 'SET_TASKS',
            payload: data
        }
    )

}

export const fetchTask = (id) => async (dispatch) => {
    const data = await fetch(`http://localhost:5000/tasks?id=${id}`).then((response) => response.json())
    
    dispatch(
        {
            type: 'SET_TASK',
            payload: data
        }
    )
}