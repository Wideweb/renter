class Logger {
    trace(message) {
        console.log(`[TRACE]: ${message}`);
    }

    info(message) {
        console.log(`[INFO]: ${message}`);
    }

    warn(message) {
        console.log(`[WARN]: ${message}`);
    }

    error(message) {
        console.log(`[ERROR]: ${message}`);
    }
}

const logger = new Logger();
export default logger;