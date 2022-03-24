# Natura iproject API Documentation

## Models :

_Menu_

```
- name : string
- descriptiopm : string
- price : integer
- image : string
- category : string
- stock : integer
```

_Order_

```
- customerName : string
- phoneNumber : string
- totalPerson : integer
- orderName : string
- quantity : integer
- totalPrice : integer
- paymentStatus : string
- MenuId : integer
```

&nbsp;

## Endpoints :

List of available endpoints:

- `GET /menus`
- `GET /orders`
- `POST /neworder`
- `POST /payment`
- `POST /receipt`

&nbsp;

## 1. GET /menus

Description:
- get all menus

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "Almond Croissant",
        "description": "Rich, almond flan enveloped in a croissant, then topped with sliced almonds.",
        "price": 40000,
        "image": "files/1_Almond_Croissant.jpg",
        "category": "Food",
        "stock": 50,
        "createdAt": "2022-03-22T18:22:58.368Z",
        "updatedAt": "2022-03-22T18:22:58.368Z"
    },
    {
        "id": 2,
        "name": "Cheese Bagels",
        "description": "A New York style bagel topped with Asiago cheese, poppy and sesame seeds, onion and garlic.",
        "price": 25000,
        "image": "files/2_Cheese_Bagels.jpg",
        "category": "Food",
        "stock": 30,
        "createdAt": "2022-03-22T18:22:58.368Z",
        "updatedAt": "2022-03-22T18:22:58.368Z"
    },
    {
        "id": 3,
        "name": "Tuna Puff",
        "description": "Buttery flaky savory tuna puff pastry",
        "price": 30000,
        "image": "files/3_Tuna_Puff.jpg",
        "category": "Food",
        "stock": 30,
        "createdAt": "2022-03-22T18:22:58.368Z",
        "updatedAt": "2022-03-22T18:22:58.368Z"
    },
    ...
]
```

&nbsp;

## 2. GET /orders

Description:
- get all order

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "customerName": "ogy",
        "phoneNumber": "0874231256",
        "totalPerson": 2,
        "orderName": "OGY1272332022",
        "quantity": 1,
        "totalPrice": 40000,
        "paymentStatus": "Paid",
        "MenuId": 1,
        "createdAt": "2022-03-22T18:27:22.048Z",
        "updatedAt": "2022-03-22T18:28:40.636Z"
    },
    {
        "id": 2,
        "customerName": "ogy",
        "phoneNumber": "0874231256",
        "totalPerson": 2,
        "orderName": "OGY1272332022",
        "quantity": 1,
        "totalPrice": 20000,
        "paymentStatus": "Paid",
        "MenuId": 2,
        "createdAt": "2022-03-22T18:27:22.060Z",
        "updatedAt": "2022-03-22T18:28:40.636Z"
    },
    ...
]
```

&nbsp;

## 3. POST /neworder

Description:
- create new order

Request:

- body: 

```json
{
    "customerName" : "user",
    "phoneNumber" : "08123456",
    "totalPerson" : 2,
    "orders" : [
        {
            "MenuId" : 1,
            "quantity" : 1,
            "totalPrice" : 40000
        },
        {
            "MenuId" : 2,
            "quantity" : 1,
            "totalPrice" : 20000
        }
    ]
}  
```

_Response (200 - OK)_

```json
{
    "orderName": "USER11262432022"
}
```

&nbsp;

## 4. POST /payment

Description:
- payment ewallet xendit

Request:

- body:

```json
{
    "orderName": "USER11262432022",
    "amount": 60000
}
```

_Response (200 - OK)_

```json
{
    "id": "ewc_96877878-3a71-4e49-88db-56087b5e7659",
    "business_id": "62361394c5e3bfa790d8d938",
    "reference_id": "BUSY23572332022",
    "status": "PENDING",
    "currency": "IDR",
    "charge_amount": 60000,
    "capture_amount": 60000,
    "refunded_amount": null,
    "checkout_method": "ONE_TIME_PAYMENT",
    "channel_code": "ID_SHOPEEPAY",
    "channel_properties": {
        "success_redirect_url": "https://natura-iproject.web.app/summary"
    },
    "actions": {
        "desktop_web_checkout_url": null,
        "mobile_web_checkout_url": null,
        "mobile_deeplink_checkout_url": "https://ewallet-mock-connector.xendit.co/v1/ewallet_connector/checkouts?token=7c9f6c87-47fa-4400-ad61-4927ee835082",
        "qr_checkout_string": "test-qr-string"
    },
    "is_redirect_required": true,
    "callback_url": "https://natura-iproject.herokuapp.com/receipt",
    "created": "2022-03-24T04:29:50.413587Z",
    "updated": "2022-03-24T04:29:50.413587Z",
    "void_status": null,
    "voided_at": null,
    "capture_now": true,
    "customer_id": null,
    "payment_method_id": null,
    "failure_code": null,
    "basket": null,
    "metadata": {
        "branch_code": "tree_branch"
    }
}
```

&nbsp;

## 5. POST /receipt

Description:
- update payment status

Request:

- body:

```json
{
  "orderName": "USER11262432022"
}
```

_Response (200 - OK)_

```json
{
    "transaction": [
        {
            "customerName": "user",
            "orderName": "USER11262432022",
            "phoneNumber": "08123456",
            "paymentStatus": "Paid",
            "totalPrice": "60000"
        }
    ],
    "message": "Receipt sent! Show it to our crew to receive your order, Thanks!"
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