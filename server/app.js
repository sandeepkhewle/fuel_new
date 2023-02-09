// package
const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const Logger = require('morgan');
const jwt = require('jsonwebtoken');
const server = require('http').createServer(app)
const io = require('socket.io')(server, { cors: { origin: '*' } });

// config
const config = require('./config/config').config;
// console.log('config-----', config);
const jwtSecret = config.jwtSecret;

app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 100000 }));
app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(Logger('common'));
app.set('port', process.env.PORT || 3737);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// let chatController = require('./controllers/chat.controller');
// socket code
// let connections = [];
io.sockets.on('connection', require('./controllers/chat.controller').dummy)

io.sockets.on('disconnect', (data) => {
    // on disconnect
    // connections.splice(connections.indexOf(socket), 1);
    // console.log('Disconnected: %s sockets connected', connections.length);
    console.log('Socket disconnected with socket id => ', socket.id);
});


app.use('/web', require('./controllers/web.controller'));

app.use(function (req, res, next) {
    // console.log('req.headers', req.headers);
    // check header or url parameters or post parameters for token
    let token = req.query.token || req.headers['x-access-token'] || req.headers.authorization;
    // console.log('token', token);
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, jwtSecret, function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.user = decoded;
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

app.use('/data', require('./controllers/data.controller'));
app.use('/admin', require('./controllers/admin.controller'));
app.use('/structure', require('./controllers/structure.controller'));
app.use('/trend', require('./controllers/trend.controller'));
app.use('/payment', require('./controllers/payment.controller'));

mongoose.connect(config.database, {
    socketTimeoutMS: 50000,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: config.autoIndex // need to be false in production
}).then(function () {
    console.log("DB connetion success");
}, function (err) {
    console.log("DB connetion error", err);
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

server.listen(app.get('port'));
module.exports = app;

