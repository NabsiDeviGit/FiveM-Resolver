const CFXResolver = require('../CFXResolver');

async function main() {

    var Resolver = new CFXResolver('zbbj7d');
    var o = await Resolver.Resolve();
    console.log(o);

}

main();