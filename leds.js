const url = 'ws://mosquitto.losnarvaez.com:9001'
const options = {
    clean: true,
    connectTimeout: 4000,
    clientId: 'mosquitto_pub',
}

var light = false;
const statusReq = {action:"status"};
const switchOn = {action:"switch", foco1:"on"};
const switchOf = {action:"switch", foco1:"of"};

$( document ).ready(function() {
    const client  = mqtt.connect(url, options)
    client.on('connect', function () {
        console.log('Connected')
        client.subscribe('home/esp32/status/1', function (err) {
            if (err) {
            console.log(err);
            }
        })
        client.publish('home/esp32/action/1', JSON.stringify(statusReq))
    }) 

    $("#lights").change(function() {
        if ($("#led").hasClass("ready")) {
            $("#led").toggleClass("blue-off");
            console.log("hola");
            if (light == false) {
                client.publish('home/esp32/action/1', JSON.stringify(switchOn))
                light = true;
            } else {
                client.publish('home/esp32/action/1', JSON.stringify(switchOf))
                light = false;
            }
        }
    }).triggerHandler('click');
    
    client.on('message', function (topic, payload, packet) {
        // Payload is Buffer
        console.log(`Message: ${payload.toString()}`)
        var message = JSON.parse(payload.toString());
        if (message.foco1 == "on") {
            $("#led").removeClass("blue-off");
            $("#lights").prop( "checked", true );
            light = true;
        }
        $("#led").addClass("ready");
    })
});


  


