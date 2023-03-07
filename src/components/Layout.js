import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SigninPage from "../pages/SigninPage";
import ProjectsPage from '../pages/ProjectsPage';

const Layout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SigninPage />}/>
                <Route path="/projects" element={<ProjectsPage />}/>
            </Routes>
        </div>
    );
};

export default Layout;
