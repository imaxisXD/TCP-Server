# TCP-Server

TCP Server application that listens on port 8080 for GET and POST methods
Create a TCP server with the following capabilities/features
● Runs on port 8080
● Can handle more than one request at a time
● Supports REST protocol
● Does not use any HTTP library/package; uses only TCP/Socket libraries
● Detects that user has made a GET/POST or another call
○ In case of GET
    ■ In Terminal display 'We got GET request'
    ■ Respond with 'You requested for GET '
○ In Case of POST
    ■ In Terminal display 'We got POST request'
    ■ Respond with 'You requested for POST '
    ■ Handles all errors that are possible with the JSON payload
○ We have asked for supporting only GET and POST methods. If you wish to
support other methods too, it is your choice. In case you do not wish to
support other methods, do the following.
    ■ In Terminal display 'We are not supporting '
    ■ Respond with HTTP 400 Code
## Working
![Run demo](demo/node install.gif)
![Working Demo](demo/final working.gif)

## Requirment
Node js version 15

## How To Run
    (i) node index.mjs
    (ii) use postman to send requests
