import './About.css';

const About = () => {
  const bcgUrl =
    'https://i.pinimg.com/564x/73/30/a0/7330a0b33f2b4ad8aefb6c926ca018d9.jpg';

  const imageStyle = {
    background: `url(${bcgUrl}) no-repeat center center / cover`,
  };

  return (
    <div className="pt-5 d-flex justify-content-center mb-5">
      <div className="card rounded-4 border-0 pt-5 pb-5 px-5">
        <h3 className="text-center mb-5">About My Blog</h3>
        <h6 className="w-75 pt-2 mb-5 d-flex align-self-center text-center">
          Наш блог создан для тех, кто любит делиться своими мыслями, историями
          и идеями. Мы всегда рады новым авторам и читателям. Здесь вы можете
          найти статьи на различные темы, от технологий и науки до искусства и
          культуры.
        </h6>
        <h5 className="pt-4 mb-4">История создания</h5>
        <div className="row g-0 d-flex justify-content-between pt-3 mb-5">
          <div className="col-5">
            <p className="mb-2">
              Наш блог "My Blog" начался с простой идеи. Однажды тёплым летним
              вечером, наша команда встретилась в уютном кафе, обсуждая мир
              вокруг и делясь своими мыслями. Мы поняли, что у всех нас есть
              много интересного и ценного, чем можно поделиться с другими. Так
              родилась идея создать блог, где каждый может выразить свои мысли,
              рассказать свою историю и найти единомышленников.
            </p>
            <p>
              С тех пор прошло много времени, и мы выросли из маленькой группы
              энтузиастов в огромное сообщество. Сегодня "My Blog" - это место,
              где собрались тысячи авторов и читателей, готовых делиться своими
              идеями и опытом.
            </p>
          </div>
          <div className="col-6 rounded-4" style={imageStyle} />
        </div>
        <h5 className="pt-4 mb-4">Несколько интересных фактов о "My Blog"</h5>
        <div className="d-flex justify-content-between mt-4 flex-wrap mb-5">
          <div className="fact-card card-1 card border-0 rounded-4 bg-body-secondary pb-4 px-3">
            Всего опубликовано постов: 50,000+
          </div>
          <div className="fact-card card-2 card border-0 rounded-4 bg-body-secondary pb-4 px-3">
            Общая сумма заработка: $100,000+
          </div>
          <div className="fact-card card-3 card border-0 rounded-4 bg-body-secondary pb-4 px-3">
            Общее количество пользователей: 15,000+
          </div>
          <div className="fact-card card-4 card border-0 rounded-4 bg-body-secondary pb-4 px-3">
            Количество лайков: 1,000,000+
          </div>
        </div>
        <h5 className="pt-4 mb-4">Наша команда</h5>
        <div className="d-flex justify-content-between mt-4 flex-wrap">
          <div className="team-card card border-0 rounded-4 bg-body-secondary pb-3 px-4">
            <div className="team-card-1 mb-4" />
            <strong>Главный разработчик</strong>
            <p className="mt-2">
              Наш кот-разработчик всегда на страже кода. Он может спать на
              клавиатуре, но это только помогает ему создавать лучшие в мире
              сайты.
            </p>
          </div>
          <div className="team-card card border-0 rounded-4 bg-body-secondary pb-3 px-4">
            <div className="team-card-2 mb-4" />
            <strong>Менеджер по контенту</strong>
            <p className="mt-2">
              Этот кот-менеджер всегда в курсе последних тенденций и следит за
              тем, чтобы на нашем блоге был только самый интересный и актуальный
              контент.
            </p>
          </div>
          <div className="team-card card border-0 rounded-4 bg-body-secondary pb-3 px-4">
            <div className="team-card-3 mb-4" />
            <strong>Аналитик данных</strong>
            <p className="mt-2">
              Этот кот-аналитик знает всё о данных. Его острый взгляд и любовь к
              графикам помогают нам понимать, что действительно важно для наших
              пользователей.
            </p>
          </div>
          <div className="team-card card border-0 rounded-4 bg-body-secondary pb-3 px-4">
            <div className="team-card-4 mb-4" />
            <strong>Креативный директор</strong>
            <p className="mt-2">
              Наш креативный директор всегда готов придумать что-то новое и
              удивительное. Он вдохновляет нас на создание уникального контента.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
