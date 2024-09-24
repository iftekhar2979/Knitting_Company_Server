const express = require('express')
const { getPopularCharts, getUnitWiseGraph, getFabricChart, getAllCompanyOrdersAndFabrics } = require('../../Controller/dashboardController/dashboardController')

const router = express.Router()


router.get('/api/v1/analytics/popular',getPopularCharts)
router.get('/api/v1/analytics/unit',getUnitWiseGraph)
router.get('/api/v1/analytics/fabric',getFabricChart)
router.get('/api/v1/analytics/all',getAllCompanyOrdersAndFabrics)

module.exports=router