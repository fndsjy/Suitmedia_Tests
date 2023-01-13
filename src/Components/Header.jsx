function Header () {
    return(
        <div className={"container-fluid px-0"}>
            <div id={"myCarousel"} className={"carousel slide"} data-ride={"carousel"}>
            {/* Indicators */}
            <ol className={"carousel-indicators"}>
                <li data-target={"#myCarousel"} data-slide-to={"0"} className={"active mx-2"}></li>
                <li data-target={"#myCarousel"} data-slide-to={"1"}></li>
            </ol>

            {/* Wrapper for slides */}
            <div className={"carousel-inner"}>
                <div className={"item active"}>
                    <img src={"../../images/bg.jpg"} alt={"Background"} className={"carousel-img"}/>
                    <div className={"carousel-caption"}>
                        <h3>THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY</h3>
                    </div>
                </div>

                <div className={"item"}>
                    <img src={"../../images/about-bg.jpg"} alt={"Background"} className={"carousel-img"}/>
                    <div className={"carousel-caption"}>
                        <h3>WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM</h3>
                    </div>
                </div>
            </div>

            {/* Left and right controls */}
            <a className={"left carousel-control"} href={"#myCarousel"} data-slide={"prev"}>
                <span className={"glyphicon glyphicon-chevron-left"}></span>
                <span className={"sr-only"}>Previous</span>
            </a>
            <a className={"right carousel-control"} href={"#myCarousel"} data-slide={"next"}>
                <span className={"glyphicon glyphicon-chevron-right"}></span>
                <span className={"sr-only"}>Next</span>
            </a>
            </div>
        </div>
    )
}

export default Header;