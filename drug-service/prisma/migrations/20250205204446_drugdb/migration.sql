-- CreateTable
CREATE TABLE "Drug" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "actionSite" TEXT NOT NULL,
    "medicationBreak" INTEGER NOT NULL,
    "daysTime" INTEGER NOT NULL,

    CONSTRAINT "Drug_pkey" PRIMARY KEY ("id")
);
