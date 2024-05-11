import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
const user = {
    name : "hello"
}

const Routing = () => {
    return (
        // <RouterProvider router={router}/>
        <BrowserRouter >
            <Routes>
                <Route  path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;