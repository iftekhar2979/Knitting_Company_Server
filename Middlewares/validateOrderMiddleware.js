const { z } = require('zod');

const orderValidationSchema = z.object({
    orderNumber: z.string({ required_error: "Order number is required" }).trim().min(1, "Order number cannot be empty"),
    companyId: z.number({ required_error: "Company ID is required" }).int().positive("Company ID must be a positive integer"),
    fabricsName: z.string({ required_error: "Fabrics name is required" }).min(1, "Fabrics name cannot be empty"),
    buyerName: z.string({ required_error: "Buyer name is required" }).min(1, "Buyer name cannot be empty"),
    orderQuantity: z.number({ required_error: "Order quantity is required" }).positive("Order quantity must be a positive number"),
    restQuantity: z.number({ required_error: "Rest quantity is required" }).nonnegative("Rest quantity cannot be negative"),
    unit: z.string({ required_error: "Unit is required" }).min(1, "Unit cannot be empty"),
    companyName: z.string({ required_error: "Company name is required" }).min(1, "Company name cannot be empty"),
    buyerId: z.number().int().nullish(),
    fabricsId: z.number().int().positive().nullish(),
    season: z.string().nullish().or(z.literal('')),
    programNumber: z.string().nullish().or(z.literal('')),
    jobNumber: z.string().nullish().or(z.literal('')),
    bookingNumber: z.string().nullish().or(z.literal('')),
    sbNumber: z.string().nullish().or(z.literal('')),
    targetDate: z.any().optional().nullable(),
    status: z.string().nullish().or(z.literal('')),
});

const validateOrder = (req, res, next) => {
    try {
        orderValidationSchema.parse(req.body);
        next();
    } catch (error) {
        console.log(error);
        if (error instanceof z.ZodError) {
            const message = error.errors[0]?.message || "Validation failed";
            return res.status(400).send({ message });
        }
        return res.status(400).send({ message: "Invalid request data" });
    }
};

module.exports = { validateOrder };
