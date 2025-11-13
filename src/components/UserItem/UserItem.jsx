import { useParams } from "react-router-dom"
import { fetchUser } from '../../store/actions/user'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

function UserItem () {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { 
        family,
        id: idFromStore,
        login,
        name,
        password,
        role,
    } = useSelector((state) => state.user.user)

    useEffect(() => {
        dispatch(fetchUser(id))
    }, [])

    return <>
        <p>id: {idFromStore}</p>
        <p>family: {family}</p>
        <p>login: {login}</p>
        <p>name: {name}</p>
        <p>password: {password}</p>
        <p>role: {role}</p>
    </>
}

export default UserItem