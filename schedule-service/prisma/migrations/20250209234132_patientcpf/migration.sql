/*
  Warnings:

  - You are about to drop the column `patientId` on the `DrugSchedule` table. All the data in the column will be lost.
  - Added the required column `patientCPF` to the `DrugSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DrugSchedule" DROP COLUMN "patientId",
ADD COLUMN     "patientCPF" TEXT NOT NULL;
