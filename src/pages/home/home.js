import s from'./home.module.css';


function Home() {
    return (
      <div className={s.App}>
        <div className={s.container_title}>
        <div className={s.background_container}>
        </div>
          <h1 className={s.title}>
            Приветствую, меня зовут Антон
          </h1>
          <h1 className={s.title}>
            Вы находитесь на сайте выпускника Синергии
          </h1>
        </div>
      </div>
    )
  }
  
  export default Home;