const { io } = require("../server");

// on listen event
io.on("connection", client => {
    console.log("User connected");

    client.emit("sendMessage", {
        user: "Admin",
        message: "Welcome at this app"
    });

    client.on("disconnect", () => {
        console.log("User disconnected");
    });
    //listen client
    client.on("sendMessage", (data, callback) => {
        console.log(data);

        client.broadcast.emit("sendMessage", data);
        // if (message.user) {
        //     callback({
        //         resp: "IT IS OK"
        //     });
        // } else {
        //     callback({
        //         resp: "IT IS NOT OK!!!"
        //     });
        // }
    });
});
