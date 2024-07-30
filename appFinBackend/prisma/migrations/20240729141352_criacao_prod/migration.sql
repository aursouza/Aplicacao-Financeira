-- CreateTable
CREATE TABLE "financeiros" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "Valor" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "financeiros_pkey" PRIMARY KEY ("id")
);
