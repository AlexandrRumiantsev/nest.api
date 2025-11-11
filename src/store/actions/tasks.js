export const fetchTasks = () => async (dispatch) => {

    const data = await fetch("http://localhost:5000/tasks").then((response) => response.json())

    dispatch(
        {
            type: 'SET_TASKS',
            payload: data
        }
    )

}