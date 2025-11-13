import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks } from '../../store/actions/tasks'
import { logout } from '../../store/actions/user'
import { useNavigate, Link } from 'react-router-dom';



function Main() {

    const list = useSelector((state) => state.tasks.list)
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchTasks())
    }, []);

    function removeItem(id) {
        console.log("Удалить");
        //'эта функция должна удалить элемент с id
        const newArray = list.filter((item) => item.id !== id);
        dispatch({ type: 'DELETE_ITEM_TASK', payload: newArray })
    }

    const addItem = () => {
        //тут мы добавили объект
        const newArray = [
            ...list,
            {
                id: Math.random(),
                title: prompt("Введите название задачи"),
                completed: false,
            },
        ];
        dispatch({ type: 'ADD_ITEM_TASK', payload: newArray })
    };
    function editItem(item) {
        const newTask = prompt(`Редактировать задачу с[${ item.id }], item.title`);
        // const newArray = list.map((task) => {
        //   if (task.id === item.id) {
        //     return {
        //       ...task,
        //       title: newTask,
        //     };
        //   } else {
        //     return task;
        //   }
        // });
        //длинная запись

        //короткая запись
        const newArray = list.map((task) =>
            task.id === item.id ? { ...task, title: newTask } : task
        );

        dispatch({ type: 'EDIT_ITEM_TASK', payload: newArray })
    }
    const delitList = () => dispatch({ type: 'DELETE_TASKS' });

    function logoutUser() {
        dispatch(logout())
        navigate('/login')
    }

    const linkUserOption = {
        pathname: `/user/${user.id}`
    }

    return (
        <>
            <Link to={linkUserOption}>{user.family} {user.name}</Link>
            (<button onClick={() => logoutUser()}>Выйти</button>)
            <button onClick={delitList}>Удалить весь список</button>
            <button onClick={addItem}>Добавить задачу</button>
            <hr/>
            {list?.map((item) => {

                const link = `/task/${item.id}`

                const linkOption = {
                    pathname: link,
                    // Добавляем гет параметр
                    search: `id=${item.id}`,
                }

                return (
                    <div key={item.id}>
                        <Link to={linkOption}>{item.title}</Link>
                        {/* {тут мы сделали что бы функция не вызвалась сразу, 
                добавили анонимную функцию} */}
                        <button onClick={() => removeItem(item.id)}>Удалить</button>
                        <button onClick={() => editItem(item)}>Редактировать</button>
                    </div>
                );
            })}
        </>
    );
}
export default Main;