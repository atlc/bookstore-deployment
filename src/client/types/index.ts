export interface User {
    id: number;
    email: string;
    password: string;
    created_at: Date;
}

export interface Category {
    id: number;
    name: string;
}

export interface Book {
    id: number;
    category_id: Category["id"];
    category_name: string;
    title: string;
    author: string;
    price: number;
    created_at: Date;
}
