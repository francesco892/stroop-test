import { ReactNode } from "react";
import "./buttonGroup.css";

const ButtonGroup = ({ children }: { children: ReactNode }) => {
    return (
        <div className="button-group">
            {children}
        </div>
    );
}

export default ButtonGroup;