const express = require('express')
const { getSingleYarnDetails, createYarnDetails, updateYarnDetails, removeYarnDetails } = require('../../../Controller/yarnDetailsController/yarnDetailsController')
const { yarnRecevied, receivedYarnDeleted } = require('../../../Controller/yarnDetailsController/yarnInformationController/yarnInfoWithDetails')
const { protect } = require('../../../Middlewares/protectMiddleware')
const router = express.Router()


router.get('/order/yarn/details/:id',protect,getSingleYarnDetails)
router.post('/order/yarn/details',protect,createYarnDetails)
router.post('/order/yarn/received',protect,yarnRecevied)
router.post('/order/yarn/received/remove/:id',protect,receivedYarnDeleted)
router.patch('/order/yarn/details/:id',protect,updateYarnDetails)
router.delete('/order/yarn/details/:id',protect,removeYarnDetails)


module.exports=router