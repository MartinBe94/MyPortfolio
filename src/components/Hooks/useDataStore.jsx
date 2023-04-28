import { create } from "zustand";

export const useDataStore = create((set) => ({
    name: "John Doe",
    setName: (newName) => set(() => ({ name: newName })),
    removeName: () => set({ name: "" }),

    email:"example@gmail.com",
    setEmail: (newEmail) => set(() => ({ email: newEmail })),
    removeEmail: () => set({ name: "" }),

    message:"eafeafafafae",
    setMessage: (newEmail) => set(() => ({ message: newMessage })),
    removeMessage: () => set({ name: "" }),
  }))