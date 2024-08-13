export interface User extends NewUser {
    id: number;
    created_at: Date;
}

export interface NewUser {
    email: string;
    password: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface NewBook {
    category_id: Category["id"];
    title: string;
    author: string;
    price: number;
}

export interface Book extends NewBook {
    id: number;
    created_at: Date;
}

export interface Payload {
    id: User["id"];
    email: User["email"];
}

declare global {
    namespace Express {
        export interface Request {
            user: Payload;
        }
    }
}
