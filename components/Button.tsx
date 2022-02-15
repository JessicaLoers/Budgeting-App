import { ReactChild } from "react";

interface ButtonProps {
    children: ReactChild,
    primary?: boolean
}

function Button({ children, primary }: ButtonProps) {
    function isPrimary() {
        return (primary?  "bg-violet-500" : "bg-violet-300")
    }
    return (
        <button type="button" className={`${isPrimary()} px-4 py-2 m-2 rounded-full`}>{children}</button>
    )
}

export default Button;