// Untuk mengurus business logic

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    };
  }

  signInUser(usernameByInput) {
    // pemeriksaan data user di local storage
    const userExsist = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    // pengembalian data ke signIn.js controller ketika success
    if (userExsist) {
      return {
        success: true,
        username: usernameByInput,
      };
    } else {
      return {
        success: false,
        message: "User tidak ditemukan",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
