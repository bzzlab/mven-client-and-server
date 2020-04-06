//middleware/controller for routing in the backend and more
import express from 'express';
//application logger - Vorgänge während dem Betrieb festhalten (loggen)
import morgan from 'morgan';
//CORS - allows requests from foreign domains
import cors from 'cors';
/**
 * body-parser: parses incoming (HTTP) request bodies in the middleware before your handlers
 */
import bodyParser from 'body-parser';

/**
 * Determines the current environment and sets the appropriate variables
 * @param app
 */
export function setEnvironment(app) {
    //if this application it's not in production mode ...
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production'){
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

/**
 * Used to set development environment variables
 * @param app
 */
function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/dev-db';
    //remark - these log entries appear only on the server and are not sent to the client!
    //console.log(`running in development mode`); --> done now in index.js

    //parsing incoming (HTTP) request bodies
    app.use(bodyParser.json());
    //Configure express to use morgan-logger. So each request is logged for future analysis.
    //use the morgan dev-logging-pattern
    app.use(morgan('dev'));
    //Configure express to allow requests from foreign domains
    app.use(cors());
}

/**
 * Used to set production environment variables
 * @param app
 */
function setProdEnv(app) {
    process.env.NODE_ENV = 'production';
    process.env.DB_URL = 'mongodb://localhost:27017/prod-db';
    //console.log(`running in production mode`);
    //add static routes in order to serve static content (i.e. images) from the build folder called dist
    app.use(express.static(__dirname + '/../../dist'));
    //parsing incoming (HTTP) request bodies
    app.use(bodyParser.json());
}

