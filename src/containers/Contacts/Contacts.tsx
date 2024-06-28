import './Contacts.css';

const Contacts = () => {
  return (
    <div className="pt-5 d-flex justify-content-center mb-5">
      <div className="w-75 card rounded-4 border-0 pt-5 pb-3 px-5">
        <div className="border-bottom border-2 pb-1">
          <h3 className="mb-3">Contacts</h3>
          <h6 className="w-75 pt-2 mb-4">
            Мы всегда рады общению с нашими читателями и авторами! Если у вас
            есть вопросы, предложения или вы просто хотите поделиться своими
            мыслями, вот как вы можете связаться с нами:
          </h6>
        </div>
        <h5 className="pt-4 mb-1">Email</h5>
        <h6 className="pt-2 mb-2">Пиши нам! Отвечаем почти сразу(почти).</h6>
        <p>support@myblog.com</p>
        <div className="mt-2">
          <h5>Социальные сети</h5>
          <nav className="navbard mt-3">
            <ul className="navbar-nav d-flex flex-row gap-4">
              <li className="nav-item">
                <a href="#" className="social-link social-1">
                  Instagram
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="social-link social-2">
                  Telegram
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="social-link social-3">
                  Facebook
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="social-link social-4">
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h5 className="pt-3">Часы работы:</h5>
          <ul className="pt-2">
            <li>Понедельник - Пятница: 10:00 - 18:00</li>
            <li>Суббота - Воскресенье: Выходной</li>
          </ul>
        </div>
        <div className="border-2 border-top pt-3">
          <h5 className="pt-2 mb-3">Мы всегда на связи!</h5>
          <p>
            Наша команда котиков всегда готова помочь вам с любыми вопросами.
            Свяжитесь с нами любым удобным для вас способом, и мы с радостью
            ответим!
          </p>
          <p>
            <strong>My Blog</strong> - это место, где каждый может найти что-то
            интересное и полезное. Спасибо, что вы с нами!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
