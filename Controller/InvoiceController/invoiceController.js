const { PrismaClient } = require('@prisma/client');
const { type } = require('express/lib/response');
const { compileETag } = require('express/lib/utils');
const prisma = new PrismaClient()


function transfer(orderArrays, body) {
    const d = new Date();
    let year = d.getFullYear();
    return prisma.$transaction(async (tx) => {
        const firstOrder = await tx.order.findMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            include: {
                company: true
            }

        })

        body.forEach(element => {
            element.piNumber = `TKCF-${firstOrder.company.shortForm}-${firstOrder.id}/${year}`
            element.season = firstOrder.season
        });

        const order = await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            data: {
                isProformaInvoiceCreated: true,
                proformaInvoiceId: body.containOrders,

            },

        });

        const createManyProformaInvoice = await tx.proformaInvoice.createMany({
            data: body
        })
        return createManyProformaInvoice;
    })
}

function transferToBill(orderArrays, body) {
    const d = new Date();
    let year = d.getFullYear();
    let newObject = body.map(item => {
        const { fabricsId, companyId, buyerName, containOrders, unitPrice, amount, invoiceAmount, invoiceQuantity } = item
        return { fabricsId, companyId, buyerName, containOrders, unitPrice, amount, invoiceAmount, invoiceQuantity }
    })
    return prisma.$transaction(async (tx) => {
        const firstOrder = await tx.order.findMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            include: {
                company: true
            }
        })
        newObject.forEach((element, i) => {
            element.billNumber = `TKCF-${firstOrder[0].company.shortForm}-${firstOrder[0].id}/${year}`
        });
        const order = await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            data: {
                billNumber: newObject[0].billNumber,
                isBillCreated: true,
                isProformaInvoiceCreated: false,
            },
        });
        const createManyProformaInvoice = await tx.billInformation.createMany({
            data: newObject
        })
        return createManyProformaInvoice;
    })
}
function changeOrderAndDeletePi(containOrders, orderArrays) {
    return prisma.$transaction(async (tx) => {
        const createManyProformaInvoice = await tx.proformaInvoice.deleteMany({
            where: {
                containOrders: containOrders
            }
        })

        const order = await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            data: {
                isProformaInvoiceCreated: false,
                proformaInvoiceId: ""
            },
        });


        return createManyProformaInvoice;
    })
}
function changeOrderAndDeleteBills(containOrders, orderArrays) {
    return prisma.$transaction(async (tx) => {
        const createManyProformaInvoice = await tx.billInformation.deleteMany({
            where: {
                containOrders: containOrders
            }
        })

        const order = await tx.order.updateMany({
            where: {
                orderNumber: {
                    in: orderArrays, // Assuming req.body.orderNumbers is your array of orderNumbers
                },
            },
            data: {
                isProformaInvoiceCreated: false,
                proformaInvoiceId: "",
                isBillCreated: false,
                billNumber: ""
            },
        });


        return createManyProformaInvoice;
    })
}
const createProformaInvoice = async (req, res) => {
    const body = req.body
    const orderArrays = body[0].containOrders.split("_")
    try {
        const result = await transfer(orderArrays, body)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: "Proforma Invoice did not created Correctly" })
    }
}
const createBill = async (req, res) => {
    const body = req.body
    const orderArrays = body[0].containOrders.split("_")
    try {
        const result = await transferToBill(orderArrays, body)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: "Proforma Invoice did not created Correctly" })
    }
}
const getAllBill = async (req, res) => {
    const { page = 1, limit = 50 } = req.query;
    try {
      const orders = await prisma.billInformation.findMany({
        orderBy: [{ createdAt: 'desc' }],
        select: {
          id: true,
          billNumber: true,
          invoiceQuantity: true,
          invoiceAmount: true,
          containOrders: true,
          company: {
            select: { companyName: true }
          },
          buyer: {
            select: { buyerName: true }
          },
          fabricsType: {
            select: { fabricsName: true }
          }
        },
        distinct: ['containOrders'], // ✅ Valid here
        take: parseFloat(limit),
        skip: (parseFloat(page) - 1) * parseFloat(limit),
      });
  
      // ❌ count() doesn't support distinct — so do this instead:
      const allOrders = await prisma.billInformation.findMany({
        select: { containOrders: true }
      });
      const total = new Set(allOrders.map(o => o.containOrders)).size;
  
      res.status(200).send({ data: orders,total });
    } catch (error) {
      console.error(error);
      res.status(404).send({ error: "Nothing Found !!!" });
    }
  }
// const getAllBill = async (req, res) => {
//     const { page = 1, limit = 50 } = req.query;
//     const parsedLimit = parseInt(limit);
//     const offset = (parseInt(page) - 1) * parsedLimit;
  
//     try {

//       // Step 1: Get paginated distinct containOrders with latest entry
//       const orders = await prisma.$queryRaw`
//         SELECT DISTINCT ON ("containOrders") 
//           b."id", b."billNumber", b."invoiceQuantity", b."invoiceAmount", b."containOrders", b."createdAt",
//           c."companyName",
//           buy."buyerName",
//           f."fabricsName"
//         FROM "billInformation" b
//         LEFT JOIN "Company" c ON b."companyId" = c."id"
//         LEFT JOIN "Buyer" buy ON b."buyerId" = buy."id"
//         LEFT JOIN "FabricsType" f ON b."fabricsId" = f."id"
//         ORDER BY b."containOrders", b."createdAt" DESC
//         OFFSET ${offset}
//         LIMIT ${parsedLimit};
//       `;
  
//       // Step 2: Count total unique containOrders
//       const countResult = await prisma.$queryRaw`
//         SELECT COUNT(DISTINCT "containOrders") AS total FROM "billInformation";
//       `;
//       const total = parseInt(countResult[0].total);
  
//       res.status(200).send({ data: orders, total });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ error: "Something went wrong while fetching bills." });
//     }
//   };
  
const getAllProformaInvoices = async (req, res) => {
    
    const { page = 1, limit = 50 } = req.query;
    try {
        const orders = await prisma.proformaInvoice.findMany({
            orderBy: [
                {
                    createdAt: 'desc',
                },
            ],
            select: {
                id: true,
                piNumber: true,
                fabricsName: true,
                totalPIQuantity: true,
                totalPIAmount: true,
                containOrders: true,
                billingWay: true,
                company: {
                    select: {
                        companyName: true
                    }
                },
                buyer: {
                    select: {
                        buyerName: true
                    }
                },
            },
            distinct: ["containOrders"],
            take: parseFloat(limit),
        skip: (parseFloat(page) - 1) * parseFloat(limit),
        });

        const allOrders = await prisma.proformaInvoice.findMany({
            select: { containOrders: true }
          });
          const total = new Set(allOrders.map(o => o.containOrders)).size;
      
        res.status(200).send({data:orders,total});
    } catch (error) {
        console.log(error)
        res.status(404).send({ error: "Nothing Found !!!" });
    }
}

const getSingleProformaInvoice = async (req, res) => {

    try {
        const orders = await prisma.proformaInvoice.findMany({
            where: {
                containOrders: req.params.id
            },
            include: {
                company: true,
                buyer: true,
            },
        });

        res.status(200).send(orders);
    } catch (error) {
        res.status(404).send({ error: "Nothing Found !!!" });
    }
}
const getSingleBill = async (req, res) => {
    try {
    // console.log()
    let orderNumbers = req.params.id

    if(orderNumbers?.includes("_")){
        orderNumbers = req.params.id.split("_")
    }else{
        orderNumbers=[orderNumbers]
    }
    // console.log(orderNumbers)
   
        
        const orders = await prisma.order.findMany({
            where: {
              orderNumber: {
                in: orderNumbers,
              },
            },
            select: {
              companyName: true,
              buyerName: true,
              fabricsId: true,
              fabricsName:true,
              deliveredQuantity: true,
              season: true,
              createdAt:true,
              billNumber: true, // From Order model
              company: {
                select: {
                  companyName: true,
                  location: true,
                },
              },
              buyer: {
                select: {
                  buyerName: true,
                },
              },
              deliveryDetails: {
                select: {
                  order: {
                    select: {
                      buyerName: true,
                      sbNumber: true,
                      programNumber: true,
                      jobNumber: true,
                      bookingNumber: true,
                    },
                  },
                  createdAt: true,
                  id: true,
                  deliveredQuantity: true,
                },
              },
            },
          });
          
        //   console.log("here is the bill number",orders[0].billNumber)
        let billNumber=orders[0].billNumber
        // console.log(billNumber)
          if(!billNumber){
              throw new Error("Bill Number is not found !")
            }
      
      
            const bills= await prisma.billInformation.findMany({
        where: {
          billNumber:billNumber
        },})

        orders.forEach(order => {
            const matchingBills = bills.filter(bill => bill.fabricsId === order.fabricsId);
            if (matchingBills.length > 0) {
              order.billDetails = matchingBills[0];
            }
          });
//     const rawOrders = await prisma.$queryRaw`
//     SELECT o.companyName, o.buyerName, o.fabricsName, o.deliveredQuantity, o.season, o.bookingNumber as orderBookingNumber,
//            b.bookingNumber as billBookingNumber, b.billNumber, b.unitPrice, b.amount, b.createdAt as billCreatedAt
//     FROM Order o
//     LEFT JOIN BillInformation b ON o.id = b.orderId
//     WHERE o.orderNumber IN (${orderNumbers.join(', ')})
//   `;
//   console.log(rawOrders)
        res.status(200).send(orders);
    } catch (error) {
        console.log(error)
        res.status(404).send({ error: "Nothing Found !!!" });
    }
}
const deleteSingleProformaInvoice = async (req, res) => {
    const params = req.params.id
    const orderArrays = params.split("_")
    try {
        const result = await changeOrderAndDeletePi(params, orderArrays)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: "Proforma Invoice did not Deleted Correctly" })
    }
}
const deleteSingleBill = async (req, res) => {
    const params = req.params.id
    const orderArrays = params.split("_")
    // console.log(params)
    try {
        const result = await changeOrderAndDeleteBills(params, orderArrays)
        res.status(200).send(result)
    } catch (error) {

        res.status(400).send({ error: "Bill did not Deleted Correctly" })
    }
}
const changeBillNumber=async(req,res)=>{
    try{
        let orderNumbers = req.params.id
     
const billNumber=req.query.billNumber
// console.log(billNumber)
let individualOrder=[]
if(orderNumbers?.includes("_")){
    individualOrder = req.params.id.split("_")
}else{
    individualOrder=[orderNumbers]
}
const bills=await prisma.billInformation.updateMany({
    where:{
        containOrders:orderNumbers
    },
    data:{
        billNumber:billNumber
    }
})
const orders=await prisma.order.updateMany({
    where:{
        orderNumber: {
            in: individualOrder,
          },
    },
    data:{
        billNumber:billNumber
    }
})

// console.log(bills)
res.status(200).send(orders)
    }catch(error){
        // console.log(error)
        res.status(200).send(error)
    }
}



module.exports = { createProformaInvoice, changeBillNumber,deleteSingleBill, getSingleBill, getAllBill, getAllProformaInvoices, createBill, getSingleProformaInvoice, deleteSingleProformaInvoice }