import { ReactNode } from "react";
import "./buttonGroup.css";

const ButtonGroup = ({ children, className, expanded }: { children?: ReactNode, className?: string, expanded?: boolean }) => {
    return (
        <div className={`button-group ${expanded ? "expanded" : ""} ${className || ""}`}>
            {children}
        </div>
    );
}

export default ButtonGroup;