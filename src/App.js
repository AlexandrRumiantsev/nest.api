import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import TaskItem from './components/TaskItem/TaskItem'
import UserItem from './components/UserItem/UserItem'
import MainLayout from './components/MainLayout/MainLayout';
import PrivateRouter from './components/PrivateRouter/PrivateRouter'
import { PersistGate } from 'redux-persist/integration/react';

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store';
import { persistor } from './store'

const Router = createBrowserRouter([
   {
       element: <MainLayout />,
       children: [
            {
               path: '/',
               element:
               (
                  <PrivateRouter>
                     <Main />
                  </PrivateRouter>
               ),
            },
            {
               path: '/task/:id',
               element:
               (
                  <PrivateRouter>
                     <TaskItem />
                  </PrivateRouter>
               ),
            },
             {
               path: '/user/:id',
               element:
               (
                  <PrivateRouter>
                     <UserItem />
                  </PrivateRouter>
               ),
            },
            {
               path: '/login',
               element: <Login />,
            }
       ]
   }
])

function App() {
  return (
   <Provider store={store} >
      <PersistGate loading={<div>Загрузка...</div>} persistor={persistor}>
         <div className="App">
            <RouterProvider router={Router}/>
         </div>
      </PersistGate>
   </Provider>
  );
}

export default App;
