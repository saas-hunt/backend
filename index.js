import config from 'config'
import Kratos from '@kratosbase/kratos'
import Waitlist from './resources/Waitlist.js'
import User from './resources/User.js'

const app = new Kratos({
    port: config.get('port'),
    db_server: config.get('app_db_server'),
    disable_auth: true,
    cors_origins: config.get('origin')
})

const defaultRouter = app.router({
    users: User, 
    waitlist: Waitlist,
}).getRoutes()

app.launch(defaultRouter)

console.log(app.version)