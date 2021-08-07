const { ProductController } = require('../controllers/products')

module.exports = (app) => {
    app.route('/products')
        .get(ProductController.getProducts)
        .post(ProductController.createNewProduct);
    app.route('/Products/:id')
        .put(ProductController.updateProduct)
        .delete(ProductController.deleteProduct);
}