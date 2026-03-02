
import My_Image from "../../assets/photo_2026-02-28_07-10-45.jpg"
import svg_css from "../../assets/svgs/css-3-svgrepo-com.svg"
import svg_git from "../../assets/svgs/git-svgrepo-com.svg"
import svg_html from "../../assets/svgs/html-5-svgrepo-com.svg"
import svg_js from "../../assets/svgs/js-svgrepo-com.svg"
import svg_php from "../../assets/svgs/php3-svgrepo-com.svg"
import svg_react from "../../assets/svgs/react-javascript-js-framework-facebook-svgrepo-com (1).svg"
import svg_scss from "../../assets/svgs/scss-svgrepo-com.svg"
import svg_sql from "../../assets/svgs/sql-svgrepo-com.svg"
import svg_tailwind from "../../assets/svgs/tailwindcss-icon-svgrepo-com.svg"

function About(){
    return(
        <div className="about">
            <div className="sect-about-1">
                <div className="title-about">
                    <p className="title-main-all">
                        About
                    </p>
                    <p>A few words about me</p>
                </div>
                <hr className="line-projects" />

                <div className="section-img-and-desc">
                    <div className="img">
                        <img src={My_Image} alt="" />
                    </div>
                    <div className="desc-about">
                            <p>Intro</p>
                            <p className="desc-el">
                                Developer and art director based in Nice, FranceWith over 6 years of experience in the field, I enjoy blending beauty, design and technology to create unique, bespoke web experiences that exceed my clients' expectations.Whether collaborating with teams or leading design projects, my attention to detail and dedication to excellence have earned me a reputation for delivering exceptional results.Even when I'm not working for my clients, I'm always looking for new things to learn and experiment with. I continue to develop my design and development skills by working on personal projects, reading books, etc...
                            </p>
                        
                    </div>

                    
                </div>
                {/* <hr className="line-projects" /> */}
            </div>

{/* 
            <div className="exp">
                <p className="title-experiance">
                    Experiences
                </p>
                <p>Front-End Developer <br/>
                    2021 - Today /360&1
                </p>
                <p>CTO<br/>
2023 - Today
/
Helpr
                </p>
                <p>Artistic Director <br />
2022 - Today

/
Maison Hochard
                </p>
                <p>Web Developer <br />
2019 - Today

/
Freelance
                </p>
            </div> */}

            <hr className="line-projects" />
            <div className="section-about-2">
                <div className="sect-sack">
                    <p className="title-stack">Stack</p>
                    <p className="desc-stack">Some of the software and technologies I use on a daily basis</p>
                </div>

                <div className="sect-boxes">
                    <div className="box">
                        <img src={svg_css} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_git} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_html} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_js} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_php} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_react} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_scss} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_sql} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_tailwind} alt="" />
                    </div>
          
                </div>
            </div>

            <hr className="line-projects" />

        </div>
    )
}

export default About;