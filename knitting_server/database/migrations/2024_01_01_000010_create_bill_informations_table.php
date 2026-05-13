<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bill_informations', function (Blueprint $table) {
            $table->id();
            $table->text('billNumber')->nullable();
            $table->double('unitPrice');
            $table->double('amount');
            $table->double('invoiceAmount');
            $table->double('invoiceQuantity');
            $table->text('containOrders');
            $table->foreignId('companyId')->constrained('companies')->onDelete('cascade');
            $table->foreignId('buyerId')->nullable()->constrained('buyers')->onDelete('set null');
            $table->foreignId('fabricsId')->nullable()->constrained('fabrics_types')->onDelete('set null');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bill_informations');
    }
};
