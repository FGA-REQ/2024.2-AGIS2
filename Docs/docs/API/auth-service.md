---
sidebar_position: 1
sidebar_label: "Auth Service"
---

# Auth Service API

- POST /admin
    - Roles: ["admin]
    - Payload:
    ```json---
sidebar_position: 1
sidebar_label: "Auth Service"
---

# Auth Service API

<br>

## Administrador 

### Criar um administrador

- POST /admin
    - Roles: ["admin"]
    - Payload:
        ```json
        {
            "name": "<string>",
            "email": "<string>",
            "CPF": "<string>",
            "password": "<string>"
        }
        ```
    - Response:
        ```json
        {
            "id": <int>,           
            "name": "<string>",        
            "email": "<string>",     
            "CPF": "<string>"                         
        }
        ```

### Buscar todos os administradores
- GET /admin
    - Roles: ["admin"]
    - Response:
        ```json
        [
            {
                "id": <int>,           
                "name": "<string>",        
                "email": "<string>",     
                "CPF": "<string>"                         
            }
        ]
        ```

### Buscar um administrador pelo CPF
- GET /admin/:CPF
    - Roles: ["admin"]
    - Response:
        ```json
        {
            "id": <int>,           
            "name": "<string>",        
            "email": "<string>",     
            "CPF": "<string>"                         
        }
        ```

### Atualizar um administrador
- PATCH /admin/:CPF
    - Roles: ["admin"]
    - Payload:
        ```json
        {
            "name": "<string?>",
            "email": "<string?>",
            "CPF": "<string?>",
            "password": "<string?>"
        }
        ```
    - Response: 
        ```json
        {
            "id": <int>,
            "name": "<string>",
            "email": "<string>",
            "CPF": "<string>"
        }
        ```

### Remover um administrador
- DELETE /admin/:CPF
    - Roles: ["admin"]

<br>

## Médico

### Criar um médico

- POST /doctors
    - Roles: ["admin"]
    - Payload:
        ```json
        {
            "email": "<string>",
            "name": "<string>",
            "telephone": "<string>",
            "birthday": "<string>",
            "CRM": "<string>",
            "specialty": "<string>",
            "password": "<string>",
            "CPF": "<string>"
        }
        ```
    - Response:
        ```json
        {
            "id": <int>, 
            "email": "<string>",           
            "name": "<string>",            
            "telephone": "<string>",
            "birthday": "<string>",
            "CRM": "<string>",
            "specialty": "<string>",
            "CPF": "<string>"                         
        }
        ```

### Buscar todos os médicos
- GET /doctors
    - Roles: ["admin"]
    - Response:
        ```json
        [
            {
                "id": <int>, 
                "email": "<string>",          
                "name": "<string>",            
                "telephone": "<string>",
                "birthday": "<string>",
                "CRM": "<string>",
                "specialty": "<string>",
                "CPF": "<string>"                         
            }
        ]
        ```

### Buscar um médico pelo CRM
- GET /doctors/:CRM
    - Roles: ["admin"]
    - Response:
        ```json
        {
            "id": <int>,   
            "email": "<string>",         
            "name": "<string>",            
            "telephone": "<string>",
            "birthday": "<string>",
            "CRM": "<string>",
            "specialty": "<string>",
            "CPF": "<string>"                         
        }
        ```

### Atualizar um médico
- PATCH /doctors/:CRM
    - Roles: ["admin"]
    - Payload:
        ```json
        {
            "email": "<string?>",
            "name": "<string?>",
            "telephone": "<string?>",
            "birthday": "<string?>",
            "CRM": "<string?>",
            "specialty": "<string?>",
            "password": "<string?>",
            "CPF": "<string?>"
        }
        ```
    - Response: 
        ```json
        {
            "id": <int>,
            "email": "<string>",
            "name": "<string>",
            "telephone": "<string>",
            "birthday": "<string>",
            "CRM": "<string>",
            "specialty": "<string>",
            "CPF": "<string>"
        }
        ```

### Remover um médico
- DELETE /doctors/:CRM
    - Roles: ["admin"]

<br>

## Paciente

### Criar um paciente

- POST /patients
    - Roles: ["admin", "doctor"]
    - Payload:
        ```json
        {
            "name": "<string>",
            "email": "<string>",
            "birthday": "<string>",
            "CPF": "<string>",
            "telephone": "<string>",
            "password": "<string>"
        }
        ```
    - Response:
        ```json
        {
            "id": <int>,           
            "name": "<string>",        
            "email": "<string>",     
            "birthday": "<string>",
            "CPF": "<string>",
            "telephone": "<string>"                      
        }
        ```

### Buscar todos os pacientes
- GET /patients
    - Response:
        ```json
        [
            {
                "id": <int>,           
                "name": "<string>",        
                "email": "<string>",     
                "birthday": "<string>",
                "CPF": "<string>",
                "telephone": "<string>",                        
            }
        ]
        ```

### Buscar um paciente pelo CPF
- GET /patients/:CPF
    - Response:
        ```json
        {
            "id": <int>,           
            "name": "<string>",        
            "email": "<string>",     
            "birthday": "<string>",
            "CPF": "<string>",
            "telephone": "<string>",                         
        }
        ```

### Atualizar um paciente
- PATCH /patients/:CPF
    - Roles: ["admin", "doctor"]
    - Payload:
        ```json
        {
            "name": "<string?>",
            "email": "<string?>",
            "birthday": "<string?>",
            "CPF": "<string?>",
            "telephone": "<string>",
            "password": "<string?>"
        }
        ```
    - Response: 
        ```json
        {
            "id": <int>,
            "name": "<string>",
            "email": "<string>",
            "birthday": "<string>",
            "CPF": "<string>",
            "telephone": "<string>",
        }
        ```

### Remover um paciente
- DELETE /patients/:CPF
    - Roles: ["admin"]

<br>

## Login

### Realizar login

- GET /login
    - Payload:
        ```json
        {
            "CPF": "<string>",
            "password": "<string>"
        }
        ```

<br>

## Reset de Senha

### Enviar token de reset de senha

- POST /password-reset/send-token
    - Payload:
        ```json
        {
            "email": "<string>",
            "userType": "doctor" | "patient"
        }
        ```
    - Response:
        ```json
        {
            "message": "Token enviado com sucesso."
        }
        ```

### Resetar senha

- POST /password-reset/reset-password
    - Payload:
        ```json
        {
            "email": "<string>",
            "token": "<string>",
            "newPassword": "<string>",
            "userType": "doctor" | "patient"
        }
        ```
    - Response:
        ```json
        {
            "message": "Senha redefinida com sucesso."
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
