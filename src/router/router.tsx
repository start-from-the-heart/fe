import React from "react";
import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import PokemonApp from "../pages/pokemon/PokemonApp";
import WeatherApp from "../pages/weather/WeatherApp";

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
    {
      path: "/weather",
      element: <WeatherApp />,
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return routes;
};

export default RouterConfig;
