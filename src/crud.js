import generalFetch from './fetch';

async function getElements (path) {
    const res = await generalFetch({
        path: path,
        method: 'GET'
    });
    
    return res;
}

async function createElements (path,body) {
    const res = await generalFetch({
        path: path,
        method: 'POST',
        body: body
    });
    
    return res;
}

async function deleteElements (path, id ) {
    const res = await generalFetch({
        path: path + '/' + id,
        method: 'DELETE'
    });
    
    return res.data;
}

async function updateElements (path, id, newBody) {
    const res = await generalFetch({
        path: path + '/' + id,
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