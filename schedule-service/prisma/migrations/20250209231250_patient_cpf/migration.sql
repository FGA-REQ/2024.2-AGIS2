/*
  Warnings:

  - You are about to drop the column `patientId` on the `Schedule` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[patientCPF,createdAt]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `patientCPF` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Schedule_patientId_createdAt_key";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "patientId",
ADD COLUMN     "patientCPF" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_patientCPF_createdAt_key" ON "Schedule"("patientCPF", "createdAt");
