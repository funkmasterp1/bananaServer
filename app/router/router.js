var bananaController = require('../controllers/bananaController');

module.exports = function(router){
router.get('/', bananaController.getHome);
};
