/*
  Warnings:

  - Added the required column `birthday` to the `Pacient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "especialty" SET DEFAULT 'Médico Geral';

-- AlterTable
ALTER TABLE "Pacient" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;
