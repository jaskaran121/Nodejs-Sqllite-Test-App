const router = require('express').Router();
const controller = require('../controllers/products');

router.get('/',controller.getProducts);

router.post('/',controller.postProduct);

router.delete('/:productId',controller.deleteProduct);

router.patch('/:productId',controller.patchProduct);

router.put('/:productId',controller.putProducts);

router.post('/orders',controller.processOrders);

module.exports = router;
