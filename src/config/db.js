const mongoose = require("mongoose");

main()
  .then(() =>
    console.log("\x1b[32m%s\x1b[0m", "✅ Database connected successfully")
  )
  .catch((err) => console.error(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}
