/*
  Warnings:

  - Added the required column `orderId` to the `BillInformation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `billinformation` ADD COLUMN `orderId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `BillInformation` ADD CONSTRAINT `BillInformation_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
