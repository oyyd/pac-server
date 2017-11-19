import { createServer } from 'http'
import { getPACFileContent } from './gfwlistUtils'

const NAME = 'pac_server'

const DEFAULT_OPTIONS = {
  serverAddr: '0.0.0.0',
  serverPort: 1080,
  pacServerPort: 8090,
}

export function createPACServer(_config, _pacFileContent) {
  const config = Object.assign({}, DEFAULT_OPTIONS, _config)
  const pacFileContent = _pacFileContent || getPACFileContent(config)
  const HOST = `${config.serverAddr}:${config.pacServerPort}`

  const server = createServer((req, res) => {
    res.write(pacFileContent)
    res.end()
  })

  server.on('error', err => {
    throw new Error(`${NAME} got error: ${err.stack}`)
  })

  server.listen(config.pacServerPort)

  return server
}
