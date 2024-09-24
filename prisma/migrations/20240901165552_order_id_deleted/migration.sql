/*
  Warnings:

  - You are about to drop the column `orderId` on the `billinformation` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `BillInformation_orderId_key` ON `billinformation`;

-- AlterTable
ALTER TABLE `billinformation` DROP COLUMN `orderId`;
