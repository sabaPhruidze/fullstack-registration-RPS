import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import Game from "./components/Game";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route  index  element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<Game />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;