import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

const Routing = () => {
    return (
        // <RouterProvider router={router}/>
        <BrowserRouter >
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;