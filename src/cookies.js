export const loadCartState = () => {
    // cookie name ("cart") should be specified as input ?
    try {
        const serializedState = document.cookie;
        console.log(serializedState)
        if (serializedState === null) {
            console.log("Load cookie empty");
            return undefined;
        }
        console.log("Load cookie saved cart:");
        console.log(JSON.parse(document.cookie));
        return JSON.parse(document.cookie);
    } catch (err) {
        console.log("Load cookie error");
        console.log(err);
        return undefined;
    }
};

export const saveCartState = (state) => {
    try {
        console.log("Previous cookie");
        console.log(JSON.parse(document.cookie));
        document.cookie = (JSON.stringify(state));
        console.log("State after cookie written:");
        console.log(state);
        console.log("Cookie after cookie written:");
        console.log(JSON.parse(document.cookie));
    } catch {
        console.log("Write cookie error");
    }
}