-- CreateTable
CREATE TABLE "HealthCarePlans" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL,
    "contractNumber" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "company" TEXT NOT NULL,
    "CNPJ" TEXT NOT NULL,
    "companyPhoneNumber" TEXT NOT NULL,
    "companyEmail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HealthCarePlans_pkey" PRIMARY KEY ("id")
);
