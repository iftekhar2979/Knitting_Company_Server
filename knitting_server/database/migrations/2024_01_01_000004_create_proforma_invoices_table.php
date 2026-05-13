<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('proforma_invoices', function (Blueprint $table) {
            $table->id();
            $table->text('style')->nullable();
            $table->text('fabricsName');
            $table->foreignId('fabricsId')->nullable()->constrained('fabrics_types')->onDelete('set null');
            $table->text('description')->nullable();
            $table->text('finishDia')->nullable();
            $table->double('unitPrice');
            $table->integer('totalQuantity')->nullable();
            $table->double('amount');
            $table->foreignId('companyId')->constrained('companies')->onDelete('cascade');
            $table->foreignId('buyerId')->nullable()->constrained('buyers')->onDelete('set null');
            $table->text('containOrders');
            $table->text('piName');
            $table->text('piNumber');
            $table->double('invoiceAmount');
            $table->double('invoiceQuantity');
            $table->text('season');
            $table->text('billingWay');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('proforma_invoices');
    }
};
