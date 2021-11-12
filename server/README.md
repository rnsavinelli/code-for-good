# Candidate lookup Service

## Usage

All responses will have the form:

```json
{
    "data": "Mixed type holding the content of the response",
    "message": "Description of what happened"
}
```

Subsequent response definitions will only detail the expected value of the `data field`.

## List all users

**Definition**

`GET /users`

**Response**

- `200 OK` on success

```json
[
    {
        "id": "000000000000",
        "name": "Roberto Nicolas",
        "surname": "Savinelli"
        ...
    },
    {
        "id": "000000000001",
        "name": "Gonzalo",
        "surname": "Castro"
        ...
    }
]
```

## Lookup user details

`GET /user/<userid>`

**Response**

- `404 Not Found` if the user does not exist.
- `200 OK` on success.

```json
{
    "id": "000000000000",
    "username": "rnsavinelli",
    "name": "Roberto Nicolas",
    "surname": "Savinelli"
    ...
},
```

## Registering a new job offer

**Definition**

`POST /joboffer`

**Arguments**

- `"title":string` position title (eg. software developer).
- `"company":string` company name
- `"description":string` job description.
- `"requisites":string` job requisites.
- `"modality":string` job modality (eg. full-time).
- `"salary":string` offered salary.

**Response**

- `201 Created` on success.

```json
{
    "id": "000000000000",
    "title": "Software Engineer",
    "company": "J. P. Morgan",
    "description": "",
    "requisites": "Engineering degree, etc..",
    "modality": "Full-time",
    "salary": ""
}
```

## Delete a job offer

**Definition**

`DELETE /joboffer/<offerid>`

**Response**

- `404 Not Found` if the offer does not exist.
- `204 No Content` on success.
