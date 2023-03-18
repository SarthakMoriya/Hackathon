import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    user: null,
    type: null,
    orders: []
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.user;
            state.type = action.payload.type
        },
        setLogout: (state, action) => {
            state.user = null;
            state.token = null;
            state.type = null;
            state.orders = null;
        },
        setOrders: (state, action) => {
            // console.log(action.payload)
            state.orders = [...action.payload.orders.userOrders]
        },
        resetOrders: (state, action) => {
            state.orders = null;
        }
    }
})

export const { setLogin, setLogout, setOrders ,resetOrders} = authSlice.actions
export default authSlice.reducer;