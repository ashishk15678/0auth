-- CreateTable
CREATE TABLE "log" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "for" TEXT,
    "Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);
