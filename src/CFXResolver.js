const fetch = require('node-fetch');

module.exports = class CFXResolver {

    constructor(token) {

        this.token = token;

        this.data = {
            resources: [],
            country: "",
            name: "",
            description: "",
            tags: [],
            address: []
        };

    }

    async Resolve() {

        try {

            let request;
            // Add support for full links. (It's handy)
            if (!this.token.contains('https://cfx.re/join/'))
                request = await fetch(`https://cfx.re/join/${this.token}`);
            else
                request = await fetch(`${this.token}`);
            
            var url = await request.headers.get('x-citizenfx-url');

        } catch (err) {
            return null;
        }

        if (url == null) {
            return null;
        }

        if (!url.includes('users.cfx.re')) {

            url = url.substr(7, url.length - 7);
            url = url.substr(0, url.length - 1);

            this.data.address = url.split(':');

        } else {

            url = url.substr(7, url.length - 7);
            url = url.substr(0, url.length - 1);

            this.data.address.push(url);

        }

        try {

            var request2 = await fetch(`http://${url}/info.json`);
            var data = await request2.json();

        } catch (err) {
            return null;
        }

        this.data.resources = data.resources;
        this.data.country = data.vars.locale;
        this.data.name = data.vars.sv_projectName;
        this.data.description = data.vars.sv_projectDesc;
        this.data.tags = data.vars.tags;

        return this.data;
    }

};