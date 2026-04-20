const { z } = require('zod');

const orderValidationSchema = z.object({
    orderNumber: z.string({ required_error: "Order number is required" }).min(1, "Order number cannot be empty"),
    companyId: z.number({ required_error: "Company ID is required" }).int().positive("Company ID must be a positive integer"),
    fabricsName: z.string({ required_error: "Fabrics name is required" }).min(1, "Fabrics name cannot be empty"),
    buyerName: z.string({ required_error: "Buyer name is required" }).min(1, "Buyer name cannot be empty"),
    orderQuantity: z.number({ required_error: "Order quantity is required" }).positive("Order quantity must be a positive number"),
    restQuantity: z.number({ required_error: "Rest quantity is required" }).nonnegative("Rest quantity cannot be negative"),
    unit: z.string({ required_error: "Unit is required" }).min(1, "Unit cannot be empty"),
    companyName: z.string({ required_error: "Company name is required" }).min(1, "Company name cannot be empty"),
    buyerId: z.number({ required_error: "Buyer ID is required" }).int().positive("Buyer ID must be a positive integer"),
    fabricsId: z.number({ required_error: "Fabrics ID is required" }).int().positive("Fabrics ID must be a positive integer"),
    season: z.string({ required_error: "Season is required" }).min(1, "Season cannot be empty"),
    programNumber: z.string({ required_error: "Program number is required" }).min(1, "Program number cannot be empty"),
    jobNumber: z.string({ required_error: "Job number is required" }).min(1, "Job number cannot be empty"),
    bookingNumber: z.string({ required_error: "Booking number is required" }).min(1, "Booking number cannot be empty"),
    sbNumber: z.string({ required_error: "SB number is required" }).min(1, "SB number cannot be empty"),
    targetDate: z.string({ required_error: "Target date is required" }).min(1, "Target date cannot be empty"),
    status: z.string({ required_error: "Status is required" }).min(1, "Status cannot be empty"),
    userId: z.number({ required_error: "User ID is required" }).int().positive("User ID must be a positive integer")
});

const validateOrder = (req, res, next) => {
    try {
        orderValidationSchema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            const message = error.errors[0]?.message || "Validation failed";
            return res.status(400).send({ message });
        }
        return res.status(400).send({ message: "Invalid request data" });
    }
};

module.exports = { validateOrder };
