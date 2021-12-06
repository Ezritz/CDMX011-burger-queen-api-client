import generalFetch from './fetch';

async function getElements () {
    const res = await generalFetch({
        path: 'products',
        method: 'GET'
    });
    
    return res;
}

async function createElements (body) {
    const res = await generalFetch({
        path: 'products',
        method: 'POST',
        body: body
    });
    
    return res.data;
}

async function deleteElements (id) {
    const res = await generalFetch({
        path: 'products' + '/' + id,
        method: 'DELETE'
    });
    
    return res.data;
}

async function updateElements (id, newBody) {
    const res = await generalFetch({
        path: 'products' + '/' + id,
        method: 'PATCH',
        body: newBody
    });
    
    return res.data;
}

export {
    getElements,
    createElements,
    deleteElements,
    updateElements
}