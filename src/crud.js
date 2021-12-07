import generalFetch from './fetch';

async function getElements (path) {
    const res = await generalFetch({
        path: 'http://localhost:3001/'+path,
        method: 'GET'
    });
    
    return res;
}

async function createElements (body) {
    const res = await generalFetch({
        path: "http://4e59c0e3-8e77-451f-95bb-50136be77174.mock.pstmn.io/orders",
        method: 'POST',
        body: body,
        cors: 'no-cors',
    });
    
    return res.data;
}

async function deleteElements (path, id ) {
    const res = await generalFetch({
        path: 'http://localhost:3001/'+path + '/' + id,
        method: 'DELETE'
    });
    
    return res.data;
}

async function updateElements (path, id, newBody) {
    const res = await generalFetch({
        path: 'http://localhost:3001/'+path + '/' + id,
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