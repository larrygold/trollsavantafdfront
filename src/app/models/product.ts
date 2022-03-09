export interface Product {
    id: number;
    name: string;
    shortDescription?: string;  /* Question mark to make field optional */
    category: string;
    editor?: string;
}