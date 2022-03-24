# Hacktiv Music API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`

## 1. POST /register

- body:

```json
{
  "email": "string",
  "password": "string"
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
  "message": "Please enter your email"
}
OR
{
  "message": "Please enter your password"
}
OR
{
  "message": "Must be a valid email"
}
OR
{
  "message": "Minimum 5 digit"
}
```
## 2. POST /prelogin
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

_Response (501 - Bad Request)_

```json
{
  "message": "Please enter your email"
}
OR
{
  "message": "Please enter your password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```
## 3. POST /login
Request:

- body:

```json
{
  "code":"string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string",
    "expiresIn": "string",

}
```

## 4. POST /refresh
Request:

_Response (200 - OK)_

```json
{
  "access_token": "string",
    "expiresIn": "string",

}
```
## 5. GET /lyric
Request:
-query:
```json
{
"artist":"string",
"track":"string"
```
_Response (200 - OK)_

```json
{
  "lirik": "string"

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