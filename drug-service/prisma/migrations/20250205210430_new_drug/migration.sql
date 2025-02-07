/*
  Warnings:

  - You are about to drop the column `daysTime` on the `Drug` table. All the data in the column will be lost.
  - You are about to drop the column `medicationBreak` on the `Drug` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Drug" DROP COLUMN "daysTime",
DROP COLUMN "medicationBreak";
