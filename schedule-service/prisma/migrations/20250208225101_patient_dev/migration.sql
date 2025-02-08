/*
  Warnings:

  - You are about to drop the column `drugName` on the `DrugSchedule` table. All the data in the column will be lost.
  - Added the required column `drugId` to the `DrugSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DrugSchedule" DROP COLUMN "drugName",
ADD COLUMN     "drugId" TEXT NOT NULL;
