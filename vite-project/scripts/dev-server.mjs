import { createServer } from 'vite'

const server = await createServer({
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
  },
})

await server.listen()
server.printUrls()

process.on('SIGTERM', async () => {
  await server.close()
  process.exit(0)
})

process.on('SIGINT', async () => {
  await server.close()
  process.exit(0)
})

setInterval(() => {}, 1 << 30)
