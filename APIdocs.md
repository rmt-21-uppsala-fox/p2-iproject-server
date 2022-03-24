MuBuYo!

List of endpoints!

- `POST /paintings`
- `POST /wikis`

## 1. POST /paintings

Obtain all paintings data needed

Request:

- body:

```json
{
  "URL_0": "string",
  "URL_1": "string",
  "URL_2": "string"
}
```

_Response (201 - Created)_

```json
{
  "imageData_0": "string",
  "imageData_1": "string",
  "imageData_2": "string"
}
```

## 2. POST /wikis

Obtain all wikipedia's data needed

_Response (201 - Created)_

```json
{
  "data0": "string",
  "data1": "string",
  "data2": "string"
}
```
