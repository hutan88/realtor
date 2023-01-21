/*
  Warnings:

  - You are about to drop the column `propert_typw` on the `Home` table. All the data in the column will be lost.
  - Added the required column `propert_type` to the `Home` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Home" DROP COLUMN "propert_typw",
ADD COLUMN     "propert_type" "PropertyType" NOT NULL;
