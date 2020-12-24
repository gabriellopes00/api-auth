import { createConnection } from 'typeorm'

createConnection().then(() => console.log('Connection created successfully'))
