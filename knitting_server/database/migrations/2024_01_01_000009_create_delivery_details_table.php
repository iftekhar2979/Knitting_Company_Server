<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('delivery_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('orderId')->constrained('orders')->onDelete('cascade');
            $table->double('deliveredQuantity');
            $table->double('fabricDeliveredQuantity')->nullable();
            $table->double('GrayDeliveredQuantity')->nullable();
            $table->double('unitPrice')->nullable();
            $table->text('billNumber')->nullable();
            $table->text('deliveredBy')->nullable();
            $table->text('colour')->nullable();
            $table->text('vechileNumber')->nullable();
            $table->integer('roleQuantity')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('delivery_details');
    }
};
