import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import { SearchLoader } from './pages/searchLoader'
import { DetailsLoader } from './pages/detailsLoader'
import { homeQuery } from './api/queries/homeQuery';
import LoginPage from './pages/LoginPage';
import { AuthContext } from './context/auth-context';
import { useAuth } from './hooks/auth-hook';

function App() {

  const { isAuthenticated, token, username, userId, role, login, logout } = useAuth();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index : true,
          element: <HomePage />,
          loader: async function() {
            return await homeQuery('Lightweight');
          }
        }, 
        {
          path: '/search',
          element: <SearchPage />,
          loader: SearchLoader
        },
        {
          path: '/details',
          element: <DetailsPage />,
          loader: DetailsLoader
        },
        {
          path: '/login',
          element: <LoginPage />
        }
      ]
    }
  ]);

  return (
    <AuthContext.Provider value={{isAuthenticated: isAuthenticated, token: token, username: username, userId: userId, role: role, login: login, logout: logout}}>
      <RouterProvider router={router}/>
    </AuthContext.Provider >
  )
}

export default App
