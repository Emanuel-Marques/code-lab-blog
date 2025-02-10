import { ButtonProps } from "@/lib/types";

export default function Button({ children, classe, ...rest }: ButtonProps){
    return (
        <button className={`rounded-lg p-5 ${classe}`} {...rest}>
            { children }
        </button>
    )
}