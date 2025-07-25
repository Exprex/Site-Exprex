document.addEventListener("DOMContentLoaded", function () {
  // --- modal projeto ---
  const modal = document.getElementById("project-modal");
  const closeModal = document.getElementById("close-modal");
  const viewLinks = document.querySelectorAll(".project-link");

  if (modal && closeModal && viewLinks.length) {
    viewLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("hidden");
        modal.classList.add("clicked-view");
        localStorage.setItem("clicouEm", "verMais");
      });
    });

    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  // --- modais login/adm ---
  const adminLoginModal = document.getElementById("admin-login-modal");
  const adminRegisterModal = document.getElementById("admin-register-modal");
  const openAdminLogin = document.getElementById("open-admin-login");

  if (openAdminLogin && adminLoginModal) {
    openAdminLogin.addEventListener("click", () => {
      adminLoginModal.classList.remove("hidden");
      adminLoginModal.classList.add("clicked-admin");
      localStorage.setItem("clicouEm", "admin");
    });
  }

  // funções globais para alternar e fechar modais de admin
  window.closeAdminModal = function () {
    if (adminLoginModal) adminLoginModal.classList.add("hidden");
    if (adminRegisterModal) adminRegisterModal.classList.add("hidden");
  };

  window.switchToRegister = function () {
    if (adminLoginModal) adminLoginModal.classList.add("hidden");
    if (adminRegisterModal) adminRegisterModal.classList.remove("hidden");
  };

  window.switchToLogin = function () {
    if (adminRegisterModal) adminRegisterModal.classList.add("hidden");
    if (adminLoginModal) adminLoginModal.classList.remove("hidden");
  };

  // fechar modais com ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal) modal.classList.add("hidden");
      if (adminLoginModal) adminLoginModal.classList.add("hidden");
      if (adminRegisterModal) adminRegisterModal.classList.add("hidden");
    }
  });

  // fechar ao clicar fora
  window.addEventListener("click", (e) => {
    if (e.target === adminLoginModal) adminLoginModal.classList.add("hidden");
    if (e.target === adminRegisterModal)
      adminRegisterModal.classList.add("hidden");
  });

  // --- formulario login ---
  const adminLoginForm = document.getElementById("admin-login-form");

  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // simula login salvo
      localStorage.setItem("logado", "true");
      window.location.href = "inicial.html";
    });
  }
});
