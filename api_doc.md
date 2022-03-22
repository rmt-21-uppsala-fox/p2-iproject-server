# Restaurant API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /categories`
- `GET /history`
- `GET /food`
- `GET /food/:id`
- `POST /food`
- `PUT /food/:id`
- `PATCH /food/:id`
- `DELETE /food/:id`
- `POST customer/register`
- `POST customer/login`
- `GET customer/food`
- `GET customer/food/:id`
- `GET customer/favorites`
- `POST customer/favorites/:FoodId`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "afkclub",
  "email": "afk@gmail.com",
  "password": "12345678",
  "phoneNumber": "081243567456",
  "address": "Jl. 123"
}
```

_Response (201 - Created)_

```json
{
  "accessToken": "string",
  "email": "afk@gmail.com",
  "role": "Admin"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Username is required"
}
OR
{
  "message": "Username is already been used"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Email is already been used"
}
OR
{
  "message": "Email is not correct"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message":  "Password must be between 5 to 20 characters"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "aditHacktiv@gmail.com",
  "password": "123456"
}
```

_Response (200 - OK)_

```json
{
  "accessToken": "string",
  "email": "aditHacktiv@gmail.com",
  "role": "Admin"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /categories

Description:

- Get all categories from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "name": "Appetizer",
    "createdAt": "2022-03-03T09:07:06.139Z",
    "updatedAt": "2022-03-03T09:07:06.139Z"
  },
  {
    "id": 2,
    "name": "Main Course",
    "createdAt": "2022-03-03T09:07:06.139Z",
    "updatedAt": "2022-03-03T09:07:06.139Z"
  },
  {
    "id": 3,
    "name": "Dessert",
    "createdAt": "2022-03-03T09:07:06.139Z",
    "updatedAt": "2022-03-03T09:07:06.139Z"
  },
  {
    "id": 4,
    "name": "Drink",
    "createdAt": "2022-03-03T09:07:06.139Z",
    "updatedAt": "2022-03-03T09:07:06.139Z"
  }
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

&nbsp;

## 4. GET /history

Description:

- Get all history from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "FoodId": 10,
    "name": "Green Tea",
    "description": "Food with id 10 created",
    "updatedBy": "zero@gmail.com",
    "createdAt": "2022-03-07T10:12:37.212Z",
    "updatedAt": "2022-03-07T10:12:37.212Z"
  },
  {
    "id": 3,
    "FoodId": 10,
    "name": "Tenderloin Steak",
    "description": "Food with id 10 updated",
    "updatedBy": "aditHacktiv@gmail.com",
    "createdAt": "2022-03-07T10:23:10.091Z",
    "updatedAt": "2022-03-07T10:23:10.091Z"
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

&nbsp;

## 5. GET /food

Description:

- Get all food from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "name": "Gorengan",
    "description": "Menu pembuka berisi tempe mendoan, pisang goreng dan bakwan, disajikan bersamaan dengan saus khas myresto",
    "status": "active",
    "price": 25000,
    "imgUrl": "https://awsimages.detik.net.id/community/media/visual/2021/09/07/gorengan-1.jpeg?w=650&q=80",
    "AuthorId": 2,
    "CategoryId": 1,
    "createdAt": "2022-03-07T05:16:18.759Z",
    "updatedAt": "2022-03-12T08:07:42.120Z",
    "User": {
        "email": "zero@gmail.com"
    },
    "Category": {
        "name": "Appetizer"
    }
  },
  {
    "id": 2,
    "name": "Tenderloin Steak",
    "description": "Menu makanan utama yang dibuat dari daging sapi pilihan, di impor langsung dari austria, dan telah melalui proses treatment yang panjang. Disajikan dengan berbagai macam jenis kentang, sayuran dan saus yang dapat dipilih sesuai selera",
    "status": "inactive",
    "price": 80000,
    "imgUrl": "https://cdn1-production-images-kly.akamaized.net/cJ2leoWtivfj6PJjhRejajtVc_0=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/872850/original/026901200_1431165060-food_steak_desktop_1302x1020_wallpaper-420339.jpg",
    "AuthorId": 1,
    "CategoryId": 2,
    "createdAt": "2022-03-07T05:16:18.759Z",
    "updatedAt": "2022-03-07T05:16:18.759Z",
    "User": {
        "email": "aditHacktiv@gmail.com"
    },
    "Category": {
        "name": "Main Course"
    }
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

&nbsp;

## 6. GET /food/:id

Description:

- Get food by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": 1
}
```

_Response (200 - OK)_

```json
{
  "id": 1,
  "name": "Gorengan",
  "description": "Menu pembuka berisi tempe mendoan, pisang goreng dan bakwan, disajikan bersamaan dengan saus khas myresto",
  "status": "active",
  "price": 25000,
  "imgUrl": "https://awsimages.detik.net.id/community/media/visual/2021/09/07/gorengan-1.jpeg?w=650&q=80",
  "AuthorId": 2,
  "CategoryId": 1,
  "createdAt": "2022-03-01T10:25:47.955Z",
  "updatedAt": "2022-03-01T10:25:47.955Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Food data not found"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

&nbsp;

## 7. POST /food

Description:

- Create food into database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "name": "Green Tea",
  "description": "Minuman yang berasal dari pucuk daun teh hijau, dapat disajikan panas ataupun dingin",
  "price": 9000,
  "imgUrl": "https://s0.bukalapak.com/img/50209595231/large/data.png",
  "AuthorId": 1,
  "CategoryId": 4
}
```

_Response (201 - Created)_

```json
{
  "message": "Food has been successfully added",
  "food": {
    "id": 5,
    "name": "Green Tea",
    "description": "Minuman yang berasal dari pucuk daun teh hijau, dapat disajikan panas ataupun dingin",
    "status": "active",
    "price": 9000,
    "imgUrl": "https://s0.bukalapak.com/img/50209595231/large/data.png",
    "AuthorId": 1,
    "CategoryId": 4,
    "updatedAt": "2022-03-01T14:43:02.214Z",
    "createdAt": "2022-03-01T14:43:02.214Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Food name is required"
}
OR
{
  "message":  "Description is required"
}
OR
{
  "message": "Price is required"
}
OR
{
  "message": "Price must be at least Rp. 1"
}
OR
{
  "message": "Image Url is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

&nbsp;

## 8. PUT /food/:id

Description:

- Update food by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": 5
}
```

- body:

```json
{
  "name": "Green Tea",
  "description": "Minuman yang berasal dari pucuk daun teh hijau, dapat disajikan panas ataupun dingin",
  "price": 9000,
  "imgUrl": "https://s0.bukalapak.com/img/50209595231/large/data.png",
  "AuthorId": 1,
  "CategoryId": 4
}
```

_Response (200 - OK)_

```json
{
  "message": "Food has succesfully been updated",
  "food": {
    "id": 5,
    "name": "Chamomile Tea",
    "description": "Minuman yang berasal dari pucuk daun teh hijau, dapat disajikan panas ataupun dingin",
    "status": "active",
    "price": 12000,
    "imgUrl": "https://s0.bukalapak.com/img/50209595231/large/data.png",
    "AuthorId": 1,
    "CategoryId": 4,
    "updatedAt": "2022-03-01T14:43:02.214Z",
    "createdAt": "2022-03-01T14:43:02.214Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Food name is required"
}
OR
{
  "message": "Description is required"
}
OR
{
  "message": "Price is required"
}
OR
{
  "message": "Price must be at least Rp. 1"
}
OR
{
  "message": "Image Url is required"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "User have no edit/delete access to this food"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Food data not found"
}
```

&nbsp;

## 9. PATCH /food/:id

Description:

- Update status food by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": 5
}
```

- body:

```json
{
  "status": "inactive"
}
```

_Response (200 - OK)_

```json
{
  "message": "Food status has been successfully updated",
  "food": {
    "id": 5,
    "name": "Chamomile Tea",
    "description": "Minuman yang berasal dari pucuk daun teh hijau, dapat disajikan panas ataupun dingin",
    "status": "inactive",
    "price": 12000,
    "imgUrl": "https://s0.bukalapak.com/img/50209595231/large/data.png",
    "AuthorId": 1,
    "CategoryId": 4,
    "updatedAt": "2022-03-01T14:43:02.214Z",
    "createdAt": "2022-03-01T14:43:02.214Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Status must be active, inactive, or archived"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "User have no authorization to update food status"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Food data not found"
}
```

&nbsp;

## 10. DELETE /food/:id

Description:

- Delete food by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "5"
}
```

_Response (200 - OK)_

```json
{
  "message": "Green Tea has been successfully deleted"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "User have no edit/delete access to this food"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Food data not found"
}
```

&nbsp;

## 11. POST /customer/register

Request:

- body:

```json
{
  "username": "test1",
  "email": "test1@mail.com",
  "password": "123456"
}
```

_Response (201 - Created)_

```json
{
  "accessToken": "string",
  "email": "test1@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Username is required"
}
OR
{
  "message": "Username is already been used"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Email is already been used"
}
OR
{
  "message": "Email is not correct"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message":  "Password must be between 5 to 20 characters"
}
```

&nbsp;

## 12. POST /customer/login

Request:

- body:

```json
{
  "email": "test1@mail.com",
  "password": "123456"
}
```

_Response (200 - OK)_

```json
{
  "accessToken": "string",
  "email": "test1@mail.com"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 13. GET /customer/food

Description:

- Get all food from database

_Response (200 - OK)_

```json
{
  "count": 20,
    "rows": [
      {
        "id": 1,
        "name": "Gorengan",
        "description": "Menu pembuka berisi tempe mendoan, pisang goreng dan bakwan, disajikan bersamaan dengan saus khas myresto",
        "status": "active",
        "price": 25000,
        "imgUrl": "https://awsimages.detik.net.id/community/media/visual/2021/09/07/gorengan-1.jpeg?w=650&q=80",
        "AuthorId": 2,
        "CategoryId": 1,
        "createdAt": "2022-03-17T12:25:30.933Z",
        "updatedAt": "2022-03-17T12:25:30.933Z",
        "Category": {
            "name": "Appetizer"
        }
      },
      {
        "id": 2,
        "name": "Tenderloin Steak",
        "description": "Menu makanan utama yang dibuat dari daging sapi pilihan, di impor langsung dari austria, dan telah melalui proses treatment yang panjang. Disajikan dengan berbagai macam jenis kentang, sayuran dan saus yang dapat dipilih sesuai selera",
        "status": "active",
        "price": 80000,
        "imgUrl": "https://c1.wallpaperflare.com/preview/1019/957/250/steak-plate-food-dish.jpg",
        "AuthorId": 1,
        "CategoryId": 2,
        "createdAt": "2022-03-17T12:25:30.933Z",
        "updatedAt": "2022-03-17T12:25:30.933Z",
        "Category": {
            "name": "Main Course"
        }
      }
      ...,
    ]
}
```

&nbsp;

## 14. GET /customer/food/:id

Description:

- Get food by id from database

Request:

- params:

```json
{
  "id": 1
}
```

_Response (200 - OK)_

```json
{
  "id": 1,
  "name": "Gorengan",
  "description": "Menu pembuka berisi tempe mendoan, pisang goreng dan bakwan, disajikan bersamaan dengan saus khas myresto",
  "status": "active",
  "price": 25000,
  "imgUrl": "https://awsimages.detik.net.id/community/media/visual/2021/09/07/gorengan-1.jpeg?w=650&q=80",
  "AuthorId": 2,
  "CategoryId": 1,
  "createdAt": "2022-03-17T12:25:30.933Z",
  "updatedAt": "2022-03-17T12:25:30.933Z",
  "Category": {
    "name": "Appetizer"
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Food data not found"
}
```

&nbsp;

## 15. GET /customer/favorites

Description:

- Get all favorites from database for logged in customer

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 14,
    "CustomerId": 6,
    "FoodId": 1,
    "Food": {
      "id": 1,
      "name": "Gorengan",
      "description": "Menu pembuka berisi tempe mendoan, pisang goreng dan bakwan, disajikan bersamaan dengan saus khas myresto",
      "status": "active",
      "price": 25000,
      "imgUrl": "https://awsimages.detik.net.id/community/media/visual/2021/09/07/gorengan-1.jpeg?w=650&q=80",
      "AuthorId": 2,
      "CategoryId": 1,
      "Category": {
        "name": "Appetizer"
      }
    }
  },
  {
    "id": 15,
    "CustomerId": 6,
    "FoodId": 3,
    "Food": {
      "id": 3,
      "name": "Cheese Cake",
      "description": "Menu penutup yang dibuat dari keju terbaik sepanjang masa, ditambah topping yang dapat dipilih sesuai selera",
      "status": "active",
      "price": 32000,
      "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg",
      "AuthorId": 2,
      "CategoryId": 3,
      "Category": {
        "name": "Dessert"
      }
    }
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

&nbsp;

## 16. POST /customer/favorites/:FoodId

Description:

- Add favorites for logged in user

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "FoodId": 6
}
```

_Response (201 - Created)_

```json
{
  "id": 16,
  "CustomerId": 6,
  "FoodId": 6,
  "updatedAt": "2022-03-19T13:44:47.947Z",
  "createdAt": "2022-03-19T13:44:47.947Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Food is already on your favorite list"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Food not found"
}
```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
