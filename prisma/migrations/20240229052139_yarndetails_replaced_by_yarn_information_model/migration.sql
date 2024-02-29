/*
  Warnings:

  - You are about to drop the `yarndetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `yarndetails` DROP FOREIGN KEY `YarnDetails_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `yarndetails` DROP FOREIGN KEY `YarnDetails_orderId_fkey`;

-- DropTable
DROP TABLE `yarndetails`;

-- CreateTable
CREATE TABLE `yarnInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyId` INTEGER NOT NULL,
    `bookingQuantity` DOUBLE NOT NULL,
    `receivedQuantity` DOUBLE NOT NULL,
    `restQuantity` DOUBLE NOT NULL,
    `yarn` VARCHAR(191) NULL,
    `orderId` INTEGER NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `yarnInformation` ADD CONSTRAINT `yarnInformation_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `yarnInformation` ADD CONSTRAINT `yarnInformation_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
