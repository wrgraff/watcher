#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');

program
    .version('0.0.1')
    .argument('[filename]', 'Name of a file to execute')
    .action(args => {
        console.log(args);
    });

program.parse(process.argv);

// const start = debounce(() => {
//     console.log('Start user prgm')
// }, 100);

// chokidar
//     .watch('.')
//     .on('add', start)
//     .on('change', () => console.log('file changeed'))
//     .on('unlink', () => console.log('file unlinked'));
