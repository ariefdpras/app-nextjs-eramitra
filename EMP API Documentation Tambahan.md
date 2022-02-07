# EMP API Documentation

## BASE URL

```
https://svr.eramitra.com
```

----------------------------------

## Product Application (create)

* ### URL

```
/productapplication
```

* ### Description:

  `API for create many to many relation between product and application`

* ### Method:

  `POST`

* ### URL Params

  `None`

* ### Headers

  `access_token`

* ### Data Params

```json
{
    "ProductId": 1,
    "ApplicationId": 1
}
```

* ### Success Response:

`Status: 200`

```json
{
    "msg": "ProductApplication is created"
}
```

* ### Error Response:

`Status: 400`

```json
{
    "msg": "ProductId is needed, ApplicationId is needed"
}
```

`Status: 401`

```json
{
    "msg": "Authorization failed, please login as admin" or "Authentication failed"
}
```

`Status: 500`

```json
{
    "msg": "Internal server error"
}
```

----------------------------------

## Product Application (delete)

* ### URL

```
/productapplication
```

* ### Description:

  `API for delete many to many relation between product and application`

* ### Method:

  `DELETE`

* ### URL Query

  `ProductId, ApplicationId`

* ### Headers

  `access_token`

* ### Success Response:

`Status: 200`

```json
{
    "msg": "ProductApplication is deleted"
}
```

* ### Error Response:

`Status: 401`

```json
{
    "msg": "Authorization failed, please login as admin" or "Authentication failed"
}
```

`Status: 500`

```json
{
    "msg": "Internal server error"
}
```

----------------------------------

## Product Industry (create)

* ### URL

```
/productindustry
```

* ### Description:

  `API for create many to many relation between product and industry

* ### Method:

  `POST`

* ### URL Params

  `None`

* ### Headers

  `access_token`

* ### Data Params

```json
{
    "ProductId": 1,
    "IndustryId": 1
}
```

* ### Success Response:

`Status: 200`

```json
{
    "msg": "ProductIndustry is created"
}
```

* ### Error Response:

`Status: 400`

```json
{
    "msg": "ProductId is needed, IndustryId is needed"
}
```

`Status: 401`

```json
{
    "msg": "Authorization failed, please login as admin" or "Authentication failed"
}
```

`Status: 500`

```json
{
    "msg": "Internal server error"
}
```

----------------------------------

## Product Industry (delete)

* ### URL

```
/productindustry
```

* ### Description:

  `API for delete many to many relation between product and application`

* ### Method:

  `DELETE`

* ### URL Query

  `ProductId, IndustryId

* ### Headers

  `access_token`

* ### Success Response:

`Status: 200`

```json
{
    "msg": "ProductIndustry is deleted"
}
```

* ### Error Response:

`Status: 401`

```json
{
    "msg": "Authorization failed, please login as admin" or "Authentication failed"
}
```

`Status: 500`

```json
{
    "msg": "Internal server error"
}
```

----------------------------------

## Product Picture (create)

* ### URL

```
/productpicture
```

* ### Description:

  `API for create many to many relation between product and picture

* ### Method:

  `POST`

* ### URL Params

  `None`

* ### Headers

  `access_token`

* ### Data Params

```json
{
    "ProductId": 1,
    "PictureId": 1
}
```

* ### Success Response:

`Status: 200`

```json
{
    "msg": "ProductPicture is created"
}
```

* ### Error Response:

`Status: 400`

```json
{
    "msg": "ProductId is needed, PictureId is needed"
}
```

`Status: 401`

```json
{
    "msg": "Authorization failed, please login as admin" or "Authentication failed"
}
```

`Status: 500`

```json
{
    "msg": "Internal server error"
}
```

----------------------------------

## Picture (delete)

* ### URL

```
/picture
```

* ### Description:

  `API for delete picture and automatically delete picture on file`

* ### Method:

  `DELETE`

* ### URL Params

  `PictureId`

* ### Headers

  `access_token`

* ### Success Response:

`Status: 200`

```json
{
    "msg": "Picture is deleted"
}
```

* ### Error Response:

`Status: 401`

```json
{
    "msg": "Authorization failed, please login as admin" or "Authentication failed"
}
```

`Status: 500`

```json
{
    "msg": "Internal server error"
}
```

## Notes Tamabahan

* ### Product

  `New Response`

```json
{
    "totalItems": 2,
    "data": [
        {
            "id": 2,
            "name": "uat edited",
            "description": "uat purposes edited",
            "price": 20000000,
            "brochure": "link brochure",
            "status": "active",
            "highlight": "inactive",
            "video": "link video",
            "Brand": {
                "id": 5,
                "name": "Picarro",
                "PictureId": 4,
                "highlight": "inactive",
                "createdAt": "2021-11-05T15:50:33.528Z",
                "updatedAt": "2022-01-26T12:43:43.426Z"
            },
            "Applications": [
                {
                    "id": 1,
                    "name": "Density",
                    "highlight": "active",
                    "createdAt": "2021-11-05T15:50:33.535Z",
                    "updatedAt": "2022-01-26T12:50:16.175Z"
                },
                {
                    "id": 2,
                    "name": "Surface Area & Porosity",
                    "highlight": "inactive",
                    "createdAt": "2021-11-05T15:50:33.535Z",
                    "updatedAt": "2022-01-26T12:42:12.883Z"
                }
            ],
            "Industries": [
                {
                    "id": 1,
                    "name": "Food & Beverage",
                    "highlight": "inactive",
                    "createdAt": "2021-11-05T15:50:33.531Z",
                    "updatedAt": "2022-01-26T12:42:21.019Z"
                }
            ],
            "Pictures": [
                {
                    "id": 17,
                    "name": "uploads/sample.png",
                    "createdAt": "2022-01-25T14:19:43.910Z",
                    "updatedAt": "2022-01-25T14:19:43.910Z"
                }
            ],
            "createdAt": "2021-11-05T15:50:33.541Z",
            "updatedAt": "2022-01-26T12:40:49.886Z"
        },
        {
            "id": 10,
            "name": "aaaaaa",
            "description": "uat purposes edited",
            "price": 20000000,
            "brochure": "link brochure",
            "status": "active",
            "highlight": "inactive",
            "video": "link video",
            "Brand": {
                "id": 5,
                "name": "Picarro",
                "PictureId": 4,
                "highlight": "inactive",
                "createdAt": "2021-11-05T15:50:33.528Z",
                "updatedAt": "2022-01-26T12:43:43.426Z"
            },
            "Applications": [
                {
                    "id": 7,
                    "name": "UAT",
                    "highlight": "active",
                    "createdAt": "2022-01-26T12:44:32.629Z",
                    "updatedAt": "2022-01-26T12:44:32.629Z"
                },
                {
                    "id": 1,
                    "name": "Density",
                    "highlight": "active",
                    "createdAt": "2021-11-05T15:50:33.535Z",
                    "updatedAt": "2022-01-26T12:50:16.175Z"
                }
            ],
            "Industries": [
                {
                    "id": 7,
                    "name": "UAT",
                    "highlight": "inactive",
                    "createdAt": "2022-01-26T13:06:11.334Z",
                    "updatedAt": "2022-01-26T13:06:11.334Z"
                }
            ],
            "Pictures": [
                {
                    "id": 24,
                    "name": "product-1643198954716.png",
                    "createdAt": "2022-01-26T12:09:14.724Z",
                    "updatedAt": "2022-01-26T12:09:14.724Z"
                },
                {
                    "id": 23,
                    "name": "product-1643198864484.png",
                    "createdAt": "2022-01-26T12:07:44.496Z",
                    "updatedAt": "2022-01-26T12:07:44.496Z"
                }
            ],
            "createdAt": "2022-01-26T11:52:27.127Z",
            "updatedAt": "2022-01-26T12:40:49.887Z"
        }
    ],
    "totalPages": 1,
    "currentPage": 0
}
```

* ### Upload

`New Response:`

```json
{
    "id": 27,
    "path": "picture-1643530505651.png"
}
```

* ### New field: highlight

`Brand, Application, Industry, and Product has highlight. Highlight should be filled with: 'active' or 'inactive'. If empty, the default would be 'inactive'`

* ### img/cover => PictureId

`For one to many relation of picture body, change img/cover to ProductId. Example for brand post body:`

```json
{
    "name": "Brand Name",
    "PictureId": 1,
    "highlight": "active"
}
```

* ### Catalogue

`Base URL: /catalogue`

`Response:`

```json
{
    "totalItems": 1,
    "data": [
        {
            "id": 1,
            "title": "Catalogue 1",
            "url": "some links",
            "status": "active",
            "PictureId": 1,
            "createdAt": "2022-01-30T08:22:29.829Z",
            "updatedAt": "2022-01-30T08:22:29.829Z",
            "Picture": {
                "id": 1,
                "name": "uploads/sample.png",
                "createdAt": "2022-01-25T13:56:00.137Z",
                "updatedAt": "2022-01-25T13:56:00.137Z"
            }
        }
    ],
    "totalPages": 1,
    "currentPage": 0
}

OR

[
    {
        "id": 1,
        "title": "Catalogue 1",
        "url": "some links",
        "status": "active",
        "PictureId": 1,
        "createdAt": "2022-01-30T08:22:29.829Z",
        "updatedAt": "2022-01-30T08:22:29.829Z"
    }
]
```

`Body:`

```json
{
    "title": "Catalogue 1",
    "url": "some links",
    "PictureId": 1
}
```