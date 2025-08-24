import React from "react";
import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import PokemonApp from "../pages/pokemon/PokemonApp";

const RouterConfig: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/pokemon",
      element: <PokemonApp />,
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return routes;
};

export default RouterConfig;
