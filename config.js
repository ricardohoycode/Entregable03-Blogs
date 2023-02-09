require("dotenv").config();

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST,
    },
    db: {
        development: {
            dialect: "postgres",
            host: "localhost",
            username: "postgres",
            password: "root",
            database: "posts-db",
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true,
            },
        },
        test: {},
        production: {},
    },
};

module.exports = configs;
