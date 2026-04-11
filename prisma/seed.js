const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

async function main() {
    console.log("Seeding started...");

    // 1. Create Admin User
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            name: 'Admin User',
            email: 'admin@example.com',
            password: hashedPassword,
            isAdmin: true,
            role: "Admin"
        },
    });
    console.log("Admin user seeded.");

    // 2. Create Companies
    const companyNames = ['Apex Textiles', 'Blue Ribbon Garments', 'Cotton Craft Ltd', 'Dream Weave', 'Elite Knittings', 'Fashion Forward', 'Global Stitch', 'Heritage Fabrics', 'Imperial Threads', 'Jubilee Garments'];
    const companies = await Promise.all(companyNames.map(name => 
        prisma.company.upsert({
            where: { companyName: name },
            update: {},
            create: {
                companyName: name,
                location: 'Dhaka, Bangladesh',
                email: `${name.toLowerCase().replace(/ /g, '')}@example.com`,
                contact: '01700000000',
                shortForm: name.split(' ').map(w => w[0]).join('')
            }
        })
    ));
    console.log(`${companies.length} companies seeded.`);

    // 3. Create Buyers for each company
    const buyers = [];
    for (const company of companies) {
        const b1 = await prisma.buyer.create({
            data: {
                buyerName: `${company.companyName} Buyer A`,
                companyId: company.id
            }
        });
        const b2 = await prisma.buyer.create({
            data: {
                buyerName: `${company.companyName} Buyer B`,
                companyId: company.id
            }
        });
        buyers.push(b1, b2);
    }
    console.log(`${buyers.length} buyers seeded.`);

    // 4. Create Fabric Types (Products)
    const fabricNames = ['Single Jersey', 'Pique', 'Fleece', 'Rib', 'Interlock'];
    const fabricTypes = await Promise.all(fabricNames.map(name => 
        prisma.fabricsType.create({
            data: {
                fabricsName: name,
                description: `High quality ${name} fabric`
            }
        })
    ));
    console.log(`${fabricTypes.length} fabric types seeded.`);

    // 5. Create 1000 Orders
    const totalOrders = 1000;
    const orders = [];
    console.log(`Creating ${totalOrders} orders... (this may take a moment)`);

    // We'll create orders in batches of 100 to avoid memory/timeout issues
    const batchSize = 100;
    for (let i = 0; i < totalOrders; i += batchSize) {
        const batch = [];
        for (let j = 0; j < batchSize; j++) {
            const index = i + j;
            if (index >= totalOrders) break;

            const company = companies[Math.floor(Math.random() * companies.length)];
            const companyBuyers = buyers.filter(b => b.companyId === company.id);
            const buyer = companyBuyers[Math.floor(Math.random() * companyBuyers.length)];
            const fabric = fabricTypes[Math.floor(Math.random() * fabricTypes.length)];
            const quantity = Math.floor(Math.random() * 10000) + 1000;

            batch.push(prisma.order.create({
                data: {
                    orderNumber: `PO-${100000 + index}`,
                    companyId: company.id,
                    buyerId: buyer.id,
                    companyName: company.companyName,
                    fabricsName: fabric.fabricsName,
                    fabricsId: fabric.id,
                    buyerName: buyer.buyerName || "",
                    season: ['Summer 2024', 'Winter 2024', 'Spring 2025', 'Autumn 2024'][Math.floor(Math.random() * 4)],
                    orderQuantity: quantity,
                    deliveredQuantity: 0,
                    restQuantity: quantity,
                    unit: 'KG',
                    status: 'Pending',
                    targetDate: new Date(Date.now() + (Math.random() * 30 * 24 * 60 * 60 * 1000)), // Random date in next 30 days
                    details: {
                        create: {
                            style: `Style-${Math.floor(Math.random() * 1000)}`,
                            yarnCount: '30s',
                            colour: ['Red', 'Blue', 'Black', 'White', 'Navy'][Math.floor(Math.random() * 5)]
                        }
                    }
                }
            }));
        }
        const createdBatch = await Promise.all(batch);
        orders.push(...createdBatch);
        process.stdout.write(`.`); // Progress indicator
    }
    console.log("\n1000 orders seeded.");

    // 6. Seed Deliveries (for the first 300 orders)
    console.log("Creating 300 deliveries against orders...");
    for (let i = 0; i < 300; i++) {
        const order = orders[i];
        const delQuantity = Math.floor(order.orderQuantity * 0.2); // 20% of order quantity

        await prisma.$transaction(async (tx) => {
            // Create delivery detail
            await tx.deliveryDetails.create({
                data: {
                    orderId: order.id,
                    deliveredQuantity: delQuantity,
                    deliveredBy: 'Internal Transport',
                    vechileNumber: `DHA-METRO-${1000 + i}`,
                    colour: 'Standard'
                }
            });

            // Update order
            await tx.order.update({
                where: { id: order.id },
                data: {
                    deliveredQuantity: { increment: delQuantity },
                    restQuantity: { decrement: delQuantity },
                    status: 'Partially Delivered'
                }
            });
        });
        if (i % 50 === 0) process.stdout.write(`.`);
    }
    console.log("\n300 deliveries seeded.");
    console.log("Seeding completed successfully.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
