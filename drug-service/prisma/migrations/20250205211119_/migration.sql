/*
  Warnings:

  - The primary key for the `Drug` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Drug" DROP CONSTRAINT "Drug_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Drug_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Drug_id_seq";
