export default async function generalFetch ({path, method, body}) {
    const res = await fetch('http://localhost:3001/' + path, {
        method,
        body: JSON.stringify(body),
        header: {
            "Content-type": "application/json"
        }
    })
    return await res.json();
}

