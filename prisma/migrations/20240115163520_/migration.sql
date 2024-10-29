/*
  Warnings:

  - You are about to drop the column `companyId` on the `order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[companyName]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[companyName]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_companyId_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `companyId`,
    ADD COLUMN `companyName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Company_companyName_key` ON `Company`(`companyName`);

-- CreateIndex
CREATE UNIQUE INDEX `Order_companyName_key` ON `Order`(`companyName`);

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_companyName_fkey` FOREIGN KEY (`companyName`) REFERENCES `Company`(`companyName`) ON DELETE CASCADE ON UPDATE CASCADE;
