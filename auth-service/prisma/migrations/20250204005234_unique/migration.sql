/*
  Warnings:

  - A unique constraint covering the columns `[CRM]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Doctor_CRM_key" ON "Doctor"("CRM");
