
const { PrismaClient } = require('@prisma/client');
const { requestedId } = require('../../utils/requestFunctions');
const prisma = new PrismaClient()



function transfer(from, amount, deliveredBy) {
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
            },
        });
        const deliveryDetail = await tx.deliveryDetails.create({
            data: {
                orderId: from,
                deliveredBy: deliveredBy, // Consider making this dynamic if needed
                deliveredQuantity: amount,
            },
        });

        return updatedOrder;
    })
}

function transferFromDelivery(from) {
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
            },
        });
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
                order: true
            }
        })
        res.status(200).send(findDeliveries)
    } catch (error) {
        res.status(400).send(error)

    }
}
const getSingleDelivery = async (req, res) => {
    try {
        const findSingleDelivery = await prisma.deliveryDetails.findFirst({
            where: {
                id: requestedId(req)
            },
            include: {
                order: true
            }
        })
        res.status(200).send(findSingleDelivery)
    } catch (error) {
        res.status(400).send(error)

    }

}
const GetAllDeliveryforAnSingleOrder = async (req, res) => {

    try {
        const findDeliveryforSingleOrder = await prisma.deliveryDetails.findMany({
            where: {
                orderId: requestedId(req)
            },
            include: {
                order: true
            }
        })
        res.status(200).send(findDeliveryforSingleOrder)
    } catch (error) {
        res.status(400).send(error)

    }
}
const createDelivery = async (req, res) => {
    const { from, amount, deliveredBy } = req.body
    try {
        const result = await transfer(from, amount, deliveredBy)
        res.status(200).send(result)
        // return res.status(200).send(transfer(from, amount, deliveredBy))
    } catch (error) {
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



module.exports = { createDelivery, deleteDelivery, editDelivery, getAllDelivery, getSingleDelivery, GetAllDeliveryforAnSingleOrder }