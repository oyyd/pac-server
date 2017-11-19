import { createPACServer } from './pacServer'
export { createPACServer } from './pacServer'

if (module === require.main) {
  createPACServer({
    pacServerPort: 8091,
  })
  console.log('listen')
}
