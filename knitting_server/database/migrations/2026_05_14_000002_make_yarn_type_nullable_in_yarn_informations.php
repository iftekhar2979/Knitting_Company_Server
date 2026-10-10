<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('yarn_informations')) {
            DB::statement('ALTER TABLE yarn_informations MODIFY yarnType TEXT NULL');
            DB::statement('ALTER TABLE yarn_informations MODIFY descriptionOfYarn LONGTEXT NULL');
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('yarn_informations')) {
            DB::statement('ALTER TABLE yarn_informations MODIFY yarnType TEXT NOT NULL');
        }
    }
};
