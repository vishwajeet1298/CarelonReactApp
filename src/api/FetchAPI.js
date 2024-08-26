export const myFetchGetRequest=async()=>
{
    const response=await fetch('https://api.restful-api.dev/objects');
    const resJSON=await response.json();
    return resJSON;
}

export const myFetchPostRequest=async()=>
{
    const response=await fetch('https://api.restful-api.dev/objects',
    {
        method:'POST',
        body:JSON.stringify(
            {
                "name": "Apple MacBook Pro 16",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             }
        )
    
    });
    const resJSON=await response.json();
    return resJSON;
}
