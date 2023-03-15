import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    user: null,
    products: [null]
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.user;
        },
        setLogout: (state, action) => {
            state.user = null;
            state.token = null;
        },
        setProducts: (state, action) => {
            state.products = [...state.products, ...action.payload.products]
        }
    }
})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer;