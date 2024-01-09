import Kratos from '@kratosbase/kratos'
import config from 'config'
import waitlist from './resources/waitlist.js'
import user from './resources/user.js'

const app = new Kratos({
    port: config.get('port'),
    db_server: config.get('app_db_server'),
    cors_origins: config.get('origin')
})

const defaultRouter = app.router({
    users: user, 
    waitlist
}).getRoutes()

app.launch(defaultRouter)

console.log(app.version)