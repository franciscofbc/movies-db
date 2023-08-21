import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './Home';
import SingleMovie from './SingleMovie';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/movies/:id',
        element: <SingleMovie />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
