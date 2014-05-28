RemoteStorage.defineModule('facebook', function(privClient, pubClient) {
  if(!CredentialsStore) {
    throw new Error('please include utils/credentialsstore.js');
  }
  privClient.declareType('config', {
    type: 'object',
    properties: {
      actor: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          address: { type: 'string' },
        },
        required: ['name', 'address']
      },
      object: {
        type: 'object',
        properties: {
          objectType: {type: 'string', 'enum': ['credentials'] },
          access_token: { type: 'string' }
        },
        required: ['objectType', 'access_token']
      }
    },
    required: ['actor', 'object']
  });
  return {
    exports: new CredentialsStore('facebook', privClient)
  };
});