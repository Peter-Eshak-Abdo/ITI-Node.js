POST http://localhost:3000/api/auth/login
{
    "email": "peter@gmail.com",
    "password": "Peter123"
}

{
    "message": "User logged in successfully",
    "user": {
        "_id": "6a6bccdcc259da2707e56862",
        "username": "peter",
        "email": "peter@gmail.com",
        "password": "$2b$10$1NqYS.vbKOsQpYkg7CAYG.kto4vIQfeO5ZbDGQKXUXpo2.jj20jIS",
        "role": "super-admin",
        "createdAt": "2026-07-30T22:14:52.602Z",
        "updatedAt": "2026-07-30T22:14:52.602Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTZiY2NkY2MyNTlkYTI3MDdlNTY4NjIiLCJpYXQiOjE3ODU0NTI2NDQsImV4cCI6MTc4NjY2MjI0NH0.EFH5PakAvVu6X7YAb6sQx1yplaRnR6JwZG3R80f7aaM"
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTZiY2NkY2MyNTlkYTI3MDdlNTY4NjIiLCJpYXQiOjE3ODU0NTU3NjEsImV4cCI6MTc4NjY2NTM2MX0.Cd2a0OHqWxPlw6PIbBDYjd9Zl7EnzTDlIL_TRQJqdDQ"
}
//----------------------------------------------------------------------------------
POST http://localhost:3000/api/auth/signup

{
    "username":"abdoGabra",
    "email": "abdo@gmail.com",
    "password": "Abdo123456"
}

{
    "message": "User created successfully",
    "userObject": {
        "username": "abdoGabra",
        "email": "abdo@gmail.com",
        "role": "user",
        "_id": "6a6be4486f632e1564d11f32",
        "createdAt": "2026-07-30T23:54:48.457Z",
        "updatedAt": "2026-07-30T23:54:48.457Z",
        "__v": 0
    }
}

<!-- npx plugins add vercel/vercel-plugin -->
