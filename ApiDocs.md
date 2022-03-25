# API DOCS

list available routes

```
[method] /endpoints                 --> Description

[post]      /register                   --> Register new user to database and firebase auth
[post]      /login                      --> Login user to use all feature
[get]       /logout                     --> logout for user
[get]       /meme/post                  --> fetch all post from database
[get]       /meme/category              --> fetch all category from database
[post]      /meme/upload                --> upload photos or gif to database
[delete]    /meme/comment               --> delete comment from database
[get]       /meme/post/:postId          --> fetch one specific post and comment from database
[post]      /meme/post/:postId          --> add comment to specific post in database
[patch]     /meme/post/:postId          --> change one specific comment in specific post in database
[delete]    /meme/post/:postId/delete   --> delete one specific post
[patch]     /meme/post/:postId/edit     --> change caption in one specific post
```

---

[post] /register
<br>
request
<br>
body

```json
{
  "email": "hello@mail.com",
  "password": "minimal8char",
  "username": "mustBeUnique",
  "profilePict": "pictureUrl"
}
```

<br>
respond

```json
{
  "message": "User Created"
}
```

<br>
Error respond

```json
{
    "message": "Password is too weak",
    OR
    "message": "Internal Server Error"
}
```

---

<br>

[post] /login

<br>
request
<br>

body

```json
{
  "email": "hello@mail.com",
  "password": "minimal8char"
}
```

<br>
respond

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJNb21vMTEiLCJ1aWQiOiJQTmZubW5pUTUyTkVLSWlLaXBNa2ptdXFVMjMyIiwiaWF0IjoxNjQ4MTc2NjQxfQ.LJgeEd3tqeqQmzIdnCM51_XJuE300ZnvoBaf9N4X9X8",
  "id": 2,
  "username": "mustBeUnique"
}
```

<br>
Error respond

```json
{
  "message": "Invalid email/password"
}
```

---

[get] /logout

respond

```json
{
  "message": "Logout success"
}
```

---

[get] /meme/post

request query (optional)

```
search
category
page
```

<br>
respond

```
[
    {
        "id": 13,
        "imgUrl": "https://firebasestorage.googleapis.com/v0/b/memelord-iproject.appspot.com/o/User%2FVjMXsBSl0qaIHH544thLE5YZdQt1%2F763c08414ea1bbba8f0749b67243fa91_t_1648158284191.jpg?alt=media&token=642a24a4-fc01-4efd-a68f-8dca6ec407de",
        "caption": "HUHUUUU",
        "fileLocation": "/User/VjMXsBSl0qaIHH544thLE5YZdQt1/763c08414ea1bbba8f0749b67243fa91_t_1648158284191.jpg",
        "UserId": 1,
        "categoryId": 1,
        "createdAt": "2022-03-24T21:44:46.283Z",
        "updatedAt": "2022-03-24T23:43:41.279Z",
        "Category": {
            "id": 1,
            "name": "Memes",
            "createdAt": "2022-03-24T01:27:50.446Z",
            "updatedAt": "2022-03-24T01:27:50.446Z"
        }
    },
    {
        "id": 12,
        "imgUrl": "https://firebasestorage.googleapis.com/v0/b/memelord-iproject.appspot.com/o/User%2FVjMXsBSl0qaIHH544thLE5YZdQt1%2FWallpaper_1648090570012.png?alt=media&token=66b9a856-004d-4aa4-83f5-5de74e6755e1",
        "caption": "scenery",
        "fileLocation": "/User/VjMXsBSl0qaIHH544thLE5YZdQt1/Wallpaper_1648090570012.png",
        "UserId": 1,
        "categoryId": 2,
        "createdAt": "2022-03-24T02:56:14.264Z",
        "updatedAt": "2022-03-24T02:56:14.264Z",
        "Category": {
            "id": 2,
            "name": "Random",
            "createdAt": "2022-03-24T01:27:50.446Z",
            "updatedAt": "2022-03-24T01:27:50.446Z"
        }
...
```

---

[get] /meme/category

respond

```json
[
    {
        "id": 1,
        "name": "Memes",
        "createdAt": "2022-03-24T01:27:50.446Z",
        "updatedAt": "2022-03-24T01:27:50.446Z"
    },
    {
        "id": 2,
        "name": "Random",
        "createdAt": "2022-03-24T01:27:50.446Z",
        "updatedAt": "2022-03-24T01:27:50.446Z"
    },
    {
        "id": 3,
        "name": "Animals",
        "createdAt": "2022-03-24T01:27:50.446Z",
        "updatedAt": "2022-03-24T01:27:50.446Z"
    },
...
```

---

[post] /meme/upload

request form data

```json
{
  "file": "type file",
  "caption": "sometext",
  "categoryId": 0
}
```

request headers

```json
{
  "access_token": "somestringwithhashedcode"
}
```

<br>

respond

```json
{
  "message": "Post Created"
}
```

<br>

---

[delete] /meme/comment

request body

```json
{
  "commentId": 1
}
```

request header

```json
{
  "access_token": "someaccesstokenwithcode"
}
```

respond

```json
{
  "message": "comment has been deleted"
}
```

---

[get] /meme/post/:postId

respond

```json
{
  "postDetail": {
    "id": 2,
    "imgUrl": "https://firebasestorage.googleapis.com/v0/b/memelord-iproject.appspot.com/o/User%2FVjMXsBSl0qaIHH544thLE5YZdQt1%2F19521-darth-vader-1680x1050-digital-art-wallpaper_1648090483852.jpg?alt=media&token=26f92212-5e60-466e-b161-316b6e0e16f8",
    "caption": "mask of maddnes",
    "fileLocation": "/User/VjMXsBSl0qaIHH544thLE5YZdQt1/19521-darth-vader-1680x1050-digital-art-wallpaper_1648090483852.jpg",
    "UserId": 1,
    "categoryId": 2,
    "createdAt": "2022-03-24T02:54:47.615Z",
    "updatedAt": "2022-03-24T02:54:47.615Z",
    "User": {
      "id": 1,
      "email": "hello@mail.com",
      "firebaseUID": "VjMXsBSl0qaIHH544thLE5YZdQt1",
      "username": "Jack",
      "profilePict": "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
      "createdAt": "2022-03-24T02:50:38.315Z",
      "updatedAt": "2022-03-24T02:50:38.315Z"
    },
    "Category": {
      "id": 2,
      "name": "Random",
      "createdAt": "2022-03-24T01:27:50.446Z",
      "updatedAt": "2022-03-24T01:27:50.446Z"
    }
  },
  "comments": []
}
```

respond error

```json
{
  "postDetail": null,
  "comments": []
}
```

---

[post] /meme/post/:postId

request params

```json
{
  "postId": 1
}
```

request body

```json
{
  "comment": "comment string"
}
```

request headers

```json
{
  "access_token": "tokenwithsomecode"
}
```

respond

```json
{
  "message": "Comment created"
}
```

---

[patch] /meme/post/:postId

request body

```json
{
  "comment": "somecomment",
  "commentId": 1
}
```

request params

```json
{
  "postId": 1
}
```

request headers

```json
{
  "access_token": "somestringwithaccesstoken"
}
```

respond

```json
{
  "message": "Comment updated"
}
```

error respond

```json
{
    "message": "Post Not Found",
    OR
    "meesage": "Comment Not Found"
}
```

---

[delete] /meme/post/:postId/delete

request body

```json
{
  "commentId": 1
}
```

request headers

```json
{
  "access_token": "somestringwithaccesstoken"
}
```

request params

```json
{
  "postId": 1
}
```

respond

```json
{
  "message": "comment has been deleted"
}
```

error respond

```json
{
    "message": "Post Not Found",
    OR
    "meesage": "Comment Not Found"
}
```

---

[patch] /meme/post/:postId/edit

request body

```json
{
  "caption": "somecomment",
  "categoryId": 1
}
```

request params

```json
{
  "postId": 1
}
```

request headers

```json
{
  "access_token": "someaccesstoken"
}
```

respond

```json
{
  "message": "Post has been updated"
}
```

error respond

```json
{
    "message": "Post Not Found",
    OR
    "meesage": "Comment Not Found"
}
```

---

global error

```json
{
    "InternalServerError"
    "Forbidden"
}
```
