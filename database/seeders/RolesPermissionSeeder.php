<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesPermissionSeeder extends Seeder
{
    /**
     * List of applications to add.
     */
    private $permissions = [
        'role-list',
        'role-create',
        'role-edit',
        'role-delete',
        'product-list',
        'product-create',
        'product-edit',
        'product-delete'
    ];

    /**
     * List if roles 
     */
    private $roles=[
        'super-admin',
        'admin',
        'seller'
    ];

     /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach($this->permissions as $permissions){
            Permission::create(['name'=>$permissions]);
        }

        foreach($this->roles as $roles){
            Role::create(['name'=>$roles]);
        }
    }
}
