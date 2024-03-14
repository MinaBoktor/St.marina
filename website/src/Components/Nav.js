


const Nav = (props) => {
    return(
        <div>
            <nav>
                <section>
                    {props.width <= 1200 &&
                    <article>
                        <h1 style={{color:'white'}}>كشافة سانت مارينا</h1>
                        <img src={props.img}></img>
                    </article>}
                    <article>
                        <ul>
                            <li><a href="#"><b>تقديم استمارة</b></a></li>
                            <li><a href="#"><b>القاده</b></a></li>
                            <li><a href="#"><b>المناهج</b></a></li>
                            <li><a href="#"><b>الرئيسية</b></a></li>
                        </ul>
                    </article>
                    {props.width >= 1200 &&
                    <article>
                        <h1>كشافة سانت مارينا</h1>
                        <img src={props.img}></img>
                    </article>}
                </section>
            </nav>
        </div>
    )
}

export default Nav;