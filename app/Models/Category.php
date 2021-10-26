<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property integer id
 * @property string title
 * @property integer parent_id
 * @property Category children
 * @property Category parent
 */
class Category extends Model
{
    use HasFactory;

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id', 'id');
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id', 'id');
    }

    // Вернет массив категорий в иерархической структуре
    public static function getAllCategories()
    {
        $result = [
            '0' => [
                'id' => 0,
                'title' => 'Все категории',
            ],
        ];
        $allCategories = Category::all();
        foreach ($allCategories as $category) {
            if ($category->parent_id == null) {
                $result[$category->id] = $category->fillCategoryForJSON();
            }
        }
        return $result;
    }

    public function fillCategoryForJSON()
    {
        $result = [
            'id' => $this->id,
            'title' => $this->title,
        ];
        if ($this->children != null) {
            foreach ($this->children as $child) {
                $result['children'][$child->id] = $child->fillCategoryForJSON();
            }
        }
        return $result;
    }
}
