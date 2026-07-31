# Base URL

Local:

```text
http://localhost:3000
```

Vercel:

```text
https://YOUR-PROJECT.vercel.app
```

For every protected request:

```text
Authorization: Bearer YOUR_TOKEN
```

## 1. Health

```http
GET /api/health
```

## 2. Login as automatically-created super admin

```http
POST /api/auth/login
Content-Type: application/json
```

```json
{
  "email": "peter@gmail.com",
  "password": "YOUR_SUPERADMIN_PASSWORD"
}
```

Save `token` from the response.

## 3. Signup normal user

```http
POST /api/auth/signup
Content-Type: application/json
```

```json
{
  "username": "michael",
  "email": "michael@gmail.com",
  "password": "Michael123"
}
```

Save the returned user `_id`.

## 4. Login normal user

```http
POST /api/auth/login
Content-Type: application/json
```

```json
{
  "email": "michael@gmail.com",
  "password": "Michael123"
}
```

## 5. Get all users — super-admin token

```http
GET /api/users
Authorization: Bearer SUPER_ADMIN_TOKEN
```

## 6. Get one user

```http
GET /api/users/USER_ID
Authorization: Bearer TOKEN
```

## 7. Create admin — form-data, super-admin token

```http
POST /api/users
Authorization: Bearer SUPER_ADMIN_TOKEN
Content-Type: multipart/form-data
```

Form-data fields:

```text
username = admin1
email = admin1@gmail.com
password = Admin1234
img = choose an image file (optional)
```

## 8. Replace user with PUT

```http
PUT /api/users/USER_ID
Authorization: Bearer TOKEN
Content-Type: application/json
```

```json
{
  "username": "michael-updated",
  "email": "michael2@gmail.com",
  "password": "Michael567",
  "image": null
}
```

## 9. Update part of user with PATCH

```http
PATCH /api/users/USER_ID
Authorization: Bearer TOKEN
Content-Type: application/json
```

```json
{
  "username": "new-name"
}
```

## 10. Create group

```http
POST /api/groups
Authorization: Bearer TOKEN
Content-Type: application/json
```

```json
{
  "name": "Node Group"
}
```

Save the returned group `_id`.

## 11. Add user with write permission

```http
POST /api/groups/GROUP_ID/manage
Authorization: Bearer GROUP_ADMIN_TOKEN
Content-Type: application/json
```

```json
{
  "userId": "USER_ID",
  "action": "add",
  "permission": "write"
}
```

## 12. Change user to read-only

```http
POST /api/groups/GROUP_ID/manage
Authorization: Bearer GROUP_ADMIN_TOKEN
Content-Type: application/json
```

```json
{
  "userId": "USER_ID",
  "action": "add",
  "permission": "read"
}
```

## 13. Remove user from group

```http
POST /api/groups/GROUP_ID/manage
Authorization: Bearer GROUP_ADMIN_TOKEN
Content-Type: application/json
```

```json
{
  "userId": "USER_ID",
  "action": "remove"
}
```

## 14. Create public post — form-data

```http
POST /api/posts
Authorization: Bearer TOKEN
Content-Type: multipart/form-data
```

Form-data:

```text
title = First public post
content = Hello from Node.js
images = choose image 1 (optional)
images = choose image 2 (optional)
```

Do not send `groupId` for a public post.

## 15. Create group post — form-data

```http
POST /api/posts
Authorization: Bearer TOKEN
Content-Type: multipart/form-data
```

Form-data:

```text
title = Group post
content = Only group members can view this
groupId = GROUP_ID
images = choose image (optional)
```

## 16. Get visible posts

```http
GET /api/posts
Authorization: Bearer TOKEN
```

## 17. Get posts written by one user

```http
GET /api/posts/users/USER_ID/posts
Authorization: Bearer TOKEN
```

## 18. Update post

```http
PATCH /api/posts/POST_ID
Authorization: Bearer POST_OWNER_TOKEN
Content-Type: application/json
```

```json
{
  "title": "Updated title",
  "content": "Updated content"
}
```

## 19. Delete post

```http
DELETE /api/posts/POST_ID
Authorization: Bearer POST_OWNER_TOKEN
```

## 20. Delete user — admin or super-admin

```http
DELETE /api/users/USER_ID
Authorization: Bearer SUPER_ADMIN_TOKEN
```
