import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchTask } from '../../store/actions/tasks'

export function TaskItem(){
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const idParam = params.get('id');
    const dispatch = useDispatch();
    const item = useSelector((state) => state.tasks.item)

    useEffect(() => {
        dispatch(fetchTask(idParam))
    }, [])

    return (
        <div className="container">
            TaskItem 
            <p>ID: {item.id}</p>
            <p>TITLE: {item.title}</p>
        </div>
    )
}

export default TaskItem