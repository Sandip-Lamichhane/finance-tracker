import { Routes, Route } from "react-router-dom";
import Layout from "../layout/website/Layout";
import HomePage from "../pages/HomePage";
import Features from "../pages/Features";
import Login from "../pages/Login";

export default function AppRoutes() {
    return (
        <Routes>
            {/* website */}
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="features" element={<Features />} />
            </Route>

            {/* Auth */}
            <Route path="/login" element={<Login />} />

        </Routes>
    );
}