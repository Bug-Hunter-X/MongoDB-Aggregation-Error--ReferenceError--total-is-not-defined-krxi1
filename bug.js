```javascript
//Incorrect aggregation pipeline
db.collection('data').aggregate([
  {
    $match: { /* some match criteria */}
  },
  {
    $group: {
      _id: "$field",
      total: { $sum: "$anotherField" }, //this field does not exist
    }
  }
])
```