// Untuk mengurus business logic

class User {
  constructor() {
    this.users = this.getUsers();
  }

  // save user baru / register
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
      localStorage.setItem("usernameLogIn", usernameByInput); // membuat row data baru untuk jika berhasil log in

      return {
        success: true,
        message: `Sukses login dengan akun @${usernameByInput}`,
      };
    } else {
      return {
        success: false,
        message: `Username @${usernameByInput} tidak ditemukan`,
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
