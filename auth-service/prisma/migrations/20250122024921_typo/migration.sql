/*
  Warnings:

  - You are about to drop the column `especialty` on the `Doctor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "especialty",
ADD COLUMN     "specialty" TEXT DEFAULT 'Médico Geral';
