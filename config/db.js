const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/CHAT";
async function mongodb() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("## database connected ##");
}
mongodb().catch((err) => console.log(err));

module.exports = mongoose;
