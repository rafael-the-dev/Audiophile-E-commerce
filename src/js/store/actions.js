const addItem = item => {
    return {
        type: 'cart/addItem',
        payload: item
    }
};

const updateItem = item => {
    return {
        type: 'cart/updateItem',
        payload: item
    }
};

const removeItem = item => {
    return {
        type: 'cart/removeItem',
        payload: item
    }
};

const removeAll = () => {
    return {
        type: 'cart/removeAll'
    }
};

const getLocalStorageData = () => {
    return {
        type: 'cart/getLocalStorageData'
    }
};

const setCurrentPage = page => {
    return {
        type: 'page/setPage',
        payload: page
    }
};

export {
    addItem,
    updateItem,
    removeItem,
    removeAll,
    getLocalStorageData,
    setCurrentPage
};