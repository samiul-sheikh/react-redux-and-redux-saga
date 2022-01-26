const cartCounter = (state = 10, action) => {
    switch (action.type) {
        case "CART_INCREASED":
            return state + action.payload;
        case "CART_DECREASED":
            return state - 1;
        default:
            return state;
    }
};

export default cartCounter;