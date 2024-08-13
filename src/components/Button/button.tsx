import { useState } from "react";
import callback from "../../models/callback";
import "./button.css";

const Button = ({ children, id, className, hidden, size, onClick }: { children?: React.ReactNode, id?: string, hidden?: boolean, className?: string, size?: "l" | "m" | "s", onClick?: callback }) => {

    const [hover, setHover] = useState(false);

    return (
        <>
            {!hidden && (
                <button
                    id={id}
                    className={`${hover ? "hover" : ""} ${size || "m"}-size ${className || ""}`}
                    onClick={onClick}
                    onBlur={() => setHover(false)}
                    onMouseMove={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {children}
                </button>
            )}
        </>
    )
}

export default Button;