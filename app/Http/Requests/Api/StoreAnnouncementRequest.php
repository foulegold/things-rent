<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreAnnouncementRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'category_id' => ['required', 'integer'],
            'title' => ['required', 'string'],
            'content' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'address_tran' => ['required', 'string'],
        ];
    }

    /**
     * @return array
     */
    public function attributes(): array
    {
        return [
            'category_id' => 'Категория',
            'title' => 'Название объявления',
            'content' => 'Описание объявления',
            'price' => 'Цена',
            'address_tran' => 'Адрес',
        ];
    }
}
