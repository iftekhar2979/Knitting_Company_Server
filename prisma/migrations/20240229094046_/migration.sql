/*
  Warnings:

  - You are about to drop the column `receivedQuantity` on the `yarninformation` table. All the data in the column will be lost.
  - You are about to drop the `book_stores` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `yarninformation` DROP COLUMN `receivedQuantity`,
    ADD COLUMN `updatedAt` DATETIME(3) NULL;

-- DropTable
DROP TABLE `book_stores`;

-- CreateTable
CREATE TABLE `YarnInformationWithDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `yarnInfoID` INTEGER NOT NULL,
    `receivedQuantity` DOUBLE NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `YarnInformationWithDetails` ADD CONSTRAINT `YarnInformationWithDetails_yarnInfoID_fkey` FOREIGN KEY (`yarnInfoID`) REFERENCES `yarnInformation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
