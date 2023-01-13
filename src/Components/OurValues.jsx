function OurValues () {
    return(
        <section id={"our-values"}>
            <div className={"container-fluid"}>
                <h3>OUR VALUES</h3>
                <div className={"row row-lg-3 row-md-3 row-sm-1 row-1"}>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="card card-innovative">
                            <div class="card-body">
                                <img src="../../images/lightbulb-o.png"/>
                                <h5 class="card-title">INNOVATIVE</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?</p>
                            </div>
                        </div>
                        <div className="red-triangle"></div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="card card-loyalty">
                            <div class="card-body">
                                <img src="../../images/bank.png"/>
                                <h5 class="card-title">LOYALTY</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit similique eum itaque facere temporibus dolores.</p>
                            </div>
                        </div>
                        <div className="green-triangle"></div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="card card-respect">
                            <div class="card-body">
                                <img src="../../images/balance-scale.png"/>
                                <h5 class="card-title">RESPECT</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sit? Tenetur et neque quod incidunt!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues;