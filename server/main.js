const app = require("./app.js")
const connectDB = require("./db.js")

const main = async () => {
    try {
        await connectDB()
        app.listen('8000')

        console.log("Express Server")
        console.log("- Database: Valor")
        console.log("- Local: http://localhost:8000")
    } catch (error) {
        console.log(error.message)
    }
}


main()