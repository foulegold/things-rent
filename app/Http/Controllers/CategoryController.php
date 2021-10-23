<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoryController extends Controller
{
    /**
     *
     */
    public function getAllCategories()
    {
        echo json_encode(Category::getAllCategories());
    }
}
