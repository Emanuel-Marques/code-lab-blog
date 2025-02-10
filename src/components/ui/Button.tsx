import { ButtonProps } from "@/lib/types";

export default function Button({ children, classe }: ButtonProps){
    return (
        <button className={`rounded-lg p-5 ${classe}`}>
            { children }
        </button>
    )
}