const express = require('express')
const { getPopularCharts, getUnitWiseGraph, getFabricChart } = require('../../Controller/dashboardController/dashboardController')

const router = express.Router()


router.get('/api/v1/analytics/popular',getPopularCharts)
router.get('/api/v1/analytics/unit',getUnitWiseGraph)
router.get('/api/v1/analytics/fabric',getFabricChart)

module.exports=router