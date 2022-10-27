import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Catergory from "../Pages/Category/Catergory";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import TermsAndCondition from "../Others/TermsAndCondition";
import Courses from "../Pages/News/Courses";
import Error from "../Error/Error";
import Checkout from "../Cart/Checkout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: ()=>fetch('http://localhost:5000/courses'),
                element: <Home />
            },
            {
                path: 'catergory/:id',
                loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`),
                element: <Catergory />
            },
            {
                path: 'courses/:id',
                loader: ({params})=>fetch(`http://localhost:5000/courses/${params.id}`),
                element: <PrivateRoutes><Courses /></PrivateRoutes>
            },
            {
                path: 'login',
                element: <Login />                
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/terms',
                element: <TermsAndCondition />
            },
            {
                path: 'checkout',
                element: <Checkout />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
]);