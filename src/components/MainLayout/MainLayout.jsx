import {Outlet} from 'react-router-dom'

export function MainLayout(){
    return (
        <div className="container">
            <header></header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    )
}

export default MainLayout