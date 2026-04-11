-- CreateTable
CREATE TABLE `PasswordOTP` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `otp` VARCHAR(191) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `PasswordOTP_email_idx` ON `PasswordOTP`(`email`);