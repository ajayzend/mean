module.exports = function(app, express){
var api = express.Router();
    api.get('/test', function (req, res) {
        res.send(
            {
                'success': true,
                'message': 'This is test messagewss'
            }
        )
    });
    return api;
};