import QdtComponents from 'qdt-components'

const host = 'dashboards.philasd.org' // window.location.hostname

const config = {
  host,
  prefix: '',
  port: host === 'localhost' ? 4848 : 443, // window.location.port,
  secure: host === 'localhost' ? window.location.protocol === 'https:' : true,
  appId:
    host === 'localhost'
      ? 'PSSA & Keystone'
      : 'fe466d74-1a3e-4e2d-a534-ad33510fba90',
}
const connections = {
  vizApi: true,
  engineApi: true,
}
const qdtComponents = new QdtComponents(config, connections)

console.log('opening port', config.port)

export default ({ app }, inject) => {
  inject('qdt', qdtComponents)
}
