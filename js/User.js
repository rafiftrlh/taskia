// Untuk mengurus business logic

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  // save user baru / sign up
  saveUser(userData) {
    // Handle Error
    try {
      const newUser = {
        id: Date.now(),
        ...userData,
      };

      this.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(this.users));

      return {
        success: true,
        message: "Data berhasil disimpan",
      };
    } catch (error) {
      return {
        success: false,
        message: "Data gagal disimpan",
      };
    }
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
