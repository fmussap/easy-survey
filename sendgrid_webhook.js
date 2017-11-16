const localtunnel = require('localtunnel')
localtunnel(5000, { subdomain: 'easyaf2004survey' }, function (err, tunnel) {
  console.log('LT running', err || '')
})
