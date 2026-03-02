
import img_project from "../../assets/photo_2026-03-01_17-51-46.jpg"
import img_project_2 from "../../assets/proj-2.png"
import img_project_3 from "../../assets/proj-3.png"
import img_project_4 from "../../assets/proj-4.png"

function Projects(){
    return(
        <div className="projects">
            <div className="title-projects">
                <p className="title-main-all">Projects</p>
                <p>A list of projects I've worked on</p>
            </div>
            <hr className="line-projects" />

            <div className="all-projects">

                
                <a href="https://salamaabdulkawi.com">
                    <div className="project">
                        <div className="spans">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="img-project">
                            <img src={img_project} alt="" />
                        </div>
                        <div className="btn-and-info">
                            <div className="l">
                                <p>Wep for client</p>
                                <p className="date">2025</p>
                            </div>
                            <div className="r">
                                <button>
                                    <i className="fa fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://salamaabdulkawi.com">
                    <div className="project">
                        <div className="spans">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="img-project">
                            <img src={img_project_3} alt="" />
                        </div>
                        <div className="btn-and-info">
                            <div className="l">
                                <p>Wep for client</p>
                                <p className="date">2025</p>
                            </div>
                            <div className="r">
                                <button>
                                    <i className="fa fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://salamaabdulkawi.com">
                    <div className="project">
                        <div className="spans">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="img-project">
                            <img src={img_project_4} alt="" />
                        </div>
                        <div className="btn-and-info">
                            <div className="l">
                                <p>Wep for client</p>
                                <p className="date">2025</p>
                            </div>
                            <div className="r">
                                <button>
                                    <i className="fa fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
                
             

            </div>
        </div>
    )
}

export default Projects