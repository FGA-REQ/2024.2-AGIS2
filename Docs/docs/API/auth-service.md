---
sidebar_position: 1
sidebar_label: "Auth Service"
---

# Auth Service API

- POST /admin
    - Roles: ["admin]
    - Payload:
    ```json
        {
            "name": <string>,
            "email": <string>,
            "CPF": <string>,
            "password": <string>,
        }
    ```
- PATCH /admin/:id'
    - Roles: ["admin]
    - Payload:
    ```json
        {
            "name": <string?>,
            "email": <string?>,
            "CPF": <string?>,
            "password": <string?>,
        }
    ```

- GET /admin
    - Roles: ["admin"]
    - Response:
    ```json
        [
            {
            "id": <int>,           
            "name": <string>,        
            "email": <string>,     
            "CPF": <string>,                         
            }
        ]
    ```
