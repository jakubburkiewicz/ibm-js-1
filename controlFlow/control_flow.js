let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// use ternary operator
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Practice task
let personRole = "Employee"
let message


switch( personRole ) {
    case 'Employee':
        message = 'You have access to the Dietary Service only.'
        break

    case 'Enrolled Member':
        message = 'You have access to the Dietary Service and one-to-one interaction with a dietician.'
        break

    case 'Subscriber':
        message = 'You have partial access to faciliate Dietary Service only.'
        break

    default:
        message = 'You need to enroll or at least subscribe to avail this facility.'
}

console.log( 'Person message: ', message )