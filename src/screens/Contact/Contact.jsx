import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-header">Let's Connect!</h2>
      <div className="contact-content">
        <a href="https://github.com/lisagarcia13" className="contact-text">
          <img
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
            alt="github-icon"
            className="icons"
          />
          <h3>Github</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/lisa-marie-garcia/"
          className="contact-text"
        >
          <img
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
            alt="linkedin-icon"
            className="icons"
          />
          <h3>LinkedIn</h3>
        </a>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
            alt="gmail"
            className="icons"
          />
          <h3 className="contact-text">Email : lisacodes01@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}
