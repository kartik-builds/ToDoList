// // import http from 'http'
// // const hostname = '127.0.0.1'
// // const port = 3000
// // const server = http.createServer((req,res)=>{
// //     res.statusCode = 200
// //     res.setHeader('content-type','text/plain')
// //     res.end('Hello, World!')
// // })
// // server.listen(port,hostname,()=>{
// //     console.log(`Server running at http://${hostname}:${port}/`)
// // })
// // async function main() {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
// //     const data = await response.json()
// //     console.log(data)    
// // }
// // main().catch(console.error)
// // const body = {
// //     title : 'foo',
// //     body : 'bar',
// //     userId : 1,
// // }
// // async function main() {
// //     const response =await fetch('https://jsonplaceholder.typicode.com/posts',{
// //         method : 'POST',
// //         headers: {
// //             'User-Agent': 'undici-stream-example',
// //             'Content-Type' : 'application/json',
// //         },
// //         body: JSON.stringify(body),
// //     });
// //     const data = await response.json()
// //     console.log(data)
// // }
// // main().catch(console.error);
// // import http from 'http'
// // const hostname = '127.0.0.1'
// // const port = 3000
// // const server = http.createServer((req, res) => {
// //     res.statusCode = 200
// //     res.setHeader('content-type','text/plain')
// //     res.end('Hello, World!')
// // })
// // server.listen(port, hostname, () => {
// //     console.log(`Server running at http://${hostname}:${port}/`)
// // })
// // const socket = new WebSocket('ws://localhost:8080')
// // socket.addEventListener('open',(event)=>{
// //     console.log('WebSocket connection established'
// //     )
// // })
// // socket.addEventListener('message',(event)=>{
// //     console.log('Message from server', event.data)
// // })
// // socket.addEventListener('close',(event)=>{
// //     console.log('WebSocket connection closed')
// // })
// // const socket = new WebSocket('ws://localhost:8080')
// // socket.addEventListener('open',event=>{
// //     const data = {
// //         type : 'message',
// //         content : 'Hello, Server!',
// //     }
// //     socket.send(JSON.stringify(data))
// // })
// // socket.addEventListener('message',event=>{
// //     const data = JSON.parse(event.data)
// //     if(data.type === 'response'){
// //         console.log('Message from server:', data.message)
// //     }
// //     else{
// //         console.log('Unknown message type:', data.type)
// //     }
// // })
// import http from 'http'
// const hostname = "127.0.0.1"
// const port = 3000
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('content-type','text' )
//     res.end('Hello world')
// })
// server.listen(port,hostname, ()=>{
//     console.log(`server running at http://${hostname}:${port}/` )
// })3
