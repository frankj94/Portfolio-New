import React from "react";
import { ReactComponent as Logo } from './assets/logo/logo.svg';

function logo() {
    return (
        <div class="logo">
        <Logo />
            <div class="logo-text"><p>Welcome</p></div>
        </div>
    )
}

export default logo