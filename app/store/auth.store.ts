import { create } from "zustand";
import { User } from "~/services/auth.server";

type Store = {
    user: User | null;
    setUser: (user: User | null) => void;
};

const useAuthStore = create<Store>()((set) => ({
    user: null,
    setUser: (user: User | null) => set({ user }),
}));

export default useAuthStore;
