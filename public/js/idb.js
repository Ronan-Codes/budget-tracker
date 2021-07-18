// create variable to hold db connection
let db; 
// establish a connection to IndexedDB database & set to version 1
const request = indexedDB.open('budget-tracker', 1);

// this event will emit if database version changes(nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result;
    // create an object store(table) `new_transaction`, & set to have auto incrementing primary key of sorts
    db.createdObjectStore('new_transaction', { autoIncrement: true });
}
