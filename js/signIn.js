// Penghubung ui dan model

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameByInput = document.getElementById("username").value;

    const result = userManager.signInUser(usernameByInput);

    if (result.success) {
      alert(`Sukses login dengan akun @${result.username}`);
      return (window.location.href = "/tasks.html");
    } else {
      alert(result.message);
    }
  });
});
