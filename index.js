const moment = require("moment");
const uuid = require('uuid');
var navigator = {}; // required
var window = {}; // required
console.log("test2=");
//eval(pm.globals.get("jsrsasign")); // Import JavaScript jsrsasign

const header = {"alg":"RS256"};
const date = moment();
const payload = {
//    "aud":req.url,
    "iat":date.unix(),
    "exp":date.add(5,"m").unix(),
//    "iss":bru.getEnvVar("clientId"),
//    "sub":bru.getEnvVar("clientId"),
    "jti": uuid.v4()
};

var rs = require('jsrsasign');
var rsu = require('jsrsasign-util');
//var pem = rsu.readFile('z1.prv.p5e.pem');
//var prvKey = rs.KEYUTIL.getKey(pem, 'passwd');

//const jwk = bru.getEnvVar("privateKey");
const jwk = "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIBOgIBAAJBAKj34GkxFhD90vcNLYLInFEX6Ppy1tPf9Cnzj4p4WGeKLs1Pt8Qu\n" +
    "KUpRKfFLfRYC9AIKjbJTWit+CqvjWYzvQwECAwEAAQJAIJLixBy2qpFoS4DSmoEm\n" +
    "o3qGy0t6z09AIJtH+5OeRV1be+N4cDYJKffGzDa88vQENZiRm0GRq6a+HPGQMd2k\n" +
    "TQIhAKMSvzIBnni7ot/OSie2TmJLY4SwTQAevXysE2RbFDYdAiEBCUEaRQnMnbp7\n" +
    "9mxDXDf6AU0cN/RPBjb9qSHDcWZHGzUCIG2Es59z8ugGrDY+pxLQnwfotadxd+Uy\n" +
    "v/Ow5T0q5gIJAiEAyS4RaI9YG8EWx/2w0T67ZUVAw8eOMB6BIUg0Xcu+3okCIBOs\n" +
    "/5OiPgoTdSy7bcF9IGpSE8ZgGKzgYQVZeN97YE00\n" +
    "-----END RSA PRIVATE KEY-----";
const prvKey = rs.KEYUTIL.getKey(jwk);
const jwt = rs.KJUR.jws.JWS.sign(header.alg,
    JSON.stringify(header),
    JSON.stringify(payload),
    prvKey);

console.log(jwt);
//bru.setEnvVar("jwt",jwt);