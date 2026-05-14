<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('orders')) {
            DB::statement('ALTER TABLE orders MODIFY orderedDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP');
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('orders')) {
            DB::statement('ALTER TABLE orders MODIFY orderedDate TIMESTAMP NOT NULL');
        }
    }
};
