import {
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from 'react-router-dom';
import { useEffect } from 'react';
import { HomeFeature } from '@trello/home/feature';
import { AppInit } from '@trello/common/app-init';

export function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomeFeature />,
    },
  ]);

  useEffect(() => {
    const onInit = async () => {
      await AppInit.initApp();
    };

    onInit();
  }, []);

  return routes;
}

export default App;
