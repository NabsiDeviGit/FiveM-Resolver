#!/usr/bin/env node

const yargs = require('yargs');
const CFXResolver = require('../CFXResolver');

const argv = yargs.options(
    {
        t:
        {
            alias: 'token',
            default: '',
            describe: 'cfx.re token or URL to resolve.',
            type: 'string',
        }
    }
).help().argv;

async function main() {

    if (argv.token == '')
        return console.log('[!] fivem-resolver -h for help.');

    console.log('[+] Resolving %s..', argv.token);

    var resolver = new CFXResolver(argv.token);
    var values = await resolver.Resolve();

    if (values == null)
        return console.log('[+] Unknown error has occurred try again.');

    if (values.address.length == 1) {
        console.log('[+] WARNING: you have to use VPN to get ip-address and port.');
        console.log('[+] Domain: %s', values.address[0]);
    } else {
        console.log('[+] IP: %s', values.address[0]);
        console.log('[+] Port: %d', values.address[1]);
    }

    if (values.name != null) {
        console.log('[+] Name: %s', values.name);
    } else {
        console.log('[+] Name: couldnt retrieve server name..');
    }

    if (values.name != null) {
        console.log('[+] Description: %s', values.description);
    } else {
        console.log('[+] Description: couldnt retrieve description name..');
    }

    console.log('[+] Country: %s', values.country);
}

main();