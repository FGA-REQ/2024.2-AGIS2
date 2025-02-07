/*
  Warnings:

  - A unique constraint covering the columns `[CPF]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `CPF` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "CPF" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_CPF_key" ON "Doctor"("CPF");
