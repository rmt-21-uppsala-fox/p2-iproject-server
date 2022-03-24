# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register/restaurant`
- `POST /register/admin`
<!-- - `POST /login`
- `POST /authGoogle`
- `POST /news`
- `GET /news`
- `GET /news/:NewsId`
- `PUT /news/:NewsId`
- `DELETE /news/:NewsId`
- `PATCH /news/:id`
- `GET /categories`
- `GET /histories`
- `POST /customers/register`
- `POST /customers/login`
- `GET /customers/news?page=:page&size=:size&filter=:filter&search=:search` -->

&nbsp;

## 1. POST /register/restaurant

Request:

- body:

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "logo": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": 10,
  "name": "KaEfCi",
  "email": "kaefci@gmail.com",
  "password": "$2b$10$BX5NkJIo/l113lSVbOzGp.Wb9RnSSzv7GGR3NzQo.e43zVRvnM5Zy",
  "logo": "assets\\logo\\1647984429969-FastOrderLogo-icon c3.png",
  "updatedAt": "2022-03-22T21:27:09.976Z",
  "createdAt": "2022-03-22T21:27:09.976Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "password is required"
}
OR
{
  "message": "Email is required"
}
OR
{
    "message": "Email must be unique"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 2. POST /register/:RestaurantId/customer

Description:

direct login with QRCode link after registration

Request:

- body:

```json
{
  "name": "string",
  "email": "string"
}
```

_Response (201 - OK)_

```json
{
  "access_token_Cust": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6ImljYW4iLCJyb2xlIjoiQ3VzdG9tZXIiLCJpYXQiOjE2NDgxNTgxNDd9.1hH-5Yx4HhTRG_goi_ATlCrE6IH6Cprf4Zpha7cf5Xk",
  "CustId": 5,
  "message": "Successfully registered"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 3. POST/login/restaurant

Description:

- Restaurant login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token_Resto": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJidWJ1ckBnbWFpbC5jb20iLCJyb2xlIjoiUmVzdGF1cmFudCIsImlhdCI6MTY0ODE1ODU0OX0.ltSNoXCkT-3bEN0P8JhZKGeTgN52cGvO_3zuKxNn7wY",
  "id": 1
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

<!-- ## 4. POST /news

Request:

- body:

```json
{
  "title": "string",
  "content": "text",
  "imgUrl": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": 6,
  "title": "KFC diskon",
  "content": "diskon jadi 30 rebu sepuasnya",
  "imgUrl": "blablabla",
  "AuthorId": 1,
  "CategoryId": 1,
  "createdAt": "2022-03-01T17:19:55.540Z",
  "updatedAt": "2022-03-01T17:19:55.540Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Title is required"
}
OR
{
  "message": "Content is required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 5. GET /category

Description:

- Get all category

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6IkFkbWluIiwiaWF0IjoxNjQ2NTgxMTMxfQ.XC8J6iKi5M8_HbEoPsO8FQnvbaGH4N9X5nEWMpFVnNQ"
}
```

_Response (200 - OK)_

```json
{
  "data": [
    {
      "name": "War"
    },
    {
      "name": "Sciences"
    },
    {
      "name": "Economics"
    },
    {
      "name": "Politics"
    },
    {
      "name": "World"
    },
    {
      "name": "Animal"
    },
    {
      "name": "Entertainment"
    }
  ]
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 6. GET /news

Description:

- Get all news from database

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6IkFkbWluIiwiaWF0IjoxNjQ2NTgxMTMxfQ.XC8J6iKi5M8_HbEoPsO8FQnvbaGH4N9X5nEWMpFVnNQ"
}
```

_Response (200 - OK)_

```json
[
  {
        "id": 1,
        "title": "russia serang ukraina",
        "content": "berita russia serang ukraina",
        "imgUrl": "blablabla",
        "AuthorId": 1,
        "CategoryId": 1,
        "createdAt": "2022-03-01T13:44:05.743Z",
        "updatedAt": "2022-03-01T13:44:05.744Z"
    },
    {
        "id": 2,
        "title": "russia menerobos kyiev",
        "content": "pasukan russia sedang mencoba menerobos kyiev",
        "imgUrl": "blablabla",
        "AuthorId": 1,
        "CategoryId": 1,
        "createdAt": "2022-03-01T13:46:56.144Z",
        "updatedAt": "2022-03-01T13:46:56.146Z"
    },
    {
        "id": 3,
        "title": null,
        "content": "pasukan russia sedang mencoba menerobos kyiev",
        "imgUrl": "blablabla",
        "AuthorId": 1,
        "CategoryId": 1,
        "createdAt": "2022-03-01T13:49:11.750Z",
        "updatedAt": "2022-03-01T13:49:11.752Z"
    }
  ...,
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 7. GET /news/:NewsId

Description:

- Get news by id from database

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6IkFkbWluIiwiaWF0IjoxNjQ2NTgxMTMxfQ.XC8J6iKi5M8_HbEoPsO8FQnvbaGH4N9X5nEWMpFVnNQ"
}
```

- params:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6IkFkbWluIiwiaWF0IjoxNjQ2NTgxMTMxfQ.XC8J6iKi5M8_HbEoPsO8FQnvbaGH4N9X5nEWMpFVnNQ"
}
```

_Response (200 - OK)_

```json
{
  "id": 3,
  "title": null,
  "content": "pasukan russia sedang mencoba menerobos kyiev",
  "imgUrl": "blablabla",
  "AuthorId": 1,
  "CategoryId": 1,
  "createdAt": "2022-03-01T13:49:11.750Z",
  "updatedAt": "2022-03-01T13:49:11.752Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 8. PUT /news/:NewsId

Description:

- Update news by id

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6IkFkbWluIiwiaWF0IjoxNjQ2NTgxMTMxfQ.XC8J6iKi5M8_HbEoPsO8FQnvbaGH4N9X5nEWMpFVnNQ"
}
```

- params:

```json
{
  "NewsId": "integer (required)"
}
```

- body:

```json
{
  "title": "string",
  "content": "text",
  "imgUrl": "string",
  "category": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success update News",
  "data": {
    "id": 4,
    "title": "russia banyak tank nya",
    "content": "militernya kuat sekali",
    "imgUrl": "blablabla",
    "AuthorId": 1,
    "CategoryId": 1,
    "createdAt": "2022-03-01T14:01:51.543Z",
    "updatedAt": "2022-03-01T17:01:51.272Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Title is required"
}
OR
{
  "message": "Content is required"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 9. GET /category

Description:

- get all categories

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6IkFkbWluIiwiaWF0IjoxNjQ2NTgxMTMxfQ.XC8J6iKi5M8_HbEoPsO8FQnvbaGH4N9X5nEWMpFVnNQ"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success show categories",
  "data": [
    {
      "id": 1,
      "name": "War",
      "createdAt": "2022-03-18T18:08:25.664Z",
      "updatedAt": "2022-03-18T18:08:25.664Z"
    },
    {
      "id": 2,
      "name": "Sciences",
      "createdAt": "2022-03-18T18:08:25.664Z",
      "updatedAt": "2022-03-18T18:08:25.664Z"
    },
    {
      "id": 3,
      "name": "Economics",
      "createdAt": "2022-03-18T18:08:25.664Z",
      "updatedAt": "2022-03-18T18:08:25.664Z"
    },
    {
      "id": 4,
      "name": "Politics",
      "createdAt": "2022-03-18T18:08:25.664Z",
      "updatedAt": "2022-03-18T18:08:25.664Z"
    },
    {
      "id": 5,
      "name": "Animal",
      "createdAt": "2022-03-18T18:08:25.664Z",
      "updatedAt": "2022-03-18T18:08:25.664Z"
    },
    {
      "id": 6,
      "name": "Entertainment",
      "createdAt": "2022-03-18T18:08:25.664Z",
      "updatedAt": "2022-03-18T18:08:25.664Z"
    },
    {
      "id": 7,
      "name": "Food",
      "createdAt": "2022-03-18T18:08:25.664Z",
      "updatedAt": "2022-03-18T18:08:25.664Z"
    },
    {
      "id": 8,
      "name": "Anime",
      "createdAt": "2022-03-18T18:08:25.664Z",
      "updatedAt": "2022-03-18T18:08:25.664Z"
    }
  ]
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 10. GET /history

Description:

- get all history

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nywicm9sZSI6IkFkbWluIiwiaWF0IjoxNjQ2NTgxMTMxfQ.XC8J6iKi5M8_HbEoPsO8FQnvbaGH4N9X5nEWMpFVnNQ"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "title": "Putin Menggila",
    "description": "News with id 1 updated",
    "updatedBy": "Admin",
    "NewsId": 1,
    "createdAt": "2022-03-07T16:16:10.324Z",
    "updatedAt": "2022-03-07T16:16:10.324Z"
  },
  {
    "id": 2,
    "foodName": "Putin Menggila",
    "description": "New News with id 27 created",
    "updatedBy": "Admin",
    "NewsId": 19,
    "createdAt": "2022-03-07T16:29:59.790Z",
    "updatedAt": "2022-03-07T16:29:59.790Z"
  },
  {
    "id": 3,
    "foodName": "Putin Menggila",
    "description": "News with id 1 has been updated from active into archived",
    "updatedBy": "Admin",
    "NewsId": 1,
    "createdAt": "2022-03-07T15:26:09.872Z",
    "updatedAt": "2022-03-07T15:26:09.872Z"
  }
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 11. POST /customers/register

Description:

- register customer

Request:

- body:

```json
{
  "username": "icanGans",
  "email": "ican@gmail.com",
  "password": "12345",
  "phoneNumber": "0811223344",
  "address": "Bogor"
}
```

_Response (200 - OK)_

```json
{
  "message": "register success",
  "id": 5,
  "email": "ican@gmail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": ["Username is required", "Email is required", "Password is required", "Phone Number is required", "Address is required"]
}
```

OR

```json
{
  "message": ["email must be unique"]
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 12. POST /customers/login

Description:

- login customers

Request:

- body:

```json
{
  "email": "ican@gmail.com",
  "password": "12345"
}
```

_Response (200 - OK)_

```json
{
  "message": "Login successfull",
  "username": "Jenaka",
  "id": 1,
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkN1c3RvbWVyIiwiaWF0IjoxNjQ3NzA2ODc2fQ.9bwH6Cy1QnUQpCjFmnXuXgrAcBkyaQLVbF_wvJP7Qq4"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid username or email or password"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## 12. GET /customers/news?page=:page&size=:size&filter=:filter&search=:search

Description:

- get all news customers with pagination

_Response (200 - OK)_

```json
{
    "message": "Success show News",
    "dataNews": [
        {
            "id": 2,
            "title": "Putin Bersedia Setop Invasi Rusia ke Ukraina, Minta Syarat Ini",
            "status": "active",
            "content": "Presiden Rusia Vladimir Putin mengatakan, operasi militernya di Ukraina bisa disetop asalkan Kyiv berhenti melawan dan memenuhi tuntutan Moskwa. Hal tersebut disampaikan Putin ketika berbicara via telepon dengan Presiden Turki Recep Tayyip Erdogan. Layanan pers Kremlin, dilansir media Rusia TASS, Minggu (6/3/2022), melaporkan pembicaraan kedua pemimpin tersebut. Baca juga: Pasukan Rusia Tingkatkan Cengkeraman di PLTN Zaporizhzhia “Vladimir Putin menginformasikan tentang kemajuan operasi militer khusus untuk melindungi Donbass, menyampaikan pendekatan dan penilaian utama dalam konteks ini, menjelaskan secara rinci tujuan dan tugas yang ditetapkan,” kata Kremlin. “Ditekankan bahwa operasi khusus berjalan sesuai dengan rencana dan sesuai jadwal,” sambung Kremlin, sebagaimana dilansir TASS. Selama percakapan, pemimpin Rusia itu mengonfirmasi kesiapan pihak Rusia untuk berdialog dengan pihak berwenang Ukraina dan mitra asing untuk menyelesaikan konflik.",
            "imgUrl": "https://asset.kompas.com/crops/jcHdItFmVyDObfBnPLkU0Szn2-4=/0x7:1989x1333/750x500/data/photo/2021/11/04/61832697ae280.jpg",
            "AuthorId": 2,
            "CategoryId": 1,
            "createdAt": "2022-03-18T18:08:26.003Z",
            "updatedAt": "2022-03-18T18:08:26.003Z",
            "Customers": [
                {
                    "id": 1,
                    "username": "Jenaka",
                    "email": "jenn@gmail.com",
                    "password": "$2b$10$yuP2vFaEF1Q63z.Pk.nm5uHN/MBNeprwuPoZL.xQOGnofahAH3Cpe",
                    "role": "Customer",
                    "phoneNumber": "237-123-4081",
                    "address": "6 Stoughton Center",
                    "createdAt": "2022-03-18T18:08:25.880Z",
                    "updatedAt": "2022-03-18T18:08:25.880Z",
                    "Like": {
                        "id": 2,
                        "CustomerId": 1,
                        "NewsId": 2,
                        "createdAt": "2022-03-19T08:46:51.153Z",
                        "updatedAt": "2022-03-19T08:46:51.154Z"
                    }
                }
            ]
        },
        {
            "id": 7,
            "title": "Putin Bersedia Setop Invasi Rusia ke Ukraina, Minta Syarat Ini",
            "status": "active",
            "content": "Presiden Rusia Vladimir Putin mengatakan, operasi militernya di Ukraina bisa disetop asalkan Kyiv berhenti melawan dan memenuhi tuntutan Moskwa. Hal tersebut disampaikan Putin ketika berbicara via telepon dengan Presiden Turki Recep Tayyip Erdogan. Layanan pers Kremlin, dilansir media Rusia TASS, Minggu (6/3/2022), melaporkan pembicaraan kedua pemimpin tersebut. Baca juga: Pasukan Rusia Tingkatkan Cengkeraman di PLTN Zaporizhzhia “Vladimir Putin menginformasikan tentang kemajuan operasi militer khusus untuk melindungi Donbass, menyampaikan pendekatan dan penilaian utama dalam konteks ini, menjelaskan secara rinci tujuan dan tugas yang ditetapkan,” kata Kremlin. “Ditekankan bahwa operasi khusus berjalan sesuai dengan rencana dan sesuai jadwal,” sambung Kremlin, sebagaimana dilansir TASS. Selama percakapan, pemimpin Rusia itu mengonfirmasi kesiapan pihak Rusia untuk berdialog dengan pihak berwenang Ukraina dan mitra asing untuk menyelesaikan konflik.",
            "imgUrl": "https://asset.kompas.com/crops/jcHdItFmVyDObfBnPLkU0Szn2-4=/0x7:1989x1333/750x500/data/photo/2021/11/04/61832697ae280.jpg",
            "AuthorId": 2,
            "CategoryId": 1,
            "createdAt": "2022-03-18T18:08:26.003Z",
            "updatedAt": "2022-03-18T18:08:26.003Z",
            "Customers": []
        },
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
``` -->
