-- CreateTable
CREATE TABLE "DrugSchedule" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "numberOfDays" INTEGER NOT NULL,
    "initialDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "drugBreak" INTEGER NOT NULL,

    CONSTRAINT "DrugSchedule_pkey" PRIMARY KEY ("id")
);
