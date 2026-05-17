// import http from 'http'
// const hostname = '127.0.0.1'
// const port = 3000
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('content-type','text/plain')
//     res.end('Hello, World!')
// })
// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// })
// async function main() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     console.log(data)    
// }
// main().catch(console.error)
const body = {
    title : 'foo',
    body : 'bar',
    userId : 1,
}
async function main() {
    const response =await fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        headers: {
            'User-Agent': 'undici-stream-example',
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json()
    console.log(data)
}
main().catch(console.error);