// Untuk mengurus business logic

class User {
  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };
    console.log(userData);
  }
}
