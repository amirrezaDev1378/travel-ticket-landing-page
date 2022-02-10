import React from 'react';
import useStyles from "./layout.style";
import Home from "../home-page/home";

function Layout(props) {
    const classes = useStyles();

    return (
        <div className={classes.LayoutContainer}>
            <Home />
        </div>
    );
}

export default Layout;