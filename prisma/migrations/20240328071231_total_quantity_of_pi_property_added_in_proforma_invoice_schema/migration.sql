/*
  Warnings:

  - Added the required column `totalPIAmount` to the `ProformaInvoice` table without a default value. This is not possible if the table is not empty.
  - Made the column `unitPrice` on table `proformainvoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `totalQuantity` on table `proformainvoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `amount` on table `proformainvoice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `proformainvoice` ADD COLUMN `totalPIAmount` INTEGER NOT NULL,
    MODIFY `unitPrice` VARCHAR(191) NOT NULL,
    MODIFY `totalQuantity` VARCHAR(191) NOT NULL,
    MODIFY `amount` VARCHAR(191) NOT NULL;
