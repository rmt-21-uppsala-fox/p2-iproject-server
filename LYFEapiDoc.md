# LYFE API Documentation

Web Links:
Heroku: https://lyfe-tomthedeveloper11.herokuapp.com
Firebase: https://lyfe-iproject.web.app/

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /xenditCallback`
- `GET /imagesUrl`
- `GET /packages`
- `POST /xenditPay`
- `POST /uploadToImgBB`

&nbsp;

## 1. POST /register

Description:
- Register new User

Request body:

```json
{
    "name": "John Doe",
    "email": "john@doe.com",
    "password": "12345"
}
```

_Response (201 - Created)_

```json
{
    "id": 10,
    "name": "John Doe.com",
    "email": "john@doe.com"
}
```

_Response (400 - Validation Error)_

```json
{
    "message": "Name is required"
}
    or
{
    "message": "Password is required"
}
    or
{
    "message": "Email is required"
}     
    or
{
    "message": "Invalid email format"
}  

```

_Response (400 - Unique Error)_

```json
{
    "message": "Email must be unique"
}
```

&nbsp;

## 2. POST /login

Description:
- Log in User

Request body:

```json
{
    "email": "john@doe.com",
    "password": "12345"
}
```

_Response (200 - OK)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2NDY0NzU2ODV9.IhB1rMIPWBxqVVX9xmgjSLjNrkcH8njtaDyfEgcxiUQ",
    "id": 1,
    "name": "John Doe",
    "email": "john@doe.com",


}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "User not found"
}
    or
{
    "message": "Invalid email/password"
}  
```


## 3. POST /xenditCallback

Description:
- Get callback from Xendit API

Request body:

```json
{
    "id": "579c8d61f23fa4ca35e52da4",
    "external_id": "invoice_123124123",
    "user_id": "5781d19b2e2385880609791c",
    "is_high": true,
    "payment_method": "BANK_TRANSFER",
    "status": "PAID",
    "merchant_name": "Xendit",
    "amount": 50000,
    "paid_amount": 50000,
    "bank_code": "PERMATA",
    "paid_at": "2016-10-12T08:15:03.404Z",
    "payer_email": "wildan@xendit.co",
    "description": "This is a description",
    "adjusted_received_amount": 47500,
    "fees_paid_amount": 0,
    "updated": "2016-10-10T08:15:03.404Z",
    "created": "2016-10-10T08:15:03.404Z",
    "currency": "IDR",
    "payment_channel": "PERMATA",
    "payment_destination": "888888888888"
}
```

_Response (200 - OK)_

```json
{
    "message": "Successfully accepted the callback",
}
```

&nbsp;

## 4. GET /imagesUrl

Description:
- Get all images URL from database

Request header:
```json
{
    "access_token": "String"
}
```

_Response (200 - OK)_

```json
{
    "John Doe": [
         "http://imageURL.jpg",
         "http://imageURL.jpg",
         "http://imageURL.jpg",
    ],
    "Iron Man": [
        "http://imageURL.jpg",
        "http://imageURL.jpg",
    ]
}
```

&nbsp;


## 5. GET /packages

Description:
- Get all packages from database

Request header:
```json
{
    "access_token": "String"
}
```

_Response (200 - OK)_

```json
[   
    {
    "id": 1,
    "name": "Men Hygiene",
    "description": "A basket full of Men Stuff",
    "imgUrl": "https://m.media-amazon.com/images/I/8111LXtDh3L._AC_SY606_.jpg",
    "price": 235000,
    }...,
]
```

&nbsp;

## 6. POST /xenditPay

Description:
- Execute xendit invoice payment

Request header:
```json
{
    "access_token": "String"
}
```

Request body:

```json
{
          "external_id": "invoice-23123083",
          "amount": 0,
          "customer": {
            "given_names": "John Doe",
            "email":"john@doe.com",
          },
          "items": [{
            "name": "Men Hygiene",
            "quantity": 1,
            "price": 235000,
            "description": "A basket full of Men Stuff"
          }...,],
          "description":"Invoice Demo 12345",
        }
```

_Response (200 - OK)_

```json
{
    "responseUrl": "https://checkout-staging.xendit.co/web/623bf225bf03c32d668fe713"
}
```

&nbsp;

## 7. POST /uploadToImgBB

Description:
- Upload image to ImageBB server

Request header:
```json
{
    "access_token": "String"
}
```

Request body:

```json
{
    "img": "base64String"
}
```

_Response (200 - OK)_

```json
{
    "Message": "Success upload image"
}
```


&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```


