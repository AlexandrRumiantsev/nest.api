import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        family: '',
        errorText: [],
    })

    const checkboxRef = useRef()

    async function validate() {
        // Из React
        console.log('Данные из формы (управляемой)')
        console.log(form)
        if (!form.family || !form.name) {
            // выводим сообщение
            console.log('фамилия или имя не введены')
            setForm((prevState) => ({
                ...prevState,
                errorText: [...prevState.errorText, 'фамилия или имя не введены']
            }))
            return false
        } else {
            setForm((prevState) => ({
                ...prevState,
                errorText: []
            }))
        }

        console.log('Данные из формы (не управляемой)')
        console.log(checkboxRef.current.checked)

        if (!checkboxRef.current.checked) {
            setForm((prevState) => ({
                ...prevState,
                errorText: [...prevState.errorText, 'Чек бокс не проставлен']
            }))

            return false
        }

        return true
    }

    function login(event) {

        console.log('Сработал логин')
        event.preventDefault();
        // Из чистого JS
        console.log(event.target.parentNode.querySelector('input[name="name"]').value)

        // Запретить отправку формы, если:
        // 1 - Если не заполнен name или family
        // 2 - Если не протавлена голочка - запомнить

        // Необходимо выводить уведомление пользователю

        // авторизовываемся

        // Отправим запрос на сервер
        validate().then(
            (result) => result && fetch('http://localhost:5000/users')
        ).then(
            response => response && response.json()
        ).then(data => {

            if(!data)
                return

            const result = data.find(user => form.name === user.name && form.family === user.family)
            console.log('result',result)

            if (result) {
                navigate('/')
            } else {
                setForm((prevState) => ({
                    ...prevState,
                    errorText: [...prevState.errorText, 'Пользователь с таким именем и фамилией не найден']
                }))
            }
        })
       


        

    }

    function handleInutChange(event) {
        //console.log(event.target.name)
        // console.log(event.target.value)
         setForm((prevState) => {
            console.log('prevState',prevState)
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
         })


    }

    return (
        <form>
            <input type="text" name="name" value={form.name} onChange={handleInutChange}/>
            <input type="text" name="family" value={form.family} onChange={handleInutChange}/>
            <input type="submit" value="Войти" onClick={login} />
            <input type="checkbox" ref={checkboxRef} name='checkbox'/>Запомнить
            {!!form.errorText.length && (
                <div>
                    {form.errorText.map( error => <p>{error}</p>) }
                </div>
            )}
        </form>
    )
}

export default Login