<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('yarn_information_with_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('yarnInfoID')->constrained('yarn_informations')->onDelete('cascade');
            $table->double('returnQuantity');
            $table->double('westQuantity')->nullable();
            $table->text('role');
            $table->text('vechileNumber')->nullable();
            $table->text('deliveredBy')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('yarn_information_with_details');
    }
};
