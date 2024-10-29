/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `BillInformation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `billinformation` MODIFY `billNumber` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `BillInformation_orderId_key` ON `BillInformation`(`orderId`);
