const mongoose = require('mongoose')
mongoose.set("strictQuery",true)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_NOPSW)

    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB