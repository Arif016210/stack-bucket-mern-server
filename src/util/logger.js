const { createLogger, format, transports, Logger } = require('winston')

// { error:0, warn: 1, info:2, http: 3, verbose: 4, debug:5, silly:6 }
const level = process.env.LOG_level || 'debug';

function formatParams(info) {
    const { timestamp, level, message, ...args } = info;
    const ts = timestamp.slice(0, 19).replace('T', ' ');

    return ` ${ts} ${level} ${message} ${Object.keys(args).length ? JSON.stringify(args, '') : ''
        }`;
}

// Dev Format

const devformat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf(formatParams)
)

// Prod Format

const prodformat = format.combine(
    format.timestamp(),
    format.align(),
    format.printf(formatParams)
)


let logger = null;

if (process.env.NODE_ENV === 'production') {
    logger = createLogger({
        level,
        format: prodformat,
        transports: [
            new transports.File({ fileName: 'log/error.log', level: 'error' }),
            new transports.File({ fileName: 'log/combined' })
        ]
    })
} else {
    logger = createLogger({
        level,
        format: devformat,
        transports: [
            new transports.Console({
                colorize: true,
                name: 'console',
                timestamp: () => new Date(),
            })
        ],
    })
}

module.exports = logger;