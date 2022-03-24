# JobSeeker API Documentation

## Endpoints :

List of available endpoints:

-   `GET '/novel/title/:title'`
-   `GET /novel/title/:title/:chapter`
-   `POST /novel/api`
-   `GET /novel/:genre`
-   `GET /auth`

&nbsp;

## 1. GET /novel/:genre

Description:

-   Get all Novel by genre

Request:

-   params:

```json
{
    "genre": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "title": "HOT                            Reincarnation Of The Strongest Sword God",
        "link": "https://boxnovel.com/novel/reincarnation-of-the-strongest-sword-god-boxnovel/",
        "imgContent": "https://boxnovel.com/wp-content/uploads/2018/10/Reincarnation-Of-The-Strongest-Sword-God-110x150.jpg",
        "rating": "4.3",
        "listChapter": "Chapter 3057 24 hours ago                                                                 Chapter 3056 2 days ago"
    },
    {
        "title": "HOT                            Top Tier Providence, Secretly Cultivate for a Thousand Years",
        "link": "https://boxnovel.com/novel/top-tier-providence-secretly-cultivate-for-a-thousand-years/",
        "imgContent": "https://boxnovel.com/wp-content/uploads/2021/08/top-tier-providence-secretly-cultivate-for-a-thousand-years-110x150.jpg",
        "rating": "4.5",
        "listChapter": "Chapter 546 9 hours ago                                                                 Chapter 545 9 hours ago"
    },
    {
        "title": "Super Gene",
        "link": "https://boxnovel.com/novel/super-gene-boxnovel/",
        "imgContent": "https://boxnovel.com/wp-content/uploads/2018/07/Super-Gene-110x150.jpg",
        "rating": "4.2",
        "listChapter": "Chapter 3462 (END) October 22, 2021                                                                 Chapter 3461 October 22, 2021"
    },
    {
        "title": "HOT                            Astral Pet Store",
        "link": "https://boxnovel.com/novel/astral-pet-store-boxnovel/",
        "imgContent": "https://boxnovel.com/wp-content/uploads/2020/07/world-of-astral-pets-110x150.jpg",
        "rating": "4.2",
        "listChapter": "Chapter 1076 21 hours ago                                                                 Chapter 1075 2 days ago"
    },
    ...
]
```

&nbsp;

## 2. GET /novel/title/:title

Description:

-   Get Novel description

Request:

-   params:

```json
{
    "title": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "title": "HOT                            Reincarnation Of The Strongest Sword God",
        "link": "https://boxnovel.com/novel/reincarnation-of-the-strongest-sword-god-boxnovel/",
        "imgContent": "https://boxnovel.com/wp-content/uploads/2018/10/Reincarnation-Of-The-Strongest-Sword-God-110x150.jpg",
        "rating": "4.3",
        "listChapter": "Chapter 3057 24 hours ago                                                                 Chapter 3056 2 days ago"
    },
    {
        "title": "HOT                            Top Tier Providence, Secretly Cultivate for a Thousand Years",
        "link": "https://boxnovel.com/novel/top-tier-providence-secretly-cultivate-for-a-thousand-years/",
        "imgContent": "https://boxnovel.com/wp-content/uploads/2021/08/top-tier-providence-secretly-cultivate-for-a-thousand-years-110x150.jpg",
        "rating": "4.5",
        "listChapter": "Chapter 546 9 hours ago                                                                 Chapter 545 9 hours ago"
    },
    {
        "title": "Super Gene",
        "link": "https://boxnovel.com/novel/super-gene-boxnovel/",
        "imgContent": "https://boxnovel.com/wp-content/uploads/2018/07/Super-Gene-110x150.jpg",
        "rating": "4.2",
        "listChapter": "Chapter 3462 (END) October 22, 2021                                                                 Chapter 3461 October 22, 2021"
    },
    {
        "title": "HOT                            Astral Pet Store",
        "link": "https://boxnovel.com/novel/astral-pet-store-boxnovel/",
        "imgContent": "https://boxnovel.com/wp-content/uploads/2020/07/world-of-astral-pets-110x150.jpg",
        "rating": "4.2",
        "listChapter": "Chapter 1076 21 hours ago                                                                 Chapter 1075 2 days ago"
    },
    ...
]
```

&nbsp;

## 3. GET /novel/title/:title/:chapter

Description:

-   Get Novel per Chapter

Request:

-   params:

```json
{
    "title": "string"
}
```

````

-   params

```json
{
    "chapter": "string"
}
````

_Response (200 - OK)_

```json
{
    "Rating": "Pocket Hunting Dimension  Average  4.3 / 5   out of 420",
    "Rank": " 9th, it has 233.1K monthly views",
    "Alternative": "随身带个狩猎空间",
    "Author(s)": "Blue Sky Washing Rain",
    "Genre(s)": "Action, Adventure, Sci-fi, Xuanhuan",
    "Type": "Chinese Web Novel",
    "Tag(s)": "CHINESE NOVEL, COMPLETED",
    "imgContent": "https://boxnovel.com/wp-content/uploads/2020/04/pocket-hunting-dimension-193x278.jpg",
    "descriptionSummary": "Lu Ze transmigrated to the interstellar era two thousand years later.The previous owner of this body had lovey-dovey parents and a cute little sister. Although his cultivation talent was ordinary, his life was fulfilling. It could be said to be a dream start. Lu Ze was very happy.However, as soon as he slept, he came to a strange dimension.He almost got taken out trying to fight an one meter tall huge white rabbit. After making the arduous kill, Lu Ze found that things didn’t seem to be so simple.After killing prey in this dimension, he could get little orbs that could be used for cultivation.This was going to make him an eternal jungler.But he seemed to be able to hope for domination of the cosmos and invincibility?"
}
```

_Response (404 - jobPostedNotFound)_

```json
{
    "msg": "Error not found!"
}
```

&nbsp;

## 5. POST /novel/api

Request:

Description:

-   Get Novel from 3rd party api

-   body:

```json
{
    "mode": "search-advanced",
    "sort-mode": "update",
    "chapter-limits": [40, 0],
    "include-results": ["description", "rating"],
    "title-search-text": "renegade immortal"
}
```

_Response (200 - Resource updated)_

```json
{
  "data": [
    {
      "description": "<p><a href=\"http://shushu.com.cn/zhanxian/\"></p>\n<p>Original Chinese Web Novel</p>\n<p></a></p>",
      "extra_metadata": {
        "is_yaoi": false,
        "is_yuri": false
      },
      "id": 236,
      "latest_published": 1647956361.0,
      "rating": 6.888888888888889,
      "rating_count": 27,
      "release_count": 1060,
      "title": "Zhanxian",
      "tl_type": "translated"
    },
    {
      "description": "<p>All things start with their foundations, from the highest emperor to the lowest mortal this truth never changes. When eons have passed, when mountains crumble to dust and all that remains of the world you knew is gone what drives the will to continue striving towards the Eternal Dao. When all things are built on foundations what truth will be your Immortal foundation? As with all things the experiences of others culminate in the achievement of all, let us ponder the immortal truths of those who came before, perhaps then we can truly understand our own Dao.</p>",
      "extra_metadata": {
        "is_yaoi": false,
        "is_yuri": false
      },
      "id": 144769,
      "latest_published": 1647909370.0,
      "rating": null,
      "rating_count": null,
      "release_count": 56,
      "title": "Immortal Foundations",
      "tl_type": "oel"
    },
    ...
  ]
```

_Response (404 - jobPostedNotFound)_

```json
{
    "msg": "Error not found!"
}
```

_Response (400 - SequelizeValidationError)_

```json
{
  "msg": "Job title cannot be empty"
}
OR
{
  "msg": "Job description cannot be empty"
}
OR
{
  "msg": "image url cannot be empty"
}
OR
{
  "msg": "Job type cannot be empty"
}
```

&nbsp;

## 6. GET /auth

## Global Error

_Response (401 - Unauthorized)_

```json
{
    "msg": "login required!"
}
```

_Response (403 - Forbidden)_

```json
{
    "msg": "not Authorize"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "msg": "Internal server error"
}
```

_Response (502 - ERR_CONNECTION_REFUSED)_

```json
{
    "msg": "Error! connection refused"
}
```
