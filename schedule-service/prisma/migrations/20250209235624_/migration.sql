/*
  Warnings:

  - You are about to drop the column `doctorId` on the `Schedule` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[doctorCPF,createdAt]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `doctorCPF` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Schedule_doctorId_createdAt_key";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "doctorId",
ADD COLUMN     "doctorCPF" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_doctorCPF_createdAt_key" ON "Schedule"("doctorCPF", "createdAt");
