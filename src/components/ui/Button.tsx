import { ButtonProps } from "@/lib/types";

export default function Button({ children, classe, ...rest }: ButtonProps){
    return (
        <button className={`rounded-xl p-3 ${classe}`} {...rest}>
            { children }
        </button>
    )
}