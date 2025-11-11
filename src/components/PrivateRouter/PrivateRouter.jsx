import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const user = useSelector(state => state.user.user)

    if (!user) {
        return <Navigate to='login' />
    } else {
        // Делаем проверку, по доступности роута
        return children
    }
}

export default PrivateRouter