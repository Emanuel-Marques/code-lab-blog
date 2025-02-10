import { InputProps } from "@/lib/types";

export default function Input({label, className, onChange, ...rest}:InputProps){
    
    return (
        <div className="flex flex-col">
            {label && <label className="mb-1 text-dark-60">{label}</label>}
            <input
                className={`px-3 py-2 bg-dark-30 border-2 focus:border-brand-color focus:outline-none rounded-xl transition-colors duration-300 border-dark-30 ${className}`}
                onChange={(e) => onChange?.(e.target.value)}
                {...rest}
            />
        </div>
    )
}