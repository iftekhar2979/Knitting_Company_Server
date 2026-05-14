<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('orderNumber')->unique();
            $table->foreignId('companyId')->constrained('companies')->onDelete('cascade');
            $table->foreignId('buyerId')->nullable()->constrained('buyers')->onDelete('set null');
            $table->text('companyName')->nullable();
            $table->text('fabricsName');
            $table->foreignId('fabricsId')->nullable()->constrained('fabrics_types')->onDelete('set null');
            $table->text('buyerName');
            $table->text('season')->nullable();
            $table->text('programNumber')->nullable();
            $table->text('jobNumber')->nullable();
            $table->text('bookingNumber')->nullable();
            $table->text('sbNumber')->nullable();
            $table->timestamp('orderedDate')->useCurrent();
            $table->timestamp('targetDate')->nullable();
            $table->double('orderQuantity');
            $table->double('deliveredQuantity')->default(0);
            $table->double('restQuantity');
            $table->text('unit');
            $table->text('status')->nullable();
            $table->boolean('isBillCreated')->default(false);
            $table->boolean('isProformaInvoiceCreated')->default(false);
            $table->foreignId('userId')->nullable()->constrained('users')->onDelete('set null');
            $table->text('billNumber')->nullable();
            $table->double('unitPrice')->nullable();
            $table->text('proformaInvoiceId')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
