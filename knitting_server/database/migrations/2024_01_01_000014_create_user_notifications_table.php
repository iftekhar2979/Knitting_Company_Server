<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('userId')->constrained('users')->onDelete('cascade');
            $table->foreignId('notificationId')->constrained('notifications')->onDelete('cascade');
            $table->boolean('isViewed')->default(false);
            $table->timestamps();

            $table->unique(['userId', 'notificationId']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_notifications');
    }
};
