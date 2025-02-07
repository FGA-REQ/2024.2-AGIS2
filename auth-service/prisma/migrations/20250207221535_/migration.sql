-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "passwordResetToken" TEXT;

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "passwordResetToken" TEXT;
