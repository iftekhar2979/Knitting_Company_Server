-- AlterTable
ALTER TABLE `profile` ADD COLUMN `description` VARCHAR(255) NULL,
    ADD COLUMN `jobTitle` VARCHAR(255) NULL,
    MODIFY `bio` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isBlock` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `role` VARCHAR(255) NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(6) NULL,
    MODIFY `email` VARCHAR(255) NULL;