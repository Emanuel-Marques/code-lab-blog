export interface BlogPost {
    id: number;
    date: string;
    title: string;
    content: string
}

export interface ButtonProps {
    children: React.ReactNode; 
    classe?: string;
}

export type InputProps = {
    label?: string;
    className?: string;
    onChange: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;