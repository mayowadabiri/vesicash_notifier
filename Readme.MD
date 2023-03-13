# HTTP Based Notification system

## How to use 
Clone the project and 

1. cd into each folders 
2. run npm install to install the necessary packages
3. npm start to begin the server in separate ports

## Publisher

This service creates a subscriber (HTTP endpoint) to topic and also publishes to the subscriber service

## Subscriber

This service listens for incoming http request from the publisher and logs both the topic and the body of the data being sent


