/*
  Warnings:

  - Added the required column `totalPIQuantity` to the `ProformaInvoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `proformaInvoiceId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `proformainvoice` ADD COLUMN `totalPIQuantity` INTEGER NOT NULL;
