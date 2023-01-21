/*
  Warnings:

  - You are about to drop the column `number_of_bathroome` on the `Home` table. All the data in the column will be lost.
  - You are about to drop the column `propert_type` on the `Home` table. All the data in the column will be lost.
  - Added the required column `number_of_bathrooms` to the `Home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `property_type` to the `Home` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Home" DROP COLUMN "number_of_bathroome",
DROP COLUMN "propert_type",
ADD COLUMN     "number_of_bathrooms" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "property_type" "PropertyType" NOT NULL;
