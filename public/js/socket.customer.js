var socket = io();
socket.on("connect", function() {
    console.log("Server connection");
});

socket.on("disconnect", function() {
    console.log("Lost connection");
});

//Send information
//hear event
socket.emit(
    "sendMessage",
    {
        user: "Deku",
        message: "Smash detroit"
    },
    function(resp) {
        console.log("Callback trigger:", resp);
    }
);

//hear info
socket.on("sendMessage", function(message) {
    console.log("Server:", message);
});
