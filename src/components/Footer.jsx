function Footer(){
    const imgs = "https://www.onlinesbi.sbi/sbijava/images/"
    return <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imgs+"banner1.jpg"} className="d-block w-100" alt={imgs+"banner3.jpg"} />
                </div>
                <div className="carousel-item">
                    <img src={imgs+"banner3.jpg"} className="d-block w-100" alt={imgs+"banner3.jpg"} />
                </div>
                <div className="carousel-item">
                    <img src={imgs+"banner13.jpg"} className="d-block w-100" alt={imgs+"banner3.jpg"} />
                </div>
            </div>
        </div>
    </>
}

export default Footer