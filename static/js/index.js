//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "ruberchiles@hotmail.es/test1";
    	client.send(message);
  
}
function LED1_Off(){	
	
	console.log("led off");
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "ruberchiles@hotmail.es/test1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}
// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "ruberchiles@hotmail.es",
    password: "Campeones1",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("ruberchiles@hotmail.es/test");
    message = new Paho.MQTT.Message("Dispositivo Conectado con la Nube");
    message.destinationName = "ruberchiles@hotmail.es/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	x=message.payloadString;
	if (x=="DESACTIVADO"){
		document.getElementById("sensor").innerHTML=x;
		}
	else{
	  document.getElementById("sensor1").innerHTML=x;
	  }
  }
  