// use all functions in dns module using any domain
const dns = require("node:dns");
// Using the dns module to resolve a domain name

/*
Although named for the Domain Name System (DNS), it does not always use the DNS protocol for lookups. dns.lookup() uses the operating system facilities to perform name resolution. It may not need to perform any network communication. To perform name resolution the way other applications on the same system do, use dns.lookup().
*/
dns.lookup("google.com", (err, address, family) => {
  console.log("Dns:lookup()");
  if (err) {
    console.error("Error looking up domain:", err);
  } else {
    console.log("Address:", address);
    console.log("Family:", family);
  }
  console.log("=========================================");
});

// All other functions in the node:dns module connect to an actual DNS server to perform name resolution.

// 'ipv4first', 'ipv6first' or Default:'verbatim'
dns.setDefaultResultOrder("ipv4first"); // Set the default result order to IPv4 first and have higher priority than --dns-result-order command line option

dns.resolve4("google.com", async (err, addresses) => {
  console.log("Dns:resolve4()");
  if (err) throw err;

//   addresses.forEach((a) => {
//     dns.reverse(a, (err, hostnames) => { // Reverse lookup for each address
//       if (err) {
//         throw err;
//       }
//       console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//     });
//   });

  console.log(`addresses: ${JSON.stringify(addresses)}`);
  console.log("=========================================");
});

dns.resolve6("google.com", (err, addresses) => {
  console.log("Dns:resolve6()");
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);
  console.log("=========================================");
});

function getServers(domain) {
  console.log("Dns:getServers()");
  const data = dns.getServers(domain);
  if (data) {
    console.log(`DNS servers for ${domain}:`, data);
  } else {
    console.log("No DNS servers found.");
  }
  console.log("=========================================");
}
getServers("google.com");

dns.lookupService("127.0.0.1", 22, (err, hostname, service) => {
  console.log("Dns:lookupService()");
  console.log(hostname, service);
  console.log("=========================================");
  // Prints: localhost ssh
});

dns.resolveAny("google.com", (err, ret) => {
  console.log("Dns:resolveAny()");
  if (err) throw err;

  console.log(`Records: ${JSON.stringify(ret)}`);
  console.log("=========================================");
}); 



// DNS PROMISE API
const { Resolver } = dns.promises;
const resolver = new Resolver();
console.log("Dns:Resolver():setServers()");
resolver.setServers(['172.16.20.28']);

// This request will use the server at 172.16.20.28, independent of global settings.
resolver.resolve4('google.com').then((addresses) => {
    console.log("Dns:resolve4() using promises");
    console.log(`Addresses: ${JSON.stringify(addresses)}`);
    console.log("=========================================");
});

// Alternatively, the same code can be written using async-await style.
(async function() {
  const addresses = await resolver.resolve4('google.com');
    console.log("Dns:resolve4() using async-await");
    console.log(`Addresses: ${JSON.stringify(addresses)}`);
    console.log("=========================================");
})();

resolver.cancel(); // Cancel any pending requests. This is useful if you want to stop a request that is taking too long or if you want to ensure that no further requests are made after a certain point in your code.

resolver.setLocalAddress('192.168.1.100'); // Set the local address to use for DNS queries. This can be useful if you want to ensure that DNS queries are sent from a specific network interface or IP address. DEFAULT will be choosen by operating system.

// Note: The dnsPromises API provides a promise-based interface for DNS operations.

// The following methods from the dnsPromises API are available:
/*
resolver.getServers()
resolver.resolve()
resolver.resolve4()
resolver.resolve6()
resolver.resolveAny()
resolver.resolveCaa()
resolver.resolveCname()
resolver.resolveMx()
resolver.resolveNaptr()
resolver.resolveNs()
resolver.resolvePtr()
resolver.resolveSoa()
resolver.resolveSrv()
resolver.resolveTlsa()
resolver.resolveTxt()
resolver.reverse()
resolver.setServers()
*/