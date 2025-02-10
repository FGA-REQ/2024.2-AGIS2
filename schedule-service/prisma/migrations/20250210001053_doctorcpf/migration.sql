/*
  Warnings:

  - You are about to drop the column `doctorCPF` on the `Schedule` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[doctorCRM,createdAt]` on the table `Schedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `doctorCRM` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Schedule_doctorCPF_createdAt_key";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "doctorCPF",
ADD COLUMN     "doctorCRM" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_doctorCRM_createdAt_key" ON "Schedule"("doctorCRM", "createdAt");
