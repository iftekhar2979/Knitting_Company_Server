/*
  Warnings:

  - You are about to drop the column `boNumber` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceNumber` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `pmNumber` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `poNumber` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `totalPIAmount` on the `proformainvoice` table. All the data in the column will be lost.
  - You are about to drop the column `totalPIQuantity` on the `proformainvoice` table. All the data in the column will be lost.
  - You are about to drop the column `bookingQuantity` on the `yarninformation` table. All the data in the column will be lost.
  - You are about to drop the column `yarn` on the `yarninformation` table. All the data in the column will be lost.
  - You are about to drop the column `receivedQuantity` on the `yarninformationwithdetails` table. All the data in the column will be lost.
  - Added the required column `unit` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `billingWay` to the `ProformaInvoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceAmount` to the `ProformaInvoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceQuantity` to the `ProformaInvoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `season` to the `ProformaInvoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ReceivingQuantity` to the `yarnInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionOfYarn` to the `yarnInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yarnType` to the `yarnInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnQuantity` to the `YarnInformationWithDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `YarnInformationWithDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `deliverydetails` ADD COLUMN `GrayDeliveredQuantity` DOUBLE NULL,
    ADD COLUMN `fabricDeliveredQuantity` DOUBLE NULL,
    ADD COLUMN `roleQuantity` INTEGER NULL,
    ADD COLUMN `vechileNumber` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `boNumber`,
    DROP COLUMN `invoiceNumber`,
    DROP COLUMN `pmNumber`,
    DROP COLUMN `poNumber`,
    ADD COLUMN `billNumber` VARCHAR(191) NULL,
    ADD COLUMN `bookingNumber` VARCHAR(191) NULL,
    ADD COLUMN `deliveredQuantity` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `isBillCreated` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `jobNumber` VARCHAR(191) NULL,
    ADD COLUMN `programNumber` VARCHAR(191) NULL,
    ADD COLUMN `sbNumber` VARCHAR(191) NULL,
    ADD COLUMN `unit` VARCHAR(191) NOT NULL,
    ADD COLUMN `unitPrice` DOUBLE NULL;

-- AlterTable
ALTER TABLE `proformainvoice` DROP COLUMN `totalPIAmount`,
    DROP COLUMN `totalPIQuantity`,
    ADD COLUMN `billingWay` VARCHAR(191) NOT NULL,
    ADD COLUMN `invoiceAmount` DOUBLE NOT NULL,
    ADD COLUMN `invoiceQuantity` DOUBLE NOT NULL,
    ADD COLUMN `season` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `yarninformation` DROP COLUMN `bookingQuantity`,
    DROP COLUMN `yarn`,
    ADD COLUMN `ReceivingQuantity` DOUBLE NOT NULL,
    ADD COLUMN `descriptionOfYarn` LONGTEXT NOT NULL,
    ADD COLUMN `yarnType` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `yarninformationwithdetails` DROP COLUMN `receivedQuantity`,
    ADD COLUMN `deliveredBy` VARCHAR(191) NULL,
    ADD COLUMN `returnQuantity` DOUBLE NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL,
    ADD COLUMN `vechileNumber` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `BillInformation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` INTEGER NOT NULL,
    `billNumber` VARCHAR(191) NOT NULL,
    `unitPrice` DOUBLE NOT NULL,
    `amount` DOUBLE NOT NULL,
    `invoiceAmount` DOUBLE NOT NULL,
    `invoiceQuantity` DOUBLE NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(3) NULL,
    `containOrders` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NOT NULL,
    `buyerId` INTEGER NULL,
    `fabricsId` INTEGER NULL,

    UNIQUE INDEX `BillInformation_orderId_key`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeliveryMen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Month` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `route` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserNotification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `notificationId` INTEGER NOT NULL,
    `isViewed` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `UserNotification_userId_notificationId_key`(`userId`, `notificationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BillInformation` ADD CONSTRAINT `BillInformation_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillInformation` ADD CONSTRAINT `BillInformation_fabricsId_fkey` FOREIGN KEY (`fabricsId`) REFERENCES `FabricsType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillInformation` ADD CONSTRAINT `BillInformation_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `Buyer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BillInformation` ADD CONSTRAINT `BillInformation_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserNotification` ADD CONSTRAINT `UserNotification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserNotification` ADD CONSTRAINT `UserNotification_notificationId_fkey` FOREIGN KEY (`notificationId`) REFERENCES `Notification`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
