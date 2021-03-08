# TCP-Server
<pre>
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
</pre>
## Working
### Node install
![node instal](https://user-images.githubusercontent.com/56172425/110287035-e599f580-800b-11eb-937b-1c649f42ebc3.gif)
#### -----------------------------------------------------------------------------------------------------------------
### Demo
![final working](https://user-images.githubusercontent.com/56172425/110287088-f8acc580-800b-11eb-8555-0208be82fbc8.gif)


## Requirment
Node js version 15

## How To Run
    (i) node index.mjs
    (ii) use postman to send requests
