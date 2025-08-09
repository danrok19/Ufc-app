import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index : true,
          element: <HomePage />
        }, 
        {
          path: '/search',
          element: <SearchPage />
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
