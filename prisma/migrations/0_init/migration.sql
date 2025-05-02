-- CreateTable
CREATE TABLE "quote_requests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "product_price" DECIMAL NOT NULL,
    "product_unit" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

