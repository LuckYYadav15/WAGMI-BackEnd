module.exports = {
    HOST: 'HOST',
    PORT: 3306,
    USER: 'USER',
    PASSWORD: 'PASSWORD',
    DB: "sql6512779",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};