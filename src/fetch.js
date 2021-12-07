export default async function generalFetch({path, method, body}) {
    const res = await fetch('http://localhost:3001/' + path, {
        method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    console.log('res: ',res);
    return res.json();
}

