import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import { SearchLoader } from './pages/searchLoader'
import { DetailsLoader } from './pages/detailsLoader'
import { homeQuery } from './api/queries/homeQuery';

function App() {

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
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
