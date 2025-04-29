import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: JSON.parse(localStorage.getItem('products')) || [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    wishList: JSON.parse(localStorage.getItem('wishList')) || [],
    userInfo: null,

};

const prodactsslice =createSlice({
    
    name : "products",
    initialState,
    reducers : {
        fetchCategoriesStart: (state, action) => {
            state.products = action.payload
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        addtocart:(state,action) =>
        {
            const product = state.cart.find((product) => product.id === action.payload.id);
            if (!product) {
                state.cart.push({...action.payload,quantity: 1});
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
           

        },
        deletefromcart:(state,action) =>
        {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(state.cart));

        },
        clearCart: (state) => {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
          },
          increment: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            product.quantity+=1;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decrement: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            if (product.quantity === 1) {
                product.quantity = 1;
            } else {
                product.quantity--;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        addtofavourite:(state,action) =>
            {
                const product = state.wishList.find((product) => product.id === action.payload.id);
                if (!product) {
                    state.wishList.push(action.payload);
                }
                localStorage.setItem('wishList', JSON.stringify(state.wishList));
               
    
            },
            deletefromwistlist:(state,action) =>
                {
                    state.wishList = state.wishList.filter((product) => product.id !== action.payload.id);
                    localStorage.setItem('wishList', JSON.stringify(state.wishList));
        
                },
                clearwishlist: (state) => {
                    state.wishList = [];
                    localStorage.setItem('wishList', JSON.stringify(state.wishList));
                  },
                  setUser: (state, action) => {
                    state.userInfo = action.payload;
                },
        

    }
    
})


export const {fetchCategoriesStart,addtocart,deletefromcart,clearCart,increment,decrement,addtofavourite,deletefromwistlist,clearwishlist,setUser} = prodactsslice.actions;
export default prodactsslice.reducer;