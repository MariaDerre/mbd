      window.addEventListener("load", function () {
        // Инициализация EmailJS после полной загрузки SDK
        emailjs.init("aAr3X-ZrY3d9db6CP");

        // Обработчик формы
        document
          .getElementById("wishForm")
          .addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
              name: document.getElementById("name").value,
              message: document.getElementById("wishes").value,
            };

            emailjs.send("service_gcyzmku", "template_n3yacn6", formData).then(
              function (response) {
                alert("Письмо успешно отправлено!");
                document.getElementById("wishForm").reset();
              },
              function (error) {
                alert("Ошибка при отправке письма. Попробуйте еще раз.");
                console.log("Ошибка:", error);
              }
            );
          });
      });