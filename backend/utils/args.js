require('dotenv').config(); // allows to read the variables defined in the .env file
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

/**
 * Access parameters passed from the command line
 */

const args = yargs(hideBin(process.argv)).argv;
if (process.env.NODE_ENV === 'production') args.mode = 'production';
module.exports = args;
