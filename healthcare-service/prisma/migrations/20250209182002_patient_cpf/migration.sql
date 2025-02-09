/*
  Warnings:

  - You are about to drop the column `patientId` on the `HealthCarePlans` table. All the data in the column will be lost.
  - Added the required column `patientCPF` to the `HealthCarePlans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HealthCarePlans" DROP COLUMN "patientId",
ADD COLUMN     "patientCPF" TEXT NOT NULL;
