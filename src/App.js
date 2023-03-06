import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
    return (
        <div className="App">
            <Sidebar />
        </div>
    );
}

export default App;
