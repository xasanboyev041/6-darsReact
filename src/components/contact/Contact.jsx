import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Bog'lanish</h1>
      <p>
        Men bilan bog'lanish uchun quyidagi vositalardan foydalanishingiz
        mumkin:
      </p>
      <div className="contact-links">
        <a
          href="https://www.instagram.com/xasanboyev_nurmuhammad"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Instagram
        </a>
        <a
          href="https://t.me/nurmuhammad_xasanboyev"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Telegram
        </a>
      </div>
    </div>
  );
}

export default Contact;
