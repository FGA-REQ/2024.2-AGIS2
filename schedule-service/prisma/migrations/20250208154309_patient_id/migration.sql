/*
  Warnings:

  - Added the required column `patientId` to the `DrugSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DrugSchedule" ADD COLUMN     "patientId" INTEGER NOT NULL;
