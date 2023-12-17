import config from 'config'
import Kratos from '@kratosbase/kratos'
import Backer from './resources/Backer.js'
import Product from './resources/Product.js'
import User from './resources/User.js'

const dbServer = config.get('app_db_server')

const app = new Kratos({
    port: 9001,
    db_server: dbServer
})

const defaultRouter = app.router({
    users: User, 
    products: Product, 
    backers: Backer
}).getRoutes()

app.launch(defaultRouter)

console.log(app.version)