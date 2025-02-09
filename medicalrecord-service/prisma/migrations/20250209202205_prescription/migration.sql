/*
  Warnings:

  - Added the required column `doctorCRM` to the `Prescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientCPF` to the `Prescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prescription" ADD COLUMN     "doctorCRM" TEXT NOT NULL,
ADD COLUMN     "patientCPF" TEXT NOT NULL;
