# Restaurant API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /products`
- `GET /products/:id`
- `GET /workshops/:id`
- `POST /mycart/:ProductId`
- `GET /mycart`
- `DELETE /mycart/:id`
- `GET /payments`
- `GET /payments/:id`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "test1",
  "email": "test1@gmail.com",
  "password": "123456"
}
```

_Response (201 - Created)_

```json
{
  "accessToken": "string"
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
  "email": "test1@gmail.com",
  "password": "123456"
}
```

_Response (200 - OK)_

```json
{
  "accessToken": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /products

Description:

- Get all products from database

Request:

_Response (200 - OK)_

```json
{
  "count": 20,
  "rows": [
      {
          "id": 1,
          "name": "Sport Racing Dual Muffler",
          "description": "Knalpot muffler berlubang dua yang dapat membuat mobil ada menjadi lebih bergaya, dan juga menghasilkan suara yang lebih dalam",
          "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiP__HrY8eNAvBYBnf_-nqZSgHWr5eHvCfKJs9fCReG5TsaW3T8l7kOwAtJOo0Un3x1ic&usqp=CAU",
          "price": 600000,
          "stock": 15,
          "WorkshopId": 1,
          "CategoryId": 4,
          "Category": {
              "name": "Exhaust"
          }
      },
      {
          "id": 2,
          "name": "Sport Racing Single Muffler",
          "description": "Knalpot muffler berlubang satu yang dapat membuat mobil ada menjadi lebih bergaya, dan juga menghasilkan suara yang lebih dalam",
          "imgUrl": "https://image.made-in-china.com/202f0j00pkBRYMfsgeor/SS304-Glossy-Blue-Burnt-End-Slant-Cut-Single-Output-Stainless-Steel-Car-Exhaust-Tip.jpg",
          "price": 300000,
          "stock": 20,
          "WorkshopId": 1,
          "CategoryId": 4,
          "Category": {
              "name": "Exhaust"
          }
      }...,
  ]
```

&nbsp;

## 4. GET /products/:id

Description:

- Get products by id from database

Request:

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "id": 1,
  "name": "Sport Racing Dual Muffler",
  "description": "Knalpot muffler berlubang dua yang dapat membuat mobil ada menjadi lebih bergaya, dan juga menghasilkan suara yang lebih dalam",
  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiP__HrY8eNAvBYBnf_-nqZSgHWr5eHvCfKJs9fCReG5TsaW3T8l7kOwAtJOo0Un3x1ic&usqp=CAU",
  "price": 600000,
  "stock": 15,
  "WorkshopId": 1,
  "CategoryId": 4,
  "Category": {
    "name": "Exhaust"
  },
  "Workshop": {
    "name": "Auto Evolve Workshop"
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Product not found"
}
```

&nbsp;

## 5. GET /workshops/:id

Description:

- Get workshops by id from database

Request:

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "id": 1,
  "name": "Auto Evolve Workshop",
  "specialization": "Wheel,Suspension,Exhaust",
  "logo": "https://cdn.dribbble.com/users/7640674/screenshots/15827679/media/f9dcc3560417f9420de9ee1afeb2a647.jpg?compress=1&resize=400x300",
  "location": "Bandung",
  "phoneNumber": "081243526172",
  "createdAt": "2022-03-23T23:34:55.614Z",
  "updatedAt": "2022-03-23T23:34:55.614Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Workshop not found"
}
```

&nbsp;

## 6. POST /mycart/:ProductId

Description:

- Add product to my cart

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
  "ProductId": "integer"
}
```

_Response (201 - Created)_

```json
{
  "id": 1,
  "TransactionId": 1,
  "ProductId": 10,
  "quantity": 4
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Product not found"
}
```

&nbsp;

## 7. GET /mycart

Description:

- Get all products from my cart

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
    "id": 8,
    "TransactionId": 3,
    "ProductId": 15,
    "quantity": 1,
    "Product": {
      "id": 15,
      "name": "Dash Cam Pro Plus Front + Rear",
      "description": "Kamera pemantau yang dapat merekam perjalanan anda, untuk memproteksi diri anda dari kejadian-kejadian tak terduga di jalanan",
      "imgUrl": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/2/7/20c0a299-452e-49cd-a04e-5b8eaa7f2534.jpg",
      "price": 1500000,
      "stock": 10,
      "WorkshopId": 2,
      "CategoryId": 3,
      "Category": {
        "name": "Accessories"
      }
    }
  },
  {
    "id": 9,
    "TransactionId": 3,
    "ProductId": 16,
    "quantity": 2,
    "Product": {
      "id": 16,
      "name": "BMW Horn Flosser",
      "description": "Klakson mobil dengan acoustic pressure mencapai 118dB, original made in German",
      "imgUrl": "https://images.tokopedia.net/img/cache/500-square/product-1/2021/1/26/inv/inv_9dfe566d-5055-49fd-b6a8-6769cf4f2412_680_680.jpg",
      "price": 130000,
      "stock": 35,
      "WorkshopId": 2,
      "CategoryId": 3,
      "Category": {
        "name": "Accessories"
      }
    }
  }
]
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

## 8. DELETE /mycart/:id

Description:

- Delete my cart by id

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
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Product succesfully deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Product not found"
}
```

&nbsp;

## 9. GET /payments

Description:

- Get all payments

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
        "id": 2,
        "code": "623b152841c6c91f27d11b6e",
        "description": "Invoice FAP-#1648038746654",
        "status": "PAID",
        "TransactionId": 1,
        "amount": 830000,
        "invoiceUrl": "https://checkout-staging.xendit.co/web/623b152841c6c91f27d11b6e",
        "method": "BANK_TRANSFER-MANDIRI",
        "createdAt": "2022-03-23T12:40:09.532Z",
        "updatedAt": "2022-03-23T12:42:05.975Z"
    },
    {
        "id": 3,
        "code": "623b16c74b48626f98bbb113",
        "description": "Invoice FAP-#1648039423260",
        "status": "PAID",
        "TransactionId": 2,
        "amount": 14900000,
        "invoiceUrl": "https://checkout-staging.xendit.co/web/623b16c74b48626f98bbb113",
        "method": "BANK_TRANSFER-PERMATA",
        "createdAt": "2022-03-23T12:47:04.001Z",
        "updatedAt": "2022-03-23T13:02:45.725Z"
    }...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid user token"
}
```

&nbsp;

## 10. GET /payments/:id

Description:

- Get payments by id from database

Request:

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "id": 2,
  "status": "PAID",
  "amount": 830000,
  "invoiceUrl": "https://checkout-staging.xendit.co/web/623b152841c6c91f27d11b6e",
  "Transaction": {
    "id": 1,
    "DetailTransactions": [
      {
        "id": 1,
        "quantity": 4,
        "Product": {
          "name": "Steering Wheel Cover",
          "price": 100000
        }
      },
      {
        "id": 2,
        "quantity": 2,
        "Product": {
          "name": "4 Points Rear Parking Sensor",
          "price": 150000
        }
      },
      {
        "id": 3,
        "quantity": 1,
        "Product": {
          "name": "BMW Horn Flosser",
          "price": 130000
        }
      }
    ]
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Payments not found"
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
