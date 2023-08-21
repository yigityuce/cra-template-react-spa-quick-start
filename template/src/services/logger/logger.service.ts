type LOG_FN = (...args: any[]) => void;

enum LOG_LEVELS {
	ERROR = 'error',
	WARN = 'warn',
	INFO = 'info',
	VERBOSE = 'verbose',
	DEBUG = 'debug'
}

const LOGGER_MAP: Record<LOG_LEVELS, LOG_FN> = {
	[LOG_LEVELS.ERROR]: (...args) => console.error(...args),
	[LOG_LEVELS.WARN]: (...args) => console.warn(...args),
	[LOG_LEVELS.INFO]: (...args) => console.info(...args),
	[LOG_LEVELS.VERBOSE]: (...args) => console.log(...args),
	[LOG_LEVELS.DEBUG]: (...args) => console.debug(...args)
};

class Logger {
	private log: LOG_FN = (level: LOG_LEVELS, ...args) => {
		if (process.env.REACT_APP_LOG === 'true') {
			LOGGER_MAP[level] ? LOGGER_MAP[level](...args) : console.log(...args);
		}
	};

	error: LOG_FN = (...args) => this.log(LOG_LEVELS.ERROR, ...args);
	warn: LOG_FN = (...args) => this.log(LOG_LEVELS.WARN, ...args);
	info: LOG_FN = (...args) => this.log(LOG_LEVELS.INFO, ...args);
	verbose: LOG_FN = (...args) => this.log(LOG_LEVELS.VERBOSE, ...args);
	debug: LOG_FN = (...args) => this.log(LOG_LEVELS.DEBUG, ...args);
}

export const logger = new Logger();
