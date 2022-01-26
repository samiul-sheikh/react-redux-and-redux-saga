const cartFavorite = (state = 5, action) => {
    switch (action.type) {
        case "CART_FAVORITE_INCREASED":
            return state + 1;
        case "CART_FAVOURITE_DECREASED":
            return state - 1;
        default:
            return state;
    }
};

export default cartFavorite;