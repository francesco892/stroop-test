import React from "react";
import "./button.css";
import callback from "../../models/callback";

const Button = ({ children, className, size, onClick }: { children?: React.ReactNode, className?: string, size?: "l" | "m" | "s", onClick?: callback }) => {
    return (
        <button className={`button ${size || "m"}-size ${className || ""}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;