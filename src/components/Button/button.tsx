import { useState } from "react";
import callback from "../../models/callback";
import "./button.css";

const Button = ({ children, id, className, size, onClick }: { children?: React.ReactNode, id?: string, className?: string, size?: "l" | "m" | "s", onClick?: callback }) => {

    const [hover, setHover] = useState(false);

    return (
        <button
            id={id}
            className={`button ${hover ? "hover" : ""} ${size || "m"}-size ${className || ""}`}
            onClick={onClick}
            onMouseMove={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </button>
    )
}

export default Button;