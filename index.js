const { PeerServer } = require('peer');
PeerServer({ port: process.env.PORT || 9000, path: '/splash', proxied: true, allow_discovery: true });
