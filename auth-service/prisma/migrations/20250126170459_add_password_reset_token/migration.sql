-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "passwordResetToken" TEXT;

-- AlterTable
ALTER TABLE "Pacient" ADD COLUMN     "passwordResetToken" TEXT;
