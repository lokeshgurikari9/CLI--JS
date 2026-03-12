# CLI--JS
This is a **simple Node.js CLI (Command Line Interface) User Management App**.
It lets you **Add, Search, Delete, and View users** using the terminal.
---
# 1. Import prompt-sync package

```javascript
const prompt = require("prompt-sync")();
```

### What happens here?

* `require("prompt-sync")` imports a **package** that lets us take input from the terminal.
* `()` executes it.
* The result is stored in the variable **prompt**.

### Why we need it?

Node.js **does not have built-in input like browser prompt()**, so we use this package.

### Example

```javascript
let name = prompt("Enter your name: ");
```

---

# 2. Create an array to store users

```javascript
let users = ["lokesh","cvs", "priya","sai"];
```

### What is happening?

* `users` is an **array**
* It stores multiple usernames.

### Example array

```
users = ["lokesh", "cvs", "priya", "sai"]
```

Index positions:

| Index | Value  |
| ----- | ------ |
| 0     | lokesh |
| 1     | cvs    |
| 2     | priya  |
| 3     | sai    |

---

# 3. Create menu function

```javascript
function showMenu() {
```

### What happens?

We create a **function called showMenu()**

This function:

* Displays menu options
* Takes user choice
* Runs the selected operation

---

# 4. Print menu options

```javascript
console.log("\n===== USER MANAGEMENT =====");
console.log("1. Add User");
console.log("2. Search User");
console.log("3. Delete User");
console.log("4. Show All Users");
console.log("5. Exit");
```

### What happens?

These lines **print menu options in terminal**

Output will look like:

```
===== USER MANAGEMENT =====
1. Add User
2. Search User
3. Delete User
4. Show All Users
5. Exit
```

`\n` means **new line**

---

# 5. Take user input

```javascript
let choice = prompt("Choose an option: ");
```

### What happens?

* Program waits for **user input**
* The input is stored in variable `choice`

Example input:

```
Choose an option: 1
```

`choice = "1"`

Note: It is **string**, not number.

---

# 6. Switch statement

```javascript
switch (choice) {
```

### What happens?

Switch checks **which option the user selected**

Then it executes the matching **case**.

---

# 7. Case 1 → Add User

```javascript
case "1":
    addUser();
    break;
```

### What happens?

If user selects **1**

It runs this function:

```
addUser()
```

`break` stops the switch.

---

# 8. Case 2 → Search User

```javascript
case "2":
    searchUser();
    break;
```

If user enters **2**

The program runs:

```
searchUser()
```

---

# 9. Case 3 → Delete User

```javascript
case "3":
    deleteUser();
    break;
```

Runs function:

```
deleteUser()
```

---

# 10. Case 4 → Show Users

```javascript
case "4":
    showAllUsers();
    break;
```

Runs:

```
showAllUsers()
```

Shows all users in the list.

---

# 11. Case 5 → Exit

```javascript
case "5":
    console.log("Goodbye 👋");
    break;
```

If user selects **5**

Program prints:

```
Goodbye 👋
```

---

# 12. Default case

```javascript
default:
    console.log("Invalid choice! Try again.");
```

If user enters something like:

```
9
abc
```

Then program prints:

```
Invalid choice! Try again.
```

---

# 13. Call menu again

```javascript
showMenu();
```

### What happens?

This calls the **menu again**.

So the program **loops continuously**.

Example flow:

```
Menu
 -> User selects option
 -> Function runs
 -> Menu shows again
```

This is **recursion loop**.

---

# 14. Add User Function

```javascript
function addUser() {
```

Creates a function called **addUser**

---

### Ask user name

```javascript
let name = prompt("Enter user name: ");
```

Example:

```
Enter user name: Rahul
```

`name = "Rahul"`

---

### Convert to lowercase and store

```javascript
users.push(name.toLocaleLowerCase());
```

What happens:

1. Convert name to lowercase
2. Add it to array

Example:

```
Rahul → rahul
```

Array becomes:

```
["lokesh","cvs","priya","sai","rahul"]
```

`push()` means **add element to array end**

---

### Print success message

```javascript
console.log("User added successfully!");
```

Output:

```
User added successfully!
```

---

# 15. Search User Function

```javascript
function searchUser() {
```

Creates search function.

---

### Ask user name

```javascript
let name = prompt("Enter name to search: ");
```

Example:

```
Enter name to search: lokesh
```

---

### Check if user exists

```javascript
if (users.includes(name.toLocaleLowerCase())) {
```

`includes()` checks if array contains the value.

Example:

```
users = ["lokesh","cvs","priya","sai"]

search "lokesh" → TRUE
```

---

### If found

```javascript
console.log("User found!");
```

---

### If not found

```javascript
else {
    console.log("User not found!");
}
```

---

# 16. Delete User Function

```javascript
function deleteUser() {
```

Creates delete function.

---

### Ask name

```javascript
let name = prompt("Enter name to delete: ");
```

Example:

```
Enter name to delete: cvs
```

---

### Find index

```javascript
let index = users.indexOf(name);
```

`indexOf()` finds **position in array**.

Example:

```
["lokesh","cvs","priya","sai"]

cvs → index = 1
```

---

### Check if user exists

```javascript
if (index !== -1) {
```

If index is not -1 → user exists.

---

### Remove user

```javascript
users.splice(index, 1);
```

`splice()` removes element.

Example:

```
["lokesh","cvs","priya","sai"]

remove index 1

Result:
["lokesh","priya","sai"]
```

---

### Print success

```javascript
console.log("User deleted successfully!");
```

---

### If not found

```javascript
else {
    console.log("User not found!");
}
```

---

# 17. Show All Users Function

```javascript
function showAllUsers() {
```

Shows all users in list.

---

### Check if array empty

```javascript
if (users.length === 0) {
```

`length` gives number of elements.

Example:

```
users = []
length = 0
```

---

### If empty

```javascript
console.log("No users available.");
```

---

### If users exist

```javascript
else {
```

---

### Print heading

```javascript
console.log("Users List:");
```

---

### Loop through users

```javascript
users.forEach((user, index) => {
```

`forEach()` loops through each user.

Example:

```
user = lokesh
index = 0
```

---

### Print user

```javascript
console.log(`${index + 1}. ${user}`);
```

Output:

```
1. lokesh
2. cvs
3. priya
4. sai
```

---

# 18. Start the program

```javascript
showMenu();
```

This runs the application.

Without this line **nothing will execute**.

---

# Final Program Flow

```
Start Program
     ↓
Show Menu
     ↓
User selects option
     ↓
Run function
(Add/Search/Delete/View)
     ↓
Return to menu
     ↓
Repeat
```

---

# Skills this project teaches you

This small project covers many **important JavaScript concepts**:

| Concept       | Used                         |
| ------------- | ---------------------------- |
| Array         | users[]                      |
| Functions     | addUser(), searchUser()      |
| Switch        | menu selection               |
| Loops         | forEach()                    |
| Condition     | if / else                    |
| Array methods | push(), includes(), splice() |
| Input         | prompt-sync                  |
| Recursion     | showMenu() loop              |

---------
