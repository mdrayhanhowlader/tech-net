import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Home from "../page/Home";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default routes;