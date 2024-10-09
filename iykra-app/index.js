const dotenv = require('dotenv');
const process = require('process');
dotenv.config();

const app = require("./features/app");

// backend services
app.listen(process.env.API_PORT, async function () {
    return console.log(`Backend services running on port ${process.env.API_PORT}`);
});