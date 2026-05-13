<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('yarn_informations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('companyId')->constrained('companies')->onDelete('cascade');
            $table->double('ReceivingQuantity');
            $table->double('restQuantity');
            $table->text('yarnType');
            $table->longText('descriptionOfYarn');
            $table->foreignId('orderId')->constrained('orders')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('yarn_informations');
    }
};
