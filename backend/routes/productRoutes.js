import express from 'express'
const router = express.Router()
import {
    getProducts, getProductById, deleteProduct, updateProduct, createProduct, createProductReview, getTopProducts
} from '../controllers/productController.js'
import { admin, protect } from '../middleware/authMiddleware.js'



//  @desc Fetch all products
// @route GET/api/products
// @acess Public

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).
    put(protect, admin, updateProduct)



export default router