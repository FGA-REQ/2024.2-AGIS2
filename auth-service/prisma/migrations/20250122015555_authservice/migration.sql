/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "CRM" TEXT NOT NULL,
    "especialty" TEXT,
    "hashedPassword" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pacient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,

    CONSTRAINT "Pacient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_telephone_key" ON "Doctor"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Pacient_email_key" ON "Pacient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pacient_CPF_key" ON "Pacient"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "Pacient_telephone_key" ON "Pacient"("telephone");
