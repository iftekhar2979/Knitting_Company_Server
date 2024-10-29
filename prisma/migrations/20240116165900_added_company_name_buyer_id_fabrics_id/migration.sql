-- AlterTable
ALTER TABLE `order` ADD COLUMN `buyerId` INTEGER NULL,
    ADD COLUMN `companyName` VARCHAR(191) NULL,
    ADD COLUMN `fabricsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_buyerId_fkey` FOREIGN KEY (`buyerId`) REFERENCES `Buyer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_fabricsId_fkey` FOREIGN KEY (`fabricsId`) REFERENCES `FabricsType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
