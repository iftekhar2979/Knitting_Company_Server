/*
  Warnings:

  - Made the column `orderId` on table `yarndetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `companyId` on table `yarndetails` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `yarndetails` DROP FOREIGN KEY `YarnDetails_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `yarndetails` DROP FOREIGN KEY `YarnDetails_orderId_fkey`;

-- AlterTable
ALTER TABLE `yarndetails` MODIFY `orderId` INTEGER NOT NULL,
    MODIFY `companyId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `YarnDetails` ADD CONSTRAINT `YarnDetails_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `YarnDetails` ADD CONSTRAINT `YarnDetails_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
