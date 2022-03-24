# Kita Bantu API Documentation

## Endpoints :

- `POST /register`
- `POST /login`
- `GET /donation`
- `GET /donation/:id`
- `POST /xendit-callback`
- `GET /mydonation`
- `POST /donation/:DonationId`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "password": "string",
  "imageUrl": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email has been used"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Data not match"
}
```

&nbsp;

## 2. POST /login

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
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Invalid username/password"
}
```

&nbsp;

## 3. GET /donation

_Response (200 - OK)_

```json
[
  {
    "id": 4,
    "title": "Banjir bandang",
    "imageUrl": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/rumah-rumah-warga-terendam-banjir-setelah-hujan-m.jpg",
    "target": 2000000,
    "collectedFunds": 170000,
    "bankAccount": "123123123",
    "story": "telah terjadi banjir bandang...",
    "region": "Dkijakarta/jakartabarat/kalideres",
    "AdminId": 5,
    "createdAt": "2022-03-23T06:13:54.846Z",
    "updatedAt": "2022-03-24T01:19:42.636Z"
  },
  {
    "id": 5,
    "title": "kebakaran terjadi di jakarta",
    "imageUrl": "https://asset.kompas.com/crops/jvNBjAzYdpc0xqmXEBOZUfEr-84=/0x0:1200x800/750x500/data/photo/2021/11/13/618f3f82de0aa.jpg",
    "target": 3000000,
    "collectedFunds": 40000,
    "bankAccount": "123123123",
    "story": "kebakaran",
    "region": "jakarta",
    "AdminId": 5,
    "createdAt": "2022-03-23T06:13:54.846Z",
    "updatedAt": "2022-03-24T01:36:41.719Z"
  }
]
```

&nbsp;

## 4. GET /donation/:id

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
  "id": 4,
  "title": "Banjir bandang",
  "imageUrl": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/rumah-rumah-warga-terendam-banjir-setelah-hujan-m.jpg",
  "target": 2000000,
  "collectedFunds": 170000,
  "bankAccount": "123123123",
  "story": "telah terjadi banjir bandang...",
  "region": "Dkijakarta/jakartabarat/kalideres",
  "AdminId": 5,
  "createdAt": "2022-03-23T06:13:54.846Z",
  "updatedAt": "2022-03-24T01:19:42.636Z"
}
```

&nbsp;

## 5. POST /xendit-callback

- headers:

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Token required"
}
```

## 6. GET /mydonation

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
    "id": 63,
    "UserId": 3,
    "DonationId": 4,
    "nominal": 20000,
    "status": "success",
    "createdAt": "2022-03-24T01:18:07.066Z",
    "updatedAt": "2022-03-24T01:18:21.320Z",
    "Donation": {
      "id": 4,
      "title": "Banjir bandang",
      "imageUrl": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/rumah-rumah-warga-terendam-banjir-setelah-hujan-m.jpg",
      "target": 2000000,
      "collectedFunds": 170000,
      "bankAccount": "123123123",
      "story": "jadi gini",
      "region": "Dkijakarta/jakartabarat/kalideres",
      "AdminId": 5,
      "createdAt": "2022-03-23T06:13:54.846Z",
      "updatedAt": "2022-03-24T01:19:42.636Z"
    }
  },
  {
    "id": 48,
    "UserId": 3,
    "DonationId": 4,
    "nominal": 10000,
    "status": "success",
    "createdAt": "2022-03-23T19:09:08.000Z",
    "updatedAt": "2022-03-23T19:09:32.025Z",
    "Donation": {
      "id": 4,
      "title": "Banjir bandang",
      "imageUrl": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/rumah-rumah-warga-terendam-banjir-setelah-hujan-m.jpg",
      "target": 2000000,
      "collectedFunds": 170000,
      "bankAccount": "123123123",
      "story": "jadi gini",
      "region": "Dkijakarta/jakartabarat/kalideres",
      "AdminId": 5,
      "createdAt": "2022-03-23T06:13:54.846Z",
      "updatedAt": "2022-03-24T01:19:42.636Z"
    }
  },...
]
```

_Response (400 - Bad Request)_

```json
{
  "message": "Token required"
},
OR
{
  "message": "Invalid Token"
}
```

&nbsp;

## 7. POST /donation/:DonationId

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "DonationId": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 63,
    "UserId": 3,
    "DonationId": 4,
    "nominal": 20000,
    "status": "success",
    "createdAt": "2022-03-24T01:18:07.066Z",
    "updatedAt": "2022-03-24T01:18:21.320Z",
    "Donation": {
      "id": 4,
      "title": "Banjir bandang",
      "imageUrl": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/rumah-rumah-warga-terendam-banjir-setelah-hujan-m.jpg",
      "target": 2000000,
      "collectedFunds": 170000,
      "bankAccount": "123123123",
      "story": "jadi gini",
      "region": "Dkijakarta/jakartabarat/kalideres",
      "AdminId": 5,
      "createdAt": "2022-03-23T06:13:54.846Z",
      "updatedAt": "2022-03-24T01:19:42.636Z"
    }
  },
  {
    "id": 48,
    "UserId": 3,
    "DonationId": 4,
    "nominal": 10000,
    "status": "success",
    "createdAt": "2022-03-23T19:09:08.000Z",
    "updatedAt": "2022-03-23T19:09:32.025Z",
    "Donation": {
      "id": 4,
      "title": "Banjir bandang",
      "imageUrl": "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/rumah-rumah-warga-terendam-banjir-setelah-hujan-m.jpg",
      "target": 2000000,
      "collectedFunds": 170000,
      "bankAccount": "123123123",
      "story": "jadi gini",
      "region": "Dkijakarta/jakartabarat/kalideres",
      "AdminId": 5,
      "createdAt": "2022-03-23T06:13:54.846Z",
      "updatedAt": "2022-03-24T01:19:42.636Z"
    }
  },...
]
```

_Response (400 - Bad Request)_

```json
{
  "message": "Token required"
},
OR
{
  "message": "Invalid Token"
}
```
