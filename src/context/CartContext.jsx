import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const itemExists = state.some(item => item.id === action.payload.id);
            return itemExists
                ? state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, price: item.price + action.payload.price, qty: item.qty + 1 }
                        : item
                  )
                : [...state, { ...action.payload, qty: 1 }];
        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.payload.id);
        case "RESET_CART":
            return []
        default:
            throw new Error(`Unknown action ${action.type}`);
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], (initial) => {
        const savedCart = localStorage.getItem("cartState");
        return savedCart ? JSON.parse(savedCart) : initial;

    });

    useEffect(() => {
        localStorage.setItem("cartState", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
