export const SaveInStorage = (key, item) => {
    let items = JSON.parse(localStorage.getItem(key));

    if(Array.isArray(items)) {
        items.push(item);
    }
    else {
        items = [item];
    }

    localStorage.setItem(key, JSON.stringify(items));

    return item;
}