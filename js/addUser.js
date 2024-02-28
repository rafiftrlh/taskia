// Penghubung ui dan model

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userData = {
      username: document.getElementById("username").value,
    };

    userManager.saveUser(userData);
  });
});
