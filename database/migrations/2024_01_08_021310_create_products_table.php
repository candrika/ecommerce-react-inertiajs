<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('price_sale',12,2);
            $table->decimal('price_reseller',12,2);
            $table->decimal('price_grosir',12,2);
            $table->smallInteger('status')->default(0)->comment('1 active 0 nonactive');
            $table->string('sku');
            $table->longText('detail');
            $table->integer('max_gross');
            $table->integer('min_gross');
            $table->integer('stock');
            $table->decimal('discount',12,2);
            $table->smallInteger('jenis_discount_harga')->default('1')->comment('1 fix amount 2 percentage');
            $table->smallInteger('jenis_discount_ongkir')->default('1')->comment('1 fix amount 2 percentage');
            $table->decimal('shipping_discount',12,2);
            $table->integer('weight');
            $table->longText('main_image');
            $table->decimal('price_sale_formater',12,2);
            $table->decimal('price_reseller_formater',12,2);
            $table->decimal('price_grosir_formater',12,2);
            $table->decimal('discount_harga_formater',12,2);
            $table->decimal('discount_ongkir_formater',12,2);
            $table->foreignId('category_id')->references('id')->on('categories');
            $table->foreignId('item_unit_id')->references('id')->on('item_units');
            $table->foreignId('warehouse_id')->references('id')->on('warehouses');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
