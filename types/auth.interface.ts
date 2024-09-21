

export interface SignUpAuth {
    userName: string;
    email: string;
    password: string;
    comfirmPassword: string
}

export interface SignInAuth {
    email: string;
    password: string;
}

export interface User {
    id: number;
    userName: string;
    email: string;
    passowrd: string;
    created_at: string;
}