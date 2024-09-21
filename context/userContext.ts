import { User } from "@/types/auth.interface";
import { create } from "zustand";

interface userContextProp {
    user: User | null;
    setUser: (item: User) => void;
}

export const userContext = create<userContextProp>((set) => ({
    user: null,
    setUser: (item) => set((state) => ({ user: item })),
}))
