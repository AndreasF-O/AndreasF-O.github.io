import * as React from "react";
import Header from "../Header";

const Layout = ({ user, children }) => {
    return (
        <div>
            <Header></Header>
        </div>
    );
};

export default Layout