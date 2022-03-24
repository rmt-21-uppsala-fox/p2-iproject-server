## Endpoints :

List of available endpoints:

- `GET /walletcards`
- `GET /cheapShark`

Routes below need authentication:

- `POST /xendit-callback`
- `GET /mycarts`
- `GET /mycarts/checkout`
- `POST /mycarts/:walletCardId`

Routes below need authentication & authorization:

- `PATCH /mycarts/:id`
- `PATCH /mycarts/invoice/:invoiceId`

&nbsp;

## 1. GET /walletcards

_Response (200 - Ok)_

```json
[
  {
    "id": 1,
    "name": "Steam Wallet 12000",
    "imageUrl": "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
    "price": 12000,
    "createdAt": "2022-03-24T02:05:54.607Z",
    "updatedAt": "2022-03-24T02:05:54.607Z"
  },
  {
    "id": 2,
    "name": "Steam Wallet 45000",
    "imageUrl": "https://drive.google.com/uc?id=1vMJl1p-QC3ZoewY6n2tyk9hkbkygZSj4",
    "price": 45000,
    "createdAt": "2022-03-24T02:05:54.607Z",
    "updatedAt": "2022-03-24T02:05:54.607Z"
  },
  ...
]
```

&nbsp;

## 2. GET /cheapShark

_Response (200 - Ok)_

```json
[
    {
        "internalName": "ZOMBIENIGHTTERROR",
        "title": "Zombie Night Terror",
        "metacriticLink": "/game/pc/zombie-night-terror",
        "dealID": "kfwmtdgaQCWWgiQOf5nL4d5%2BMuEwy%2Bo5avHGyMJVF4c%3D",
        "storeID": "1",
        "gameID": "154629",
        "salePrice": "1.29",
        "normalPrice": "12.99",
        "isOnSale": "1",
        "savings": "90.069284",
        "metacriticScore": "81",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "93",
        "steamRatingCount": "2241",
        "steamAppID": "416680",
        "releaseDate": 1468972800,
        "lastChange": 1647896737,
        "dealRating": "9.4",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/416680/capsule_sm_120.jpg?t=1582640712"
    },
    {
        "internalName": "DEUSEXHUMANREVOLUTIONDIRECTORSCUT",
        "title": "Deus Ex: Human Revolution - Director's Cut",
        "metacriticLink": "/game/pc/deus-ex-human-revolution---directors-cut",
        "dealID": "HhzMJAgQYGZ%2B%2BFPpBG%2BRFcuUQZJO3KXvlnyYYGwGUfU%3D",
        "storeID": "1",
        "gameID": "102249",
        "salePrice": "2.99",
        "normalPrice": "19.99",
        "isOnSale": "1",
        "savings": "85.042521",
        "metacriticScore": "91",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "92",
        "steamRatingCount": "20120",
        "steamAppID": "238010",
        "releaseDate": 1382400000,
        "lastChange": 1647559189,
        "dealRating": "9.2",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/capsule_sm_120.jpg?t=1619788192"
    },
    ...
]
```

&nbsp;

## 3. POST /xendit-callback

Request:

- headers:

```json
{
  "x-callback-token": "string"
}
```

_Response (200 - Ok)_

```json
{
  "message": "OK"
}
```

&nbsp;

## 4. GET /mycarts

Request:

- headers:

```json
{
  "Authorization": "Bearer token"
}
```

_Response (200 - Ok)_

```json
{
  "count": "number",
  "myCart": [
    {
      "id": "number",
      "WalletCardId": "number",
      "UserUID": "string",
      "status": "string",
      "invoiceId": "any",
      "createdAt": "string",
      "updatedAt": "string",
      "WalletCard": {
        "id": "number",
        "name": "string",
        "imageUrl": "string",
        "price": "number",
        "createdAt": "string",
        "updatedAt": "string"
      }
    }
  ],
  "totalPrice": "number"
}
```

&nbsp;

## 5. GET /mycarts/checkout

Request:

- headers:

```json
{
  "Authorization": "Bearer token"
}
```

_Response (200 - Ok)_

```json
{
  "id": "string",
  "external_id": "string",
  "user_id": "string",
  "status": "string",
  "merchant_name": "string",
  "merchant_profile_picture_url": "string",
  "amount": "number",
  "payer_email": "string",
  "expiry_date": "string",
  "invoice_url": "string",
  "available_banks": [
    {
      "bank_code": "string",
      "collection_type": "string",
      "transfer_amount": "number",
      "bank_branch": "string",
      "account_holder_name": "string",
      "identity_amount": "number"
    },
    {
      "bank_code": "string",
      "collection_type": "string",
      "transfer_amount": "number",
      "bank_branch": "string",
      "account_holder_name": "string",
      "identity_amount": "number"
    },
    {
      "bank_code": "string",
      "collection_type": "string",
      "transfer_amount": "number",
      "bank_branch": "string",
      "account_holder_name": "string",
      "identity_amount": "number"
    },
    {
      "bank_code": "string",
      "collection_type": "string",
      "transfer_amount": "number",
      "bank_branch": "string",
      "account_holder_name": "string",
      "identity_amount": "number"
    },
    {
      "bank_code": "string",
      "collection_type": "string",
      "transfer_amount": "number",
      "bank_branch": "string",
      "account_holder_name": "string",
      "identity_amount": "number"
    }
  ],
  "available_retail_outlets": [
    {
      "retail_outlet_name": "string"
    },
    {
      "retail_outlet_name": "string"
    }
  ],
  "available_ewallets": [
    {
      "ewallet_type": "string"
    },
    {
      "ewallet_type": "string"
    },
    {
      "ewallet_type": "string"
    },
    {
      "ewallet_type": "string"
    }
  ],
  "available_direct_debits": [
    {
      "direct_debit_type": "string"
    }
  ],
  "available_paylaters": "array",
  "should_exclude_credit_card": "boolean",
  "should_send_email": "boolean",
  "success_redirect_url": "string",
  "created": "string",
  "updated": "string",
  "currency": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "You have no items in cart"
}
```

&nbsp;

## 6. POST /mycarts/:walletCardId

Request:

- params:

```json
{
  "walletCardId": "number"
}
```

- headers:

```json
{
  "Authorization": "Bearer token"
}
```

_Response (201 - Created)_

```json
{
  "id": "number",
  "UserUID": "string",
  "WalletCardId": "number",
  "status": "string",
  "updatedAt": "string",
  "createdAt": "string",
  "invoiceId": "number"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "You have a pending cart, please complete it first"
}
or
{
  "message": "You have a pending cart, please complete it first"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Cart not found"
}
```

# 7. PATCH /mycarts/:id

- params:

```json
{
  "id": "number"
}
```

- headers:

```json
{
  "Authorization": "Bearer token"
}
```

_Response (200 - Ok)_

```json
{
  "message": "Wallet card has been successfully cancelled"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Cart not found"
}
```

# 8. PATCH /mycarts/invoice/:invoiceId

- params:

```json
{
  "invoiceId": "number"
}
```

- headers:

```json
{
  "Authorization": "Bearer token"
}
```

_Response (200 - Ok)_

```json
{
  "message": "Invoice has been successfully updated to expired"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Cart not found"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not authorized"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
