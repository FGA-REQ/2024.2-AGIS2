/*
  Warnings:

  - Added the required column `scheduledAt` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "scheduledAt" TIMESTAMP(3) NOT NULL;
