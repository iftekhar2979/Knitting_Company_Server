const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient()

async function getPopularCharts(req, res) {
    try {
        const result = await prisma.$queryRaw(
            Prisma.sql`SELECT
      *
    FROM
      (
      SELECT
          companyName AS name,
          COUNT(id) AS totalOrder,
          'company' AS category
      FROM
            \`Order\`
      GROUP BY
          companyName
      ORDER BY
          totalOrder
      DESC
  LIMIT 3
  ) AS company
  UNION ALL
  SELECT
      *
  FROM
      (
      SELECT
          fabricsName AS name,
          COUNT(id) AS totalOrder,
          'fabric' AS category
      FROM
            \`Order\`
      GROUP BY
          fabricsName
      ORDER BY
          totalOrder
      DESC
  LIMIT 3
  ) AS fabric
  UNION ALL
  SELECT
      *
  FROM
      (
      SELECT
          buyerName AS name,
          COUNT(id) AS totalOrder,
          'buyer' AS category
      FROM
           \`Order\`
      GROUP BY
          buyerName
      ORDER BY
          totalOrder
      DESC
  LIMIT 3
  ) AS buyer
  ORDER BY
      category
      
  DESC
      ;`
        )
        const transformedData = [
            {
                id: 1501,
                category: "Company",
                listItem: result.filter(item => item.category === 'company').map((item, index) => ({
                    id: 555 + index,
                    title: item.name,
                    count: Number(item.totalOrder)
                }))
            },
            {
                id: 1502,
                category: "Buyer",
                listItem: result.filter(item => item.category === 'buyer').map((item, index) => ({
                    id: 566 + index,
                    title: item.name,
                    count: Number(item.totalOrder)
                }))
            },
            {
                id: 1503,
                category: "Fabrics",
                listItem: result.filter(item => item.category === 'fabric').map((item, index) => ({
                    id: 569 + index,
                    title: item.name,
                    count: Number(item.totalOrder)
                }))
            }
        ];

        return res.status(200).send(transformedData)
    } catch (error) {
        console.log(error)
        return res.status(404).send(error)
    }
}

async function getUnitWiseGraph(req, res) {
    try {
        const result = await prisma.$queryRaw(
            Prisma.sql`SELECT
    m.name AS month,
    SUM(CASE WHEN o.unit = 'Fabric' THEN 1 ELSE 0 END) AS fabric,
    SUM(CASE WHEN o.unit = 'knitting' THEN 1 ELSE 0 END) AS knitting
FROM
    \`Order\` o
JOIN
    Month m ON MONTH(o.targetDate) = m.id
WHERE
    o.targetDate >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
GROUP BY
    m.name
ORDER BY
    m.id;
`)

        return res.status(200).send(result)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)

    }
}
async function getFabricChart(req, res) {
    try {
        const result = await prisma.$queryRaw(
            Prisma.sql`SELECT
    fabricsName AS name,
    COUNT(id) AS totalOrder
FROM
    \`Order\`
GROUP BY
    fabricsName
ORDER BY
    totalOrder DESC
LIMIT 4

`)
        const findingOther = await prisma.$queryRaw(
            Prisma.sql`SELECT
    'Other' AS fabrics,
    SUM(totalOrder) AS totalOrder
FROM (
    SELECT
        fabricsName,
        COUNT(id) AS totalOrder
    FROM
        \`Order\`
    GROUP BY
        fabricsName
    ORDER BY
        totalOrder DESC
    LIMIT 4, 18446744073709551615 -- Skip the first 4 results and include the rest
) AS subquery;

`)
        let newValue = result?.map(item => {
            return {
                fabrics: item.name,
                totalOrder: Number(item.totalOrder)
            }
        }
        )
        let totalObject = [...newValue, ...findingOther]



        //chartData

        const colors = [
            "#2a8ae3",
            "#b589e6",
            "#9f16a8",
            "#d5e85f",
            "#264d71"
        ];

        const colorMap = {};

        totalObject.forEach((item, index) => {
            colorMap[item.fabrics] = colors[index % colors.length];
        });

        const chartData = totalObject.map(item => ({
            fabrics: item.fabrics,
            totalOrder: item.totalOrder,
            fill: colorMap[item.fabrics]
        }));


        //chart config 


        const chartConfig = {
            fabrics: {
                label: "Fabrics",
            }
        };

        totalObject.forEach((item, index) => {
            const key = item.fabrics;
            chartConfig[key] = {
                label: key,
            };
        });
        // console.log(newValues)
        return res.status(200).send({ chartConfig, chartData })
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)

    }
}

async function getAllCompanyOrdersAndFabrics(req, res) {
    const range = req.query.range
    const now = new Date();
    let startDate, endDate;
    switch (range) {

        case 'last24Hours':
            startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
            endDate = now;
            break;
        case 'thisWeek':
            startDate = new Date(now);
            // Set start date to Monday of the current week
            startDate.setDate(now.getDate() - now.getDay() + 1);
            startDate.setHours(0, 0, 0, 0);
            endDate = now;
            break;
        case 'thisMonth':
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            endDate = now;
            break;
        case 'thisYear':
            startDate = new Date(now.getFullYear(), 0, 1);
            endDate = now;
            break;
        default:
            startDate = new Date(0); // Unix epoch
            endDate = now;
    }

    try {
        const companyCount = await prisma.company.count({
            where: {
                createdAt: {
                    gte: startDate,
                    lte: endDate,
                },
            },
        });

        const orderCount = await prisma.order.count({
            where: {
                createdAt: {
                    gte: startDate,
                    lte: endDate,
                },
            },
        });

        const fabricCount = await prisma.fabricsType.count({
            where: {
                createdAt: {
                    gte: startDate,
                    lte: endDate,
                },
            },

        });

        let analytics = {
            companyCount,
            fabricCount,
            orderCount,
        };
        return res.send(analytics)

    } catch (error) {
        console.log(error)
        return res.send(error.message)
    }


}
module.exports = { getPopularCharts, getUnitWiseGraph, getFabricChart, getAllCompanyOrdersAndFabrics }