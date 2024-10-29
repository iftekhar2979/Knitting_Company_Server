/*
  Warnings:

  - You are about to drop the column `companyName` on the `order` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_companyName_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `companyName`,
    ADD COLUMN `companyId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
