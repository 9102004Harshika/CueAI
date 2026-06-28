import chalk from 'chalk';

const logger = {
    info: (msg) => console.log(chalk.blue('ℹ INFO:'), msg),
    success: (msg) => console.log(chalk.green('✓ SUCCESS:'), msg),
    warn: (msg) => console.log(chalk.yellow('⚠ WARN:'), msg),
    error: (msg) => console.log(chalk.red('✗ ERROR:'), msg),
    agent: (msg) => console.log(chalk.magenta('🤖 AGENT:'), msg),
    system: (msg) => console.log(chalk.cyan('⚙ SYSTEM:'), msg),
    debug: (msg) => {
        if (process.env.DEBUG) console.log(chalk.gray('  DEBUG:'), msg);
    }
};

export default logger;
