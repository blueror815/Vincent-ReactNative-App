/* eslint-disable no-console */

import Relay from 'react-relay';
import io from 'socket.io-client';
import conf from 'sportunity/conf/constants.json';

window.navigator.userAgent = 'react-native';

export default class NetworkLayer extends Relay.DefaultNetworkLayer {
  constructor(...args) {
    super(...args);

    this._socket = io.connect(`${conf.socketUrl}`,{
      jsonp: false,
      transports: ['websocket'],
    });
    
    
    const config = args[1];
    if(config.headers)
      this._socket.emit('addUser', { token: config.headers.token, });
    
    

    this._requests = Object.create(null);

    this._socket.on('subscription update', ({ id, data, errors }) => {
      
      const request = this._requests[id];
      if (!request) {
        return;
      }

      if (errors) {
        request.onError(errors);
      } else {
        request.onNext(data);
      }
    });

    this._socket.on('subscription closed', (id) => {
      const request = this._requests[id];
      if (!request) {
        return;
      }

      console.log(`Subscription ${id} is completed`);
      request.onCompleted();
      delete this._requests[id];
    });

    this._socket.on('error', (error) => {
      Object.values(this._requests).forEach((request) => {
        request.onError(error);
      });
    });

    

  }

  sendSubscription(request) {
    const id = request.getClientSubscriptionId();
    this._requests[id] = request;

    this._socket.emit('subscribe', {
      id,
      query: request.getQueryString(),
      variables: request.getVariables(),
    });

    return {
      dispose: () => {
        console.log(`disposing ${request.getDebugName()}:${id}`);
        this._socket.emit('unsubscribe', id);
      },
    };
  }

  disconnect() {
    this._socket.disconnect();

    this._requests.forEach(request => {
      request.onCompleted();
    });
  }
}
