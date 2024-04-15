// Текст, який буде відображатися в заголовку
const text = 'Вітаю на сайті таргетолога';

// Функція для анімації печаті тексту
function typeWriter() {
    let i = 0;
    const speed = 50; // Швидкість печаті

    // Вивід тексту посимвольно
    function type() {
        if (i < text.length) {
            document.getElementById("main-title").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Запускаємо анімацію печаті при завантаженні сторінки
window.onload = typeWriter;

// Функція для відкриття/закриття меню
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}

// Функція для відправки електронної пошти
function sendEmail() {
    // Замість виводу повідомлення в консоль, будемо переадресовувати користувача на сторінку електронної пошти з вже заповненими даними
    var email = "andryskhatop@gmail.com";
    var subject = "Запит з сайту таргетолога";
    var body = "Привіт,\n\nЯ хотів би дізнатися більше про ваші послуги.\n\nЗ повагою, [ім'я]";

    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Відкриття сторінки електронної пошти
    window.location.href = mailtoLink;
}



const nodemailer = require('nodemailer');

// Створення об'єкту транспорту
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password'
    }
});

// Надсилання електронної пошти
const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient_email@example.com',
    subject: 'Subject of your email',
    text: 'Body of your email'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
