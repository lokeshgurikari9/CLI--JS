// Import prompt-sync package
const prompt = require("prompt-sync")();

// Create empty array to store users
let users = ["lokesh","cvs", "priya","sai"];

// Function to show menu
function showMenu() {
    console.log("\n===== USER MANAGEMENT =====");
    console.log("1. Add User");
    console.log("2. Search User");
    console.log("3. Delete User");
    console.log("4. Show All Users");
    console.log("5. Exit");

    let choice = prompt("Choose an option: ");

    switch (choice) {

        case "1":
            addUser();
            break;

        case "2":
            searchUser();
            break;

        case "3":
            deleteUser();
            break;

        case "4":
            showAllUsers();
            break;

        case "5":
            console.log("Goodbye 👋");
            break;

        default:
            console.log("Invalid choice! Try again.");
    }

    showMenu(); // Call menu again (loop)
}

// Function to add user
function addUser() {
    let name = prompt("Enter user name: ");
    users.push(name.toLocaleLowerCase());
    console.log("User added successfully!");
}

// Function to search user
function searchUser() {
    let name = prompt("Enter name to search: ");

    if (users.includes(name.toLocaleLowerCase())) {
        console.log("User found!");
    } else {
        console.log("User not found!");
    }
}

// Function to delete user
function deleteUser() {
    let name = prompt("Enter name to delete: ");
    let index = users.indexOf(name);

    if (index !== -1) {
        users.splice(index, 1);
        console.log("User deleted successfully!");
    } else {
        console.log("User not found!");
    }
}

// Function to show all users
function showAllUsers() {
    if (users.length === 0) {
        console.log("No users available.");
    } else {
        console.log("Users List:");
        users.forEach((user, index) => {
            console.log(`${index + 1}. ${user}`);
        });
    }
}

// Start the application
showMenu();