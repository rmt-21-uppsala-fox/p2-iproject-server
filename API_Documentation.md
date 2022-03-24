# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /games/`
- `GET /games/next-month`
- `GET /games/:gameId`
- `POST /games/:gameId`
- `PATCH /Wishlist/:Userid`
- `DELETE /GamesCollection/:gameId`
- `GET /GamesCollection/:UserId`
- `POST /order/transaction/:gameId`

&nbsp;

## 1. POST /register

Description:

- Register new User to database

Request:

- body:

```json
{
  "email": "mail@gmail.com",
  "password": "password",
  "username": "username"
}
```

_Response (201 - Created)_

```json
{
  "access_token": "token",
  "id": 1
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email is required",
    "error": [
        "Email is required",
    ]
}
OR
{
    "message": "Password is required",
    "error": [
        "Password is required",
    ]
}
OR
{
    "message": "SequelizeUniqueConstraintError",
    "error": [
        "email must be unique"
    ]
}
```

&nbsp;

## 2. POST /login

Description:

- Login

Request:

- body:

```json
{
  "email": "mail@mail.com",
  "password": "password"
}
```

_Response (200 - Success Login)_

```json
{
  "access_token": "token",
  "id": 1
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email and password cannot be null"
}
OR
{
    "message": "Email is required",
    "error": [
        "Email is required",
    ]
}
OR
{
    "message": "Password is required",
    "error": [
        "Password is required",
    ]
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Email/Password"
}
```

&nbsp;

## 3. GET /games/

Description:

- get all games from database

Request:

- headers:

```json
{
  "accessToken": "token"
}
```

_Response (201 - Created)_

```json
{
  [
    "slug": "slug",
    "name": "name",
    "playtime": 2,
    "platforms": [{
      ...
    }],
    "stores": [{
      ...
    }]
  ]
}

```

&nbsp;

## 4. GET /games/next-month

Description:

- Get new games for next month

- headers:

```json
{
  "accessToken": "token"
}
```

- params:

_Response (200 - OK)_

```json
{
  [
    "slug": "slug",
    "name": "name",
    "playtime": 2,
    "platforms": [{
      ...
    }],
    "stores": [{
      ...
    }]
  ]
}
```

&nbsp;

## 5. GET /games/:gameId

Description:

- Get one news from database

Request :

- headers:

```json
{
  "accessToken": "your_token"
}
```

_Response (200 - OK)_

```json
{
  [
    "slug": "slug",
    "name": "name",
    "playtime": 2,
    "platforms": [{
      ...
    }],
    "stores": [{
      ...
    }]
  ]
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Title is Required"
}
OR
{
  "message": "Title must character"
}
OR
{
  "message": "Content is Required"
}
OR
{
  "message": "Content must character"
}
OR
{
  "message": "Image is Required"
}
OR
{
  "message": "Image must character"
}
```

_Response (404 - Error Not Found)_

```json
{
  "message": "News not found"
}
```

&nbsp;

## 6. GET /news/:GameId

Description:

- Update news by id

Request:

- headers:

```json
{
  "accessToken": "your_token"
}
```

- params:

```json
{
  "id": 6
}
```

- body:

```json
{
  "title": "test",
  "content": "test",
  "imgUrl": "test.jpg",
  "CategoryId": 2
}
```

_Response (200 - OK)_

```json
{
  "title": "test",
  "content": "test",
  "imgUrl": "test.jpg",
  "AuthorId": "3",
  "CategoryId": "2"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation Error",
  "error": [
    "title cannot be null",
    "content cannot be null",
    "imgUrl cannot be null",
    "AuthorId cannot be null",
    "CategoryId cannot be null"
  ]
}
```

&nbsp;

## 5. PATCH /Wishlist/:UserId

Description:

- Update status news by id

Request:

- headers:

```json
{
  "accessToken": "your_token"
}
```

- params:

```json
{
  "id": 6
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
  "msg": "News test'status success to update to be inactive"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Status Error"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "News not found"
}
```

&nbsp;

## 6. DELETE /games/GamesCollection/:gameId

Description:

- Delete news by id

Request:

- headers:

```json
{
  "accessToken": "your_token"
}
```

- body:

```json
{
  "id": 6
}
```

_Response (200 - OK)_

```json
{
  "message": "News <News title> success to delete"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "News not found"
}
```

&nbsp;

## 7. GET /games/GamesCollection/:UserId

Description:

- Get all category from database

Request:

- headers:

```json
{
  "accessToken": "your_token"
}
```

_Response (200 - OK)_

```json
{
        "id": 1,
        "name": "health",
        "createdAt": "2022-03-06T09:21:04.113Z",
        "updatedAt": "2022-03-06T09:21:04.113Z"
    },
    {
        "id": 2,
        "name": "otomotive",
        "createdAt": "2022-03-06T09:21:04.113Z",
        "updatedAt": "2022-03-06T09:21:04.113Z"
    },
    {
        "id": 3,
        "name": "sport",
        "createdAt": "2022-03-06T09:21:04.113Z",
        "updatedAt": "2022-03-06T09:21:04.113Z"
    },
    {
        "id": 4,
        "name": "travel",
        "createdAt": "2022-03-06T09:21:04.113Z",
        "updatedAt": "2022-03-06T09:21:04.113Z"
    },
    {
        "id": 5,
        "name": "finance",
        "createdAt": "2022-03-06T09:21:04.113Z",
        "updatedAt": "2022-03-06T09:21:04.113Z"
    },
    {
        "id": 6,
        "name": "news",
        "createdAt": "2022-03-06T09:21:04.113Z",
        "updatedAt": "2022-03-06T09:21:04.113Z"
    }
}
```

&nbsp;

## 10. POST order / transaction/ :gameId

Description:

- Transaction Midtrans

Request:

- body:

```json
{
  "accessToken": "your_token"
}
```

_Response (200 - Success Login)_

```json
{
  "username": "author1",
  "role": "staff",
  "accessToken": "token"
}
```

