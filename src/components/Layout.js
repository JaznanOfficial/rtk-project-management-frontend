import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SigninPage from "../pages/SigninPage";
import ProjectsPage from '../pages/ProjectsPage';
import ProjectsBoardPage from "../pages/ProjectsBoardPage";

const Layout = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SigninPage />} />
                
                <Route path="/projects" element={<ProjectsPage />}/>
                <Route path="/projects/:id" element={<ProjectsBoardPage />}/>
                
            </Routes>
        </div>
    );
};

export default Layout;
