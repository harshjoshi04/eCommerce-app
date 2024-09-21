import { ResponseEntity } from '@/types/action.interface';
import { SignInAuth, SignUpAuth } from '@/types/auth.interface';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.EXPO_PUBLIC_DB_URL!, process.env.EXPO_PUBLIC_DB_TOKEN!);


export const SignUpUser = async (data: SignUpAuth): Promise<ResponseEntity> => {
    const { status, data: response } = await supabase.from("user").insert({ userName: data.userName, email: data.email, password: data.password }).select();
    if (status === 201) {
        return { status: true, data: response?.[0] }
    }
    return { status: false, data: null }
}


export const GetUserById = async (id: string): Promise<ResponseEntity> => {
    const { status, data: response } = await supabase.from("user").select().eq("id", Number(id))
    if (status === 200) {
        return { status: true, data: response?.[0] }
    }
    return { status: false, data: null }
}

export const SignInUser = async (data: SignInAuth): Promise<ResponseEntity> => {
    const { status, data: response } = await supabase.from("user").select().eq("email", data.email).eq('password', data.password);
    if (status === 200) {
        return { status: true, data: response?.[0] }
    }
    return { status: false, data: null }
}