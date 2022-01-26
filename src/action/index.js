export const cartIncrement = (number) => {
    return {
        type: "CART_INCREMENT",
        payload: number,
    };
};

export const cartDecrement = () => {
    return {
        type: "CART_DECREMENT",
    };
};

export const getUsers = () => {
    return {
        type: "GET_USERS_REQUESTED",
    };
};