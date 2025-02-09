/*
  Warnings:

  - You are about to drop the column `drugId` on the `DrugSchedule` table. All the data in the column will be lost.
  - Added the required column `drugName` to the `DrugSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DrugSchedule" DROP COLUMN "drugId",
ADD COLUMN     "drugName" TEXT NOT NULL;
