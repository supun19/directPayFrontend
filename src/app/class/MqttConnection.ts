import {Paho} from 'ng2-mqtt/mqttws31';
import {timestamp} from "rxjs/operator/timestamp";

export class MqttConnection {
  client;
  clientId :string;
  constructor(clientId:string) {
    this.client = new Paho.MQTT.Client('13.58.144.197', 9001, ""+new Date().getTime());
    this.clientId = clientId;
    this.onMessage(null);
    this.onConnectionLost();
    this.client.connect({onSuccess: this.onConnected.bind(this)});
  }

  onConnected() {
    console.log("Connected");
    this.client.subscribe(this.clientId);
    this.sendMessage('update');
  }

  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = this.clientId;
    this.client.send(packet);
  }

  onMessage(callback) {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Message arrived : ' + message.payloadString);
      callback(message.payloadString);
    };
  }

  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost : ' + JSON.stringify(responseObject));
    };
  }
}
