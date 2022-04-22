## API Reference

#### Register

```http
  POST /api/auth/register
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `name`     | `string` | **Required**. |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Login

```http
   POST /api/auth/login
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Logout

```http
   POST /api/auth/logout
```

### Meetings

```http
  POST /api/meetings/
```

| Parameter    | Type     | Description   |
| :----------- | :------- | :------------ |
| `name`       | `string` | **Required**. |
| `type`       | `array`  | **Required**. |
| `created_by` | `string` | **Required**. |
| `date`       | `date`   | **Required**. |
