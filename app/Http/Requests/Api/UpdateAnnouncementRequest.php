<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAnnouncementRequest extends FormRequest
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
     * @return array
     */
    public function messages(): array
    {
        return [
            'required' => ':attribute - обязательно для заполнения',
            'integer' => ':attribute - должно быть числом',
            'string' => ':attribute - должен быть строкой',
            'numeric' => ':attribute - должен быть числом',
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
