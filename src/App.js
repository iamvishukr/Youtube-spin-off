import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import WatchPage from './components/WatchPage';

function App() {
  const appRouter = createBrowserRouter(
    [{
      path: '/',
      element: <Body />,
      children : [
        {
          path: '/',
          element: <Main />,
        },
        {
          path: '/watch',
          element: <WatchPage />
        }
      ]
    }]
  );
  return (
    <Provider store={store}>
    <div >
      <Head />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
