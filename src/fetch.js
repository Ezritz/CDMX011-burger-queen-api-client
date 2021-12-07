export default async function generalFetch({path, method, body, cors = 'cors'}) {
    const res = await fetch(path, {
        method,
        body: JSON.stringify(body),
        mode: cors,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': true
        }
    })
    console.log('res: ',res);
    return res.json();
}

