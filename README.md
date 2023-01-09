# FiveM Resolver

## Get Started.

**DISCLAIMER**

if you ever see "Domain" instead of IP and Port try using VPN to solve the issue.

---

first install our package by typing this command to your terminal.
```
npm -g i fivem-resolver
```

---

then we can run it by typing this command to our terminal.
```
fivem-resolver -t zbbj7d
```

---

Output:
```
[+] Resolving zbbj7d..
[+] IP: 45.131.108.89
[+] Port: 30120
[+] Name: ^7[^1GERMAN^7]^1 🩸SCARFACE CITY🩸
[+] Description: ❌Keine Allowlist❌ + 🔥Performance🔥 + 💣AntiCheat💣 + 🎤SaltyChat🎤 + 🩸Red Way🩸 + Hosted by TubeHosting
[+] Country: de-DE
```

## Use as Libary

this package can be also used as an libary code example below.

```javascript
const CFXResolver = require('fivem-resolver').CFXResolver;

async function main() {

  var Resolver = new CFXResolver('zbbj7d');
  var result = await Resolver.Resolve();
  console.log(result);

}

main();
```

Example Output:

```
{
  resources: [
    'hardcap',
    '_cfx_internal',
    'scarface_tankstelle',
    'scarface_moneyhud',
    'scarface_state',
    'scarface_komminscafe',
    'ps_garage',
    'scarface_bank',
    'btw_ffa',
    'airport',
    'fivem',
    'manuistgott',
    'monitor',
    'esx_lkwshop',
    'skinchanger',
    'xnTattoos',
    'Craniax_headlights',
    'esx_pun_carwash',
    ...
  ],
  country: 'de-DE',
  name: '^7[^1GERMAN^7]^1 🩸SCARFACE CITY🩸',
  description: '❌Keine Allowlist❌ + 🔥Performance🔥 + 💣AntiCheat💣 + 🎤SaltyChat🎤 + 🩸Red Way🩸 + Hosted by TubeHosting',
  tags: 'German,Deutsch,Roleplay,Life,Rollenspiel,Reallife,Ger,DE',
  address: [ '45.131.108.89', '30120' ]
}
```

# LICENSE

This project is licensed under the `MIT` license.
