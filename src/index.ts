import 'reflect-metadata'
import { ConnectionBD } from './DB/db'
import app from './app'
import { PORT } from './DB/config'


async function main() {

    try {
        await ConnectionBD.initialize()
        app.listen(Number(PORT))
        console.log(`Server initialize on http://localhost:${PORT}`)
    }
    catch (err: any) {
        console.log(err)
    }
}

main()