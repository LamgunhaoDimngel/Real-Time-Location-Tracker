const socket = io();
console.log("herer");

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
        const {latitude,longitude} = position.coords;
        socket.emit("send-location",{latitude,longitude});
    }, (error) => {
        console.error(error);        
    },
    {
        enableHighAccuracy : true,
        timeout : 5000,
        maximumAge : 0
    }
)
}

L.map(map);