/*
  Warnings:

  - You are about to alter the column `unitPrice` on the `proformainvoice` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `amount` on the `proformainvoice` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `totalPIAmount` on the `proformainvoice` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `totalPIQuantity` on the `proformainvoice` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `proformainvoice` MODIFY `unitPrice` DOUBLE NOT NULL,
    MODIFY `amount` DOUBLE NOT NULL,
    MODIFY `totalPIAmount` DOUBLE NOT NULL,
    MODIFY `totalPIQuantity` DOUBLE NOT NULL;
