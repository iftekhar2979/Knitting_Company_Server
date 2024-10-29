/*
  Warnings:

  - You are about to drop the column `deliveredQuantity` on the `orderdetails` table. All the data in the column will be lost.
  - You are about to drop the column `restQuantity` on the `orderdetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `orderdetails` DROP COLUMN `deliveredQuantity`,
    DROP COLUMN `restQuantity`;
