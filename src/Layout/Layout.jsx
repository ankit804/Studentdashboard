import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import "./Layout.css"
import Header from "../Components/Header";

function Layout() {
    return (
        <div className="layout">
            <Sidebar />
            <main className="main-content">
                <Header />
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;