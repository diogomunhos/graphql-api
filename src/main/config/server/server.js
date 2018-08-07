class Server {
    constructor() {
        this.express = require('express');
        this.app;
        this.serverInstance;
        this.database_name;
        this.db;
        this.isTestRunning = false;
    }

    init() {
        this.app = this.express();
        if (this.isDevEnvironment()) {
            this.createDevEnvironment();
        }
        this.bodyParserConfiguration();
        this.graphqlConfiguration();
        this.createDataBaseConnection();
        this.initErrorMonitor();
    }

    initErrorMonitor() {
        if (process.env.AIRBRAKE_PROJECT_ID !== undefined && process.env.AIRBRAKE_API_KEY !== undefined) {
            const AirbrakeClient = require('airbrake-js');
            const airbrake = new AirbrakeClient({
                projectId: process.env.AIRBRAKE_PROJECT_ID,
                projectKey: process.env.AIRBRAKE_API_KEY
            });
            const makeErrorHandler = require('airbrake-js/dist/instrumentation/express');
            this.app.use(makeErrorHandler(airbrake));
        }
    }

    setDatabaseName(database_name) {
        this.database_name = database_name;
    }

    isDevEnvironment() {
        return (process.env.NODE_ENV !== 'production');
    }

    createDevEnvironment() {
        const dotenv = require('dotenv');
        dotenv.config();
    }

    bodyParserConfiguration() {
        const bodyParser = require('body-parser');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    graphqlConfiguration() {
        const customSchema = require('../../graphql/index.graphql').customSchema;
        const graphqlHTTP = require('express-graphql');
        const jwt = require('jsonwebtoken');
        const AuthenticationController = require('../../controllers/authentication/authentication.controller');
        const controller = new AuthenticationController();
        this.app.use('/graphql', (req, res, next) => {
            if (!this.isDevEnvironment() || this.isTestRunning) {
                controller.verify(req, res, next);
            } else {
                controller.setDevContext();
                next();
            }
        }, graphqlHTTP({
            schema: customSchema,
            rootValue: global,
            graphiql: true,
            context: () => {
                return controller.getContext();
            }
        }));
    }

    createDataBaseConnection() {
        const mongoose = require('../mongodb/mongoose');
        this.db = mongoose(this.database_name);
    }

    start() {
        this.serverInstance = this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }

    close() {
        this.serverInstance.close();
        process.exit();
    }

    dropDatabase() {
        this.db.connection.db.dropDatabase();
    }
}

module.exports = new Server();