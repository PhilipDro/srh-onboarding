const SDK = require('directus-sdk-javascript');

const client = new SDK(
  'HAjve8N5UbidDBDLPDsBbvQnSuZxtzVy',
  'http://localhost/directus/api/', // Directus-hosted or own server
  1.1 // API Version
);

client.getEntries('module', (err, res) => {
  if(err) throw err;
  console.log(res);
});
