import net from "net"; //imported net libraray

const PORT = 8080;// Defined port 8080
const Server = net.createServer();// Created the tcp server

Server.on("listening", () => console.log("Listening on port: " + PORT));

Server.on("connection", function handleConnection(socket) {
	socket.on("drain", () => {
		socket.resume();
	});

	socket.on("data", function handleData(data) {
		const request = data.toString().split("\n");
		// console.log(request); For debugging purpose enable this
		const method = request[0].split("/")[0].trim();
		// console.log(method); For debugging purpose enable this
		socket.write(
			["HTTP/1.1 200 OK", "Content-Type: text/html; charset=UTF-8", "Content-Encoding: UTF-8", "Accept-Ranges: bytes", "Connection: keep-alive"].join(
				"\n"
			) + "\n\n"
		);
		//To check the Get/Post method which is stored in variable named method
		if (method == "GET" || method == "POST") {
			console.log(`We got ${method} request`);
			socket.write(`<h1>You requested for ${method}</h1>`);
		}
		// If any other method is called then return HTTP 400 code
		else {
			console.log(`We are not supporting ${method} method`);
			socket.write(`<h1>HTTP 400 Code</h1><h2>We are not supporting ${method} method<h2>`)}
		socket.end();
	});

	socket.on("close", function closeSocket(err) {
		if (err) {
			throw new Error("SOCKET ERROR");
		} else {
			console.log("Socket Closed");
			console.log("-------------------");
			socket.destroy();
		}
	});
	socket.setTimeout(20 * 60 * 1000, () => console.log("Timeout Reached"));
	socket.on("timeout", function handleTimeout() {
		console.log("Session Timeout");
		socket.end();
	});
	
});

Server.listen(PORT);