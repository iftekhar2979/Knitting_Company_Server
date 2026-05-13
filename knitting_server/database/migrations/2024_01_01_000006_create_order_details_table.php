<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('orderId')->unique()->constrained('orders')->onDelete('cascade');
            $table->text('style')->nullable();
            $table->text('yarnCount')->nullable();
            $table->text('yarnBrand')->nullable();
            $table->text('yarnLot')->nullable();
            $table->text('lycraCount')->nullable();
            $table->text('lycraBrand')->nullable();
            $table->text('lycraLot')->nullable();
            $table->text('polyStarCount')->nullable();
            $table->text('polyStarBrand')->nullable();
            $table->text('polyStarLot')->nullable();
            $table->text('mc_DIA')->nullable();
            $table->text('e_DIA')->nullable();
            $table->text('f_GSM')->nullable();
            $table->text('sl')->nullable();
            $table->text('colour')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('order_details');
    }
};
