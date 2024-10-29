/*
  Warnings:

  - You are about to drop the column `orderId` on the `billinformation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `billinformation` DROP FOREIGN KEY `BillInformation_orderId_fkey`;

-- AlterTable
ALTER TABLE `billinformation` DROP COLUMN `orderId`;
