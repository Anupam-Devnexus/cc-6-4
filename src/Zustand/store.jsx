import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useWishListStore = create(
    persist(
        devtools((set, get) => ({
            wishlist: [],

            // Add item
            addWishList: (item) =>
                set((state) => ({
                    wishlist: [...state.wishlist, item],
                })),

            // Remove item
            removeWishList: (item) =>
                set((state) => ({
                    wishlist: state.wishlist.filter((i) => i !== item),
                })),

            // Toggle item: if exists, remove it; else add it
            toggleWishList: (item) => {
                const { wishlist } = get()
                const exists = wishlist.some((i) => i.name === item.name) // or use `id`
                set({
                    wishlist: exists
                        ? wishlist.filter((i) => i.name !== item.name)
                        : [...wishlist, item],
                })
            }



        })),
        {
            name: 'WishList',
        }
    )
)

export default useWishListStore
