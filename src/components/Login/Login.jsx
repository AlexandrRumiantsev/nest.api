import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register, handleSubmit, reset, formState: { errors }, setError } = useForm()

    async function onSubmit({login, password}) {
         // Отправим запрос на сервер
        const data = await fetch(`http://localhost:5000/users?login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`).then(
            response => response && response.json()
        )

        if (!!data.length) {

           dispatch({
             type: 'AUTH',
             payload: data[0]
           })

           navigate('/')

        } else {
            setError('auth', { message: 'Такого пользователя не существует' });
        }

    }

    function handleReset (event) {
        event.preventDefault();
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p><input type="text" {...register('login', { required: true })} /></p>
            <p>{errors.login && <span style={{ color: 'red' }}>Это поле обязательно!</span>}</p>
            <p><input type="password" {...register('password', { required: true })} /></p>
            <p>{errors.password && <span style={{ color: 'red' }}>Это поле обязательно!</span>}</p>
            <input type="submit" value="Войти" />
            <p><button onClick={(e) => handleReset(e)}>Очистить форму</button></p>
            <p>{errors.auth && <span style={{ color: 'red' }}>{errors.auth.message}</span> }</p>
        </form>
    )
}

export default Login