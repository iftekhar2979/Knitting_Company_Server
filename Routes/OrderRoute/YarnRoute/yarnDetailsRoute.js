const express = require('express')
const { getSingleYarnDetails, createYarnDetails, updateYarnDetails, removeYarnDetails } = require('../../../Controller/yarnDetailsController/yarnDetailsController')
const { yarnRecevied, receivedYarnDeleted } = require('../../../Controller/yarnDetailsController/yarnInformationController/yarnInfoWithDetails')
const router = express.Router()


router.get('/order/yarn/details/:id',getSingleYarnDetails)
router.post('/order/yarn/details',createYarnDetails)
router.post('/order/yarn/received',yarnRecevied)
router.post('/order/yarn/received/remove/:id',receivedYarnDeleted)
router.patch('/order/yarn/details/:id',updateYarnDetails)
router.delete('/order/yarn/details/:id',removeYarnDetails)


module.exports=router