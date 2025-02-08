-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "doctorId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_doctorId_createdAt_key" ON "Schedule"("doctorId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_patientId_createdAt_key" ON "Schedule"("patientId", "createdAt");
