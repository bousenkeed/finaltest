import React from 'react';
import s from './portfolio.module.css'

function Portfolio() {
    return (
        <div className={s.main_container}>
            <div className={s.site}>

                <a className={s.ref} href="https://github.com/bousenkeed/dzsah.git"><h1 className={s.text}>Мой первый сайт</h1></a>
                <div className={s.site_container}>
                <img className={s.image1   + ' ' + s.images} src={require("./images/img.jpg")} alt="1st-site" />
                </div>

                <a className={s.ref} href="https://github.com/bousenkeed/fotolab.git"><h1 className={s.text }>Сайт фотографа</h1></a>
                <div className={s.site_container2}>
                <img className={s.image2    + ' ' + s.images} src={require("./images/img2.jpg")} alt="1st-site" />
                <img className={s.image2    + ' ' + s.images} src={require("./images/img3.jpg")} alt="1st-site" />
                <img className={s.image2    + ' ' + s.images} src={require("./images/img4.jpg")} alt="1st-site" />
                </div>

                <a className={s.ref} href="https://github.com/bousenkeed/portfoliopr.git"><h1 className={s.text }>Сайт портфолио</h1></a>
                <div className={s.site_container2}>
                <img className={s.image2    + ' ' + s.images} src={require("./images/img5.jpg")} alt="1st-site" />
                <img className={s.image2    + ' ' + s.images} src={require("./images/img6.jpg")} alt="1st-site" />
                <img className={s.image2    + ' ' + s.images} src={require("./images/img7.jpg")} alt="1st-site" />
                </div>

            </div>
        </div>
    )
}

export default Portfolio;