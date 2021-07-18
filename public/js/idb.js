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

request.onsuccess = function(event) {
    db = event.target.result;

    if (navigator.onLine) {
        // uploadTransaction()
    }
}

request.onerror= function(event) {

}

// This function will be executed if we attempt to submit a new transaction and there's no internet connection
// Insert saveRecord in. . . . form submission if fetch() function's catch method is executed
function saveRecord(record) {
    // open a new transaction with the database with read and write permissions 
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    // access the object store for `new_transaction`
    const budgetObjectStore = transaction.objectStore('new_transaction');

    // add record to your store with add method
    budgetObjectStore.add(record);
}
