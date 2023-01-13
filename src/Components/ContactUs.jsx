function ContactUs () {
    return(
        <section id={"contact-us"}>
            <div className={"container-fluid"}>
                <h3>CONTACT US</h3>
                <form className={"g-3 needs-validation form"}>
                    <div className={"mb-4"}>
                        <label for={"validationCustom01"} className={"form-label"}>Name</label>
                        <input type={"text"} className={"form-control"} id={"validationCustom01"} required/>
                        <div className={"invalid-feedback"}>
                            This field is required.
                        </div>
                    </div>
                    <div className={"mb-4"}>
                        <label for={"validationCustom02"} className={"form-label"}>Email</label>
                        <input type={"email"} className={"form-control"}  id={"validationCustom02"} required/>
                        <div className={"invalid-feedback"}>
                            Invalid email address.
                        </div>
                    </div>
                    <div className={"mb-4"}>
                        <label for={"validationCustom03"} className={"form-label"}>Message</label>
                        <textarea className={"form-control"} id={"validationCustom03"} rows={"3"} required></textarea>
                        <div className={"invalid-feedback"}>
                            This field is required.
                        </div>
                    </div>
                    <div className={"mb-4"}>
                        <button type={"submit"} className={"btn btn-primary mb-3 submit"}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUs;