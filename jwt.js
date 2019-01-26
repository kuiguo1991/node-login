const jwt = require('jsonwebtoken')




function  generateToken(data){
    let created = Math.floor(Date.now() / 1000);
    let cert = fs.readFileSync(path.join(__dirname, '../config/pri.pem'));//私钥
    let token = jwt.sign({
        data,
        exp: created + 3600 * 24
    }, cert, { algorithm: 'RS256' });
    return token;
}



module.exports = generateToken;