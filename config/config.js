require('dotenv').config();

const config = {
    dbUrl:  process.env.DATABASE_URL,
    port: process.env.PORT || 3000
}

module.exports = { config };
