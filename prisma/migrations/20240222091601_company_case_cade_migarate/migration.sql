-- DropForeignKey
ALTER TABLE `buyer` DROP FOREIGN KEY `Buyer_companyId_fkey`;

-- AddForeignKey
ALTER TABLE `Buyer` ADD CONSTRAINT `Buyer_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
