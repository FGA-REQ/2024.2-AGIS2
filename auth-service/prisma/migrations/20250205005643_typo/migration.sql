/*
  Warnings:

  - You are about to drop the `Pacient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pacient";

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "CPF" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_CPF_key" ON "Patient"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_telephone_key" ON "Patient"("telephone");
