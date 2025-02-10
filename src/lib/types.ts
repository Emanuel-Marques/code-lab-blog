export interface BlogPost {
    id: number;
    date: string;
    title: string;
    content: string
}

export type ButtonProps = {
    children: React.ReactNode; 
    classe?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps = {
    label?: string;
    className?: string;
    onChange: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;