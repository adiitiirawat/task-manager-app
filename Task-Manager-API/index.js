const app = require("./app");
const mongoose = require("mongoose");
const port = 5000;
require('dotenv').config();
mongoose.set('strictQuery', false);


async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main();