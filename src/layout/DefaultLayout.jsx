import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

export default function DefaultFunction() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>

    )

}