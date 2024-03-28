-- AlterTable
ALTER TABLE `proformainvoice` ADD COLUMN `fabricsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ProformaInvoice` ADD CONSTRAINT `ProformaInvoice_fabricsId_fkey` FOREIGN KEY (`fabricsId`) REFERENCES `FabricsType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
