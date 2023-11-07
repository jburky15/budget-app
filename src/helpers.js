// Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

// Delete item
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}