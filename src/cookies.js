export const loadCartState = () => {
    // cookie name ("cart") should be specified as input
    try {
        const serializedState = document.cookie;
        if (serializedState === null) {
            console.log("Load cookie empty");
            return undefined;
        }
        console.log("Load cookie saved cart:");
        console.log(JSON.parse(document.cookie));
        return JSON.parse(document.cookie);
    } catch (err) {
        console.log("Load cookie error");
        return undefined;
    }
};

export const saveCartState = (state) => {
    try {
        document.cookie = ("cart",JSON.stringify(state));
        console.log("Cookie written");
    } catch {
        console.log("Write cookie error");
    }
}