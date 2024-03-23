import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Orders from "./pages/orders";

const AllRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/orders" element= {<Orders />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes