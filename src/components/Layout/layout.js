import * as React from "react";
import Header from "../Header";

const Layout = ({ user, children }) => {
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
        </div>
    );
};

export default Layout