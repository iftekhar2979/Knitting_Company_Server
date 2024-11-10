
const { PrismaClient } = require('@prisma/client');
const { requestedId } = require('../../utils/requestFunctions');
const prisma = new PrismaClient()



function transfer(from, amount, deliveredBy,...rest) {
    console.log(rest[1],'from t4ransfer')
    try{
    let status=""
    return prisma.$transaction(async (tx) => {

        // 1. Fetch the current order to check its quantity before updating
        const currentOrder = await tx.order.findUnique({
            where: {
                id: from,
            },
        });

        if (!currentOrder) {
            throw new Error(`Order with id ${from} does not exist`);
        }
        // if (currentOrder?.restQuantity === amount) {
        //    status="Fullfilled"
        // }
        // if (currentOrder?.restQuantity > amount) {
        //     status="Pending"
        //  }
 

        if (currentOrder.restQuantity < amount) {
            throw new Error(`Order ${from} does not have enough quantity to transfer. Required: ${amount}, available: ${currentOrder.orderQuantity}`);
        }

        // 2. Decrement amount from the sender (order).
        const updatedOrder = await tx.order.update({
            where: {
                id: from,
            },
            include: {
                deliveryDetails: true
            },
            data: {
                restQuantity: {
                    decrement: amount,
                },
                deliveredQuantity:{
                    increment:amount
                },
            },
        });
        const deliveryDetail = await tx.deliveryDetails.create({
            data: {
                orderId: from,
                deliveredBy: deliveredBy, // Consider making this dynamic if needed
                deliveredQuantity: amount,
                ...rest[1]
            },
        });

        return updatedOrder;
    })
}catch(error){
    console.log(error)
// return res.status(400).send({msg:"Delivery not created "})
}
}

function transferFromDelivery(from) {
    let status="Pending"
    return prisma.$transaction(async (tx) => {
        const currentDelivery = await tx.deliveryDetails.findUnique({
            where: {
                id: from,
            },
        });
        if (!currentDelivery) {
            throw new Error(`delivery with id ${from} does not exist`);
        }


        // 2. Increment amount of (order).
        const updatedOrder = await tx.order.update({
            where: {
                id: currentDelivery.orderId,
            }, include: {
                deliveryDetails: true
            },
            data: {
                restQuantity: {
                    increment: currentDelivery.deliveredQuantity,
                },
                deliveredQuantity:{
                    decrement:currentDelivery.deliveredQuantity
                },
                
            },
        });
        console.log('update Order',updatedOrder)
        // 2. delete the delivery
        const deliveryDetail = await tx.deliveryDetails.delete({
            where: {
                id: from
            }
        });
        return updatedOrder
    })
}

function transferEditDelivery(from, amount) {
    return prisma.$transaction(async (tx) => {
        const currentDelivery = await tx.deliveryDetails.findUnique({
            where: {
                id: from,
            },
        });
        if (!currentDelivery) {
            throw new Error(`delivery with id ${from} does not exist`);
        }
        const { deliveredQuantity, orderId } = currentDelivery

        if (amount > deliveredQuantity) {

            const updatedOrder = await tx.order.update({
                where: {
                    id: orderId,
                }, include: {
                    deliveryDetails: true
                },
                data: {
                    restQuantity: {
                        decrement: amount - deliveredQuantity,
                    },
                },
            });

            const deliveryDetail = await tx.deliveryDetails.update({
                where: {
                    id: from
                },
                data: {
                    deliveredQuantity: {
                        increment: amount - deliveredQuantity
                    }
                }
            });
            return updatedOrder

        } else {
            const updatedOrder = await tx.order.update({
                where: {
                    id: currentDelivery.orderId,
                }, include: {
                    deliveryDetails: true
                },
                data: {
                    restQuantity: {
                        increment: amount,
                    },
                }
            })
            const deliveryDetail = await tx.deliveryDetails.update({
                where: {
                    id: from
                },
                data: {
                    deliveredQuantity: {
                        decrement: amount
                    }
                }
            });
            return updatedOrder
        }
    })
}

const getAllDelivery = async (req, res) => {
    try {
        const findDeliveries = await prisma.deliveryDetails.findMany({
            include: {
                order: {
                    select:{
                        unit:true,
                        bookingNumber:true,
                        sbNumber:true,   
                        fabricsName:true,
                        orderNumber:true,
                        buyerName:true,
                        programNumber:true,
                        jobNumber:true,
                        season:true,
                        company:{
                            select:{
                                companyName:true,
                                location:true
                            }
                        },
                        details:true
                    },
                    
                }
               
            },
            orderBy: {
                id: 'desc'  // Change 'desc' to 'asc' for ascending order
            }
        })
        res.status(200).send(findDeliveries)
    } catch (error) {
        res.status(400).send(error)

    }
}
const getSingleDelivery = async (req, res) => {
    console.log(req.params.id)
    try {
        const findSingleDelivery = await prisma.deliveryDetails.findFirst({
            where: {
                id: requestedId(req)
            },
            include: {
                order: {
                    select:{
                        jobNumber:true,
                        sbNumber:true,   
                        fabricsName:true,
                        orderNumber:true,
                        buyerName:true,
                        programNumber:true,
                        bookingNumber:true,
                        unit:true,
                        season:true,
                        company:{
                            select:{
                                companyName:true,
                                location:true
                            }
                        },
                        details:true
                    },
                    
                }
               
            }
        })
        // console.log('find',findSingleDelivery)
        res.status(200).send(findSingleDelivery)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)

    }
}
const GetAllDeliveryforAnSingleOrder = async (req, res) => {
    try {
        const findDeliveryforSingleOrder = await prisma.deliveryDetails.findMany({
            where: {
                orderId: requestedId(req)
            },
            orderBy: {
                createdAt: 'desc'  // Change 'desc' to 'asc' for ascending order
            }
           
        })
        res.status(200).send(findDeliveryforSingleOrder)
    } catch (error) {
        res.status(400).send(error)

    }
}
const createDelivery = async (req, res) => {
    const { from, amount, deliveredBy,status,...rest } = req.body
    try {
        const result = await transfer(from, amount, deliveredBy,status,rest)
        res.status(200).send(result)
        // return res.status(200).send(transfer(from, amount, deliveredBy))
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

const deleteDelivery = async (req, res) => {
    let from = parseFloat(req.query.from)
    try {
        const result = await transferFromDelivery(from)
        res.status(200).send({ result, isDeleted: true })
    } catch (error) {
        return res.status(400).json({
            message: error.message, isDeleted: false
        })
    }
}
const editDelivery = async (req, res) => {
    let from = parseFloat(req.query.from)
    let amount = parseFloat(req.query.amount)
    try {
        const result = await transferEditDelivery(from, amount)
        res.status(200).send({ isUpdated: true, result })
    } catch (error) {
        return res.status(400).json({
            message: error.message, isUpdated: false
        })
    }
}

const createBill=async(req,res)=>{
    try{
       const id=parseFloat(req.body.chalanId)
    const unitPrice=req.body.unitPrice

    if(!unitPrice){
        throw new Error("Must need unit price to create bill!")
    }
    console.log(id,unitPrice)
    
    const chalan=await prisma.deliveryDetails.update({
        where:{
            id:id
        },
    data:{
        unitPrice:unitPrice
    }
})
if(!chalan){
    throw new Error("Bill Not Created Successfully!")
}
return res.status(200).send({status:200,message:'Bill Successfully created!'})
    }catch(error){
        res.status(400).send({error:error.message})
    }
}

const getBill=async(req,res)=>{
    try{
const id=parseFloat(req.params.id)
if(!id){
    throw new Error("Bill id not provided!")
}
const chalan=await prisma.deliveryDetails.findUnique({
    where:{
        id:id
    },
    select:{
        id:true,
        deliveredQuantity:true,
        unitPrice:true,
        createdAt:true,
        order:{
            select:{
                season:true,
                fabricsName:true,
                buyer:true,
                company:true,
                programNumber:true,
                jobNumber:true,
                sbNumber:true,
                bookingNumber:true,
            }
        }
    }
})
res.status(200).send(chalan)
    }catch(error){
        console.log(error)
        res.status(200).send({error:error.message})
    }
}

const getAllDeliveryByChalan=async(req,res)=>{
    try{
        const bills=await prisma.deliveryDetails.findMany({
            where:{
                unitPrice: {
                    not: null, // This ensures unitPrice is not null
                }
            },
            select:{
                id:true,
                deliveredQuantity:true,
                unitPrice:true,
                createdAt:true,
                billNumber:true,
                order:{
                    select:{
                        season:true,
                        fabricsName:true,
                        buyer:true,
                        company:true,
                        programNumber:true,
                        jobNumber:true,
                        sbNumber:true,
                        bookingNumber:true,
                    }
                }
            }
        })
        res.status(200).send(bills)
    }catch(error){
        console.log(error)
        res.status(200).send(error)
    }
}
const changeBillNumber=async(req,res)=>{
    try{
const id=parseFloat(req.params.id)
const billNumber=req.query.billNumber
console.log(billNumber)
const bills=await prisma.deliveryDetails.update({
    where:{
        id:id,
        unitPrice: {
            not: null, // This ensures unitPrice is not null
        }
    },
    data:{
        billNumber:billNumber
    }
})
res.status(200).send(bills)
    }catch(error){
        console.log(error)
        res.status(200).send(error)
    }
}
module.exports = { createDelivery,getBill,createBill,changeBillNumber,getAllDeliveryByChalan, deleteDelivery, editDelivery, getAllDelivery, getSingleDelivery, GetAllDeliveryforAnSingleOrder }