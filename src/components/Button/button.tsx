import { useEffect, useState } from "react";
import callback from "../../models/callback";
import "./button.css";

const Button = ({ children, id, className, active, hidden, size, onClick }: { children?: React.ReactNode, id?: string, hidden?: boolean, className?: string, active?: boolean, size?: "l" | "m" | "s", onClick?: callback }) => {

    const [hover, setHover] = useState(false);

    useEffect(() => {
        if (hidden) {
            setHover(false);
        }
    }, [hidden]);

    return (
        <>
            {!hidden && (
                <button
                    id={id}
                    className={`${hover || active ? "hover" : ""} ${size || "m"}-size ${className || ""}`}
                    onClick={onClick}
                    onBlur={() => setHover(false)}
                    onMouseMove={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    children={children}
                />
            )}
        </>
    )
}

export default Button;