import React from "react";
import "./button.css";
import callback from "../../models/callback";

const Button = ({ children, className, size, hoverable, onClick }: { children?: React.ReactNode, className?: string, size?: "l" | "m" | "s", hoverable?: boolean, onClick?: callback }) => {
    return (
        <button className={`button ${hoverable ? "hoverable" : ""} ${size || "m"}-size ${className || ""}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;