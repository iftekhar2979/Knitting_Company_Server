-- CreateTable
CREATE TABLE `FabricsType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fabricsName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderNumber` VARCHAR(255) NOT NULL,
    `season` VARCHAR(191) NULL,
    `pmNumber` VARCHAR(191) NULL,
    `poNumber` VARCHAR(191) NULL,
    `boNumber` VARCHAR(191) NULL,
    `invoiceNumber` VARCHAR(191) NULL,
    `orderedDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `targetDate` DATETIME(3) NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `orderQuantity` DOUBLE NOT NULL,
    `restQuantity` DOUBLE NOT NULL,
    `updatedAt` DATETIME(3) NULL,
    `status` VARCHAR(191) NULL,
    `userId` INTEGER NULL,
    `companyId` INTEGER NOT NULL,

    UNIQUE INDEX `Order_orderNumber_key`(`orderNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NULL,
    `style` VARCHAR(191) NULL,
    `yarnCount` VARCHAR(191) NULL,
    `yarnBrand` VARCHAR(191) NULL,
    `yarnLot` VARCHAR(191) NULL,
    `lycraCount` VARCHAR(191) NULL,
    `lycraBrand` VARCHAR(191) NULL,
    `lycraLot` VARCHAR(191) NULL,
    `polyStarCount` VARCHAR(191) NULL,
    `polyStarBrand` VARCHAR(191) NULL,
    `polyStarLot` VARCHAR(191) NULL,
    `mc_DIA` VARCHAR(191) NULL,
    `e_DIA` VARCHAR(191) NULL,
    `f_GSM` VARCHAR(191) NULL,
    `sl` VARCHAR(191) NULL,
    `colour` VARCHAR(191) NULL,
    `deliveredQuantity` DOUBLE NOT NULL,
    `restQuantity` DOUBLE NOT NULL,

    UNIQUE INDEX `OrderDetails_orderId_key`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `YarnDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookingQuantity` DOUBLE NOT NULL,
    `receivedQuantity` DOUBLE NOT NULL,
    `restQuantity` DOUBLE NOT NULL,
    `orderId` INTEGER NULL,

    UNIQUE INDEX `YarnDetails_orderId_key`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeliveryDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NOT NULL,
    `deliveredQuantity` DOUBLE NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `deliveredBy` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderDetails` ADD CONSTRAINT `OrderDetails_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `YarnDetails` ADD CONSTRAINT `YarnDetails_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeliveryDetails` ADD CONSTRAINT `DeliveryDetails_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
