export interface SelectOption{
    label: string;
    value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    id: string;
    name: string;
    label?: string;
    labelStyle?: string;
    options: SelectOption[];
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
}