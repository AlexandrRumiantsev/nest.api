import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

import MainLayout from './components/MainLayout/MainLayout';

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store';

const Router = createBrowserRouter([
   {
       element: <MainLayout />,
       children: [
            {
               path: '/',
               element: <Main />,
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
      <div className="App">
         <RouterProvider router={Router}/>
      </div>
   </Provider>
  );
}

export default App;
