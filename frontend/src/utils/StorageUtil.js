/*SAVE*/
export const storageSave = (key, value) => {
    sessionStorage.setItem(key, value)
}

/*READ*/
export const storageRead = (key) => {
    const storedValue = sessionStorage.getItem(key);
        if (storedValue) {
            return storedValue;
        } else {
        return undefined;
    }
}

/*REMOVE*/
export const storageRemove = (key) => {
    sessionStorage.removeItem(key);
    return undefined
}