# Performance Audit

## Objective

Evaluate the impact of MongoDB indexes on query performance.

---

## Query Tested

```javascript
db.devices.find({
  device_id: "D001"
})
```

---

## Before Index

| Metric | Value |
|----------|----------|
| Stage | COLLSCAN |
| Documents Examined | 1000 |
| Execution Time | 15 ms |

MongoDB scanned the entire collection to locate the document.

---

## Index Created

```javascript
db.devices.createIndex({
  device_id: 1
})
```

---

## After Index

| Metric | Value |
|----------|----------|
| Stage | IXSCAN |
| Documents Examined | 1 |
| Execution Time | 1 ms |

MongoDB used the index and avoided scanning the entire collection.

---

## Results

| Metric | Before | After |
|----------|----------|----------|
| Stage | COLLSCAN | IXSCAN |
| Documents Examined | 1000 | 1 |
| Execution Time | 15 ms | 1 ms |

---

## Conclusion

The index significantly improved query performance by reducing the number of examined documents and execution time.
