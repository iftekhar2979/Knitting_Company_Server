# Order Management API Documentation

This document outlines the usage of the Order List API, including available filters, pagination, and response structures.

## Get Order List
Retrieves a paginated list of orders with support for multi-criteria filtering.

- **Endpoint:** `GET /api/order`
- **Auth Required:** Yes (Bearer Token)

### Query Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `page` | `number` | `1` | Current page number (min: 1). |
| `limit` | `number` | `30` | Number of items per page (min: 1). |
| `orderNumber` | `string` | `""` | Filter by partial order number match. |
| `companyName` | `string` | `""` | Filter by partial company name match. |
| `buyerName` | `string` | `""` | Filter by partial buyer name match. |
| `fabricsName` | `string` | `""` | Filter by partial fabric name match. |
| `season` | `string` | `""` | Filter by partial season match. |
| `status` | `string` | `""` | Filter by partial status match (e.g., 'Pending', 'Delivered'). |

---

### Success Response (200 OK)

```json
{
  "orders": [
    {
      "id": 123,
      "orderNumber": "PO-2024-001",
      "companyId": 10,
      "buyerId": 5,
      "companyName": "Example Textiles Ltd",
      "fabricsName": "Single Jersey",
      "buyerName": "John Doe",
      "season": "Summer 2024",
      "status": "Pending",
      "orderQuantity": 5000,
      "deliveredQuantity": 1200,
      "restQuantity": 3800,
      "unit": "KG",
      "createdAt": "2024-04-11T10:00:00.000Z",
      "company": { "companyName": "Example Textiles Ltd" },
      "buyer": { "buyerName": "John Doe" },
      "fabricsType": { "fabricsName": "Single Jersey" }
    }
  ],
  "total": 120,
  "page": 1,
  "limit": 30,
  "totalPages": 4
}
```

---

### Error Types

| Status Code | Type | Description | Sample Body |
| :--- | :--- | :--- | :--- |
| `401` | `Unauthorized` | Missing or invalid authentication token. | `{"message": "Not authorized"}` |
| `500` | `Internal Server Error` | Database connection failure or server-side crash. | `{"error": "Internal Server Error"}` |

### Implementation Notes
- **Search Logic:** All string filters use a `contains` (partial match) search.
- **Combined Filters:** If multiple filters are provided (e.g., `companyName` AND `status`), the API returns records matching **all** criteria.
- **Sorting:** Results are automatically sorted by `createdAt` in descending order (newest first).
