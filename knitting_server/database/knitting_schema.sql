SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `profiles`;
DROP TABLE IF EXISTS `posts`;
DROP TABLE IF EXISTS `password_otps`;
DROP TABLE IF EXISTS `user_notifications`;
DROP TABLE IF EXISTS `notifications`;
DROP TABLE IF EXISTS `months`;
DROP TABLE IF EXISTS `delivery_men`;
DROP TABLE IF EXISTS `bill_informations`;
DROP TABLE IF EXISTS `delivery_details`;
DROP TABLE IF EXISTS `yarn_information_with_details`;
DROP TABLE IF EXISTS `yarn_informations`;
DROP TABLE IF EXISTS `order_details`;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `proforma_invoices`;
DROP TABLE IF EXISTS `fabrics_types`;
DROP TABLE IF EXISTS `buyers`;
DROP TABLE IF EXISTS `companies`;
DROP TABLE IF EXISTS `failed_jobs`;
DROP TABLE IF EXISTS `job_batches`;
DROP TABLE IF EXISTS `jobs`;
DROP TABLE IF EXISTS `cache_locks`;
DROP TABLE IF EXISTS `cache`;
DROP TABLE IF EXISTS `sessions`;
DROP TABLE IF EXISTS `password_reset_tokens`;
DROP TABLE IF EXISTS `users`;

SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE `users` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `email_verified_at` TIMESTAMP NULL DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  `isAdmin` TINYINT(1) NOT NULL DEFAULT 0,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  `isBlock` TINYINT(1) NOT NULL DEFAULT 0,
  `remember_token` VARCHAR(100) NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `password_reset_tokens` (
  `email` VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `sessions` (
  `id` VARCHAR(255) NOT NULL,
  `user_id` BIGINT UNSIGNED NULL DEFAULT NULL,
  `ip_address` VARCHAR(45) NULL DEFAULT NULL,
  `user_agent` TEXT NULL,
  `payload` LONGTEXT NOT NULL,
  `last_activity` INT NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `cache` (
  `key` VARCHAR(255) NOT NULL,
  `value` MEDIUMTEXT NOT NULL,
  `expiration` BIGINT NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `cache_locks` (
  `key` VARCHAR(255) NOT NULL,
  `owner` VARCHAR(255) NOT NULL,
  `expiration` BIGINT NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_locks_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `jobs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` VARCHAR(255) NOT NULL,
  `payload` LONGTEXT NOT NULL,
  `attempts` SMALLINT UNSIGNED NOT NULL,
  `reserved_at` INT UNSIGNED NULL DEFAULT NULL,
  `available_at` INT UNSIGNED NOT NULL,
  `created_at` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `job_batches` (
  `id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `total_jobs` INT NOT NULL,
  `pending_jobs` INT NOT NULL,
  `failed_jobs` INT NOT NULL,
  `failed_job_ids` LONGTEXT NOT NULL,
  `options` MEDIUMTEXT NULL,
  `cancelled_at` INT NULL DEFAULT NULL,
  `created_at` INT NOT NULL,
  `finished_at` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `failed_jobs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` VARCHAR(255) NOT NULL,
  `connection` TEXT NOT NULL,
  `queue` TEXT NOT NULL,
  `payload` LONGTEXT NOT NULL,
  `exception` LONGTEXT NOT NULL,
  `failed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `companies` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `companyName` VARCHAR(255) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `contact` VARCHAR(255) NULL DEFAULT NULL,
  `shortForm` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `companies_companyname_unique` (`companyName`),
  UNIQUE KEY `companies_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `buyers` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `buyerName` TEXT NULL,
  `companyId` BIGINT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `buyers_companyid_foreign` (`companyId`),
  CONSTRAINT `buyers_companyid_foreign` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `fabrics_types` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fabricsName` TEXT NOT NULL,
  `description` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `proforma_invoices` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `style` TEXT NULL,
  `fabricsName` TEXT NOT NULL,
  `fabricsId` BIGINT UNSIGNED NULL DEFAULT NULL,
  `description` TEXT NULL,
  `finishDia` TEXT NULL,
  `unitPrice` DOUBLE NOT NULL,
  `totalQuantity` INT NULL DEFAULT NULL,
  `amount` DOUBLE NOT NULL,
  `companyId` BIGINT UNSIGNED NOT NULL,
  `buyerId` BIGINT UNSIGNED NULL DEFAULT NULL,
  `containOrders` TEXT NOT NULL,
  `piName` TEXT NOT NULL,
  `piNumber` TEXT NOT NULL,
  `invoiceAmount` DOUBLE NOT NULL,
  `invoiceQuantity` DOUBLE NOT NULL,
  `season` TEXT NOT NULL,
  `billingWay` TEXT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `proforma_invoices_fabricsid_foreign` (`fabricsId`),
  KEY `proforma_invoices_companyid_foreign` (`companyId`),
  KEY `proforma_invoices_buyerid_foreign` (`buyerId`),
  CONSTRAINT `proforma_invoices_fabricsid_foreign` FOREIGN KEY (`fabricsId`) REFERENCES `fabrics_types` (`id`) ON DELETE SET NULL,
  CONSTRAINT `proforma_invoices_companyid_foreign` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `proforma_invoices_buyerid_foreign` FOREIGN KEY (`buyerId`) REFERENCES `buyers` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `orders` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `orderNumber` VARCHAR(255) NOT NULL,
  `companyId` BIGINT UNSIGNED NOT NULL,
  `buyerId` BIGINT UNSIGNED NULL DEFAULT NULL,
  `companyName` TEXT NULL,
  `fabricsName` TEXT NOT NULL,
  `fabricsId` BIGINT UNSIGNED NULL DEFAULT NULL,
  `buyerName` TEXT NOT NULL,
  `season` TEXT NULL,
  `programNumber` TEXT NULL,
  `jobNumber` TEXT NULL,
  `bookingNumber` TEXT NULL,
  `sbNumber` TEXT NULL,
  `orderedDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `targetDate` TIMESTAMP NULL DEFAULT NULL,
  `orderQuantity` DOUBLE NOT NULL,
  `deliveredQuantity` DOUBLE NOT NULL DEFAULT 0,
  `restQuantity` DOUBLE NOT NULL,
  `unit` TEXT NOT NULL,
  `status` TEXT NULL,
  `isBillCreated` TINYINT(1) NOT NULL DEFAULT 0,
  `isProformaInvoiceCreated` TINYINT(1) NOT NULL DEFAULT 0,
  `userId` BIGINT UNSIGNED NULL DEFAULT NULL,
  `billNumber` TEXT NULL,
  `unitPrice` DOUBLE NULL DEFAULT NULL,
  `proformaInvoiceId` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `orders_ordernumber_unique` (`orderNumber`),
  KEY `orders_companyid_foreign` (`companyId`),
  KEY `orders_buyerid_foreign` (`buyerId`),
  KEY `orders_fabricsid_foreign` (`fabricsId`),
  KEY `orders_userid_foreign` (`userId`),
  CONSTRAINT `orders_companyid_foreign` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `orders_buyerid_foreign` FOREIGN KEY (`buyerId`) REFERENCES `buyers` (`id`) ON DELETE SET NULL,
  CONSTRAINT `orders_fabricsid_foreign` FOREIGN KEY (`fabricsId`) REFERENCES `fabrics_types` (`id`) ON DELETE SET NULL,
  CONSTRAINT `orders_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `order_details` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `orderId` BIGINT UNSIGNED NOT NULL,
  `style` TEXT NULL,
  `yarnCount` TEXT NULL,
  `yarnBrand` TEXT NULL,
  `yarnLot` TEXT NULL,
  `lycraCount` TEXT NULL,
  `lycraBrand` TEXT NULL,
  `lycraLot` TEXT NULL,
  `polyStarCount` TEXT NULL,
  `polyStarBrand` TEXT NULL,
  `polyStarLot` TEXT NULL,
  `mc_DIA` TEXT NULL,
  `e_DIA` TEXT NULL,
  `f_GSM` TEXT NULL,
  `sl` TEXT NULL,
  `colour` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_details_orderid_unique` (`orderId`),
  CONSTRAINT `order_details_orderid_foreign` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `yarn_informations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `companyId` BIGINT UNSIGNED NOT NULL,
  `ReceivingQuantity` DOUBLE NOT NULL,
  `restQuantity` DOUBLE NOT NULL,
  `yarnType` TEXT NOT NULL,
  `descriptionOfYarn` LONGTEXT NOT NULL,
  `orderId` BIGINT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `yarn_informations_companyid_foreign` (`companyId`),
  KEY `yarn_informations_orderid_foreign` (`orderId`),
  CONSTRAINT `yarn_informations_companyid_foreign` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `yarn_informations_orderid_foreign` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `yarn_information_with_details` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `yarnInfoID` BIGINT UNSIGNED NOT NULL,
  `returnQuantity` DOUBLE NOT NULL,
  `westQuantity` DOUBLE NULL DEFAULT NULL,
  `role` TEXT NOT NULL,
  `vechileNumber` TEXT NULL,
  `deliveredBy` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `yarn_information_with_details_yarninfoid_foreign` (`yarnInfoID`),
  CONSTRAINT `yarn_information_with_details_yarninfoid_foreign` FOREIGN KEY (`yarnInfoID`) REFERENCES `yarn_informations` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `delivery_details` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `orderId` BIGINT UNSIGNED NOT NULL,
  `deliveredQuantity` DOUBLE NOT NULL,
  `fabricDeliveredQuantity` DOUBLE NULL DEFAULT NULL,
  `GrayDeliveredQuantity` DOUBLE NULL DEFAULT NULL,
  `unitPrice` DOUBLE NULL DEFAULT NULL,
  `billNumber` TEXT NULL,
  `deliveredBy` TEXT NULL,
  `colour` TEXT NULL,
  `vechileNumber` TEXT NULL,
  `roleQuantity` INT NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `delivery_details_orderid_foreign` (`orderId`),
  CONSTRAINT `delivery_details_orderid_foreign` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `bill_informations` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `billNumber` TEXT NULL,
  `unitPrice` DOUBLE NOT NULL,
  `amount` DOUBLE NOT NULL,
  `invoiceAmount` DOUBLE NOT NULL,
  `invoiceQuantity` DOUBLE NOT NULL,
  `containOrders` TEXT NOT NULL,
  `companyId` BIGINT UNSIGNED NOT NULL,
  `buyerId` BIGINT UNSIGNED NULL DEFAULT NULL,
  `fabricsId` BIGINT UNSIGNED NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bill_informations_companyid_foreign` (`companyId`),
  KEY `bill_informations_buyerid_foreign` (`buyerId`),
  KEY `bill_informations_fabricsid_foreign` (`fabricsId`),
  CONSTRAINT `bill_informations_companyid_foreign` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `bill_informations_buyerid_foreign` FOREIGN KEY (`buyerId`) REFERENCES `buyers` (`id`) ON DELETE SET NULL,
  CONSTRAINT `bill_informations_fabricsid_foreign` FOREIGN KEY (`fabricsId`) REFERENCES `fabrics_types` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `delivery_men` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `months` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `notifications` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL,
  `route` TEXT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user_notifications` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `userId` BIGINT UNSIGNED NOT NULL,
  `notificationId` BIGINT UNSIGNED NOT NULL,
  `isViewed` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_notifications_userid_notificationid_unique` (`userId`, `notificationId`),
  KEY `user_notifications_notificationid_foreign` (`notificationId`),
  CONSTRAINT `user_notifications_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_notifications_notificationid_foreign` FOREIGN KEY (`notificationId`) REFERENCES `notifications` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `password_otps` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `otp` TEXT NOT NULL,
  `expiresAt` TIMESTAMP NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `posts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `content` TEXT NULL,
  `published` TINYINT(1) NOT NULL DEFAULT 0,
  `authorId` BIGINT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_authorid_foreign` (`authorId`),
  CONSTRAINT `posts_authorid_foreign` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `profiles` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `bio` VARCHAR(255) NULL DEFAULT NULL,
  `jobTitle` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `userId` BIGINT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `profiles_userid_unique` (`userId`),
  CONSTRAINT `profiles_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
