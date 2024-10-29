-- CreateTable
CREATE TABLE `ProformaInvoice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `style` VARCHAR(191) NULL,
    `fabricsName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `finishDia` VARCHAR(191) NULL,
    `unitPrice` VARCHAR(191) NULL,
    `totalQuantity` VARCHAR(191) NULL,
    `amount` VARCHAR(191) NULL,
    `companyId` INTEGER NOT NULL,
    `buyerId` INTEGER NULL,
    `containOrders` VARCHAR(191) NOT NULL,
    `piName` VARCHAR(191) NOT NULL,
    `piNumber` VARCHAR(191) NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProformaInvoice` ADD CONSTRAINT `ProformaInvoice_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `Buyer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProformaInvoice` ADD CONSTRAINT `ProformaInvoice_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
