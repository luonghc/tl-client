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
import { httpClient } from '@trello/core';

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
      const resp = await httpClient.get('/board');
      console.log(resp);
    };

    onInit();
  }, []);

  return routes;
}

export default App;
