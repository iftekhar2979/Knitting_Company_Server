-- DropForeignKey
ALTER TABLE `yarndetails` DROP FOREIGN KEY `YarnDetails_orderId_fkey`;

-- AddForeignKey
ALTER TABLE `YarnDetails` ADD CONSTRAINT `YarnDetails_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
