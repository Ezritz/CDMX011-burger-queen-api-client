export default async function generalFetch({path, method, body}) {
    const res = await fetch('https://fake-server-bqac.herokuapp.com/' + path, {
        method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    
    return res.json();
}

