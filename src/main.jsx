import Cart from "./component/cart/cart";
import Home from "./component/Home/home";
import HRoot from "./component/HRoot";
import {createBrowserRouter, reactDom, RouterProvider} from 'react-router-dom';
export default function Main(){
    const router=createBrowserRouter([
        {
            path:'/',element:<HRoot/>,
            children:[
                {index:true , element:<Home/>},
                {path:'cart',element:<Cart/> }
            ]
        }
    ])
    return(
       <RouterProvider router={router} />
    );
}