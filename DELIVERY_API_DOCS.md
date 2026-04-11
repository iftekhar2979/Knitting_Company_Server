# Delivery Management API Documentation

This document outlines the usage of the Delivery List API, including available filters, pagination, and response structures.

## Get Delivery List
Retrieves a paginated list of deliveries (chalans) with support for multi-criteria filtering.

- **Endpoint:** `GET /api/delivery`
- **Auth Required:** Yes (Bearer Token)

### Query Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `page` | `number` | `1` | Current page number (min: 1). |
| `limit` | `number` | `30` | Number of items per page (min: 1). |
| `chalanNumber`| `number` | `""` | Filter by exact Chalan (Delivery) ID. |
| `orderNumber` | `string` | `""` | Filter by partial order number match. |
| `companyName` | `string` | `""` | Filter by partial company name match. |
| `buyerName` | `string` | `""` | Filter by partial buyer name match. |

---

### Success Response (200 OK)

```json
{
  "data": [
    {
      "id": 501,
      "orderId": 123,
      "deliveredQuantity": 500.5,
      "fabricDeliveredQuantity": 400,
      "GrayDeliveredQuantity": 100.5,
      "unitPrice": null,
      "billNumber": null,
      "createdAt": "2024-04-11T12:00:00.000Z",
      "deliveredBy": "Driver A",
      "colour": "Blue",
      "vechileNumber": "DHA-1234",
      "roleQuantity": 10,
      "order": {
        "unit": "KG",
        "bookingNumber": "BK-001",
        "sbNumber": "SB-99",
        "fabricsName": "Single Jersey",
        "orderNumber": "PO-2024-001",
        "buyerName": "John Doe",
        "programNumber": "PR-10",
        "jobNumber": "JB-05",
        "season": "Summer 2024",
        "company": {
          "companyName": "Example Textiles Ltd",
          "location": "Dhaka"
        },
        "details": {
          "style": "Round Neck",
          "yarnCount": "30s"
        }
      }
    }
  ],
  "total": 45,
  "page": 1,
  "limit": 30,
  "totalPages": 2
}
```

---

### Error Types

| Status Code | Type | Description | Sample Body |
| :--- | :--- | :--- | :--- |
| `401` | `Unauthorized` | Missing or invalid authentication token. | `{"message": "Not authorized"}` |
| `400` | `Bad Request` | Invalid query parameters or database error. | `{"meta": {"target": "id"}, "code": "P2003"}` |

### Implementation Notes
- **Search Logic:** `orderNumber`, `companyName`, and `buyerName` use partial match (`contains`). `chalanNumber` uses exact ID match.
- **Sorting:** Results are automatically sorted by `createdAt` in descending order (newest first).
- **Relational Data:** Each delivery item includes the parent `order` details and the order's `company` and `details`.
