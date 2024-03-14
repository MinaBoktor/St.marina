import img from '../assets/Leaders/1.jpg'
import React from 'react';


const Leaders = (props) => {
    const leaders = ['L1', 'L2', 'L3', 'L4', 'L5'];
    const buttonRef = React.useRef(null);
    React.useEffect(() => {
    
        const interval = setInterval(() => {
          buttonRef.current.click();
        }, 10000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    return (
        <section class="pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-6 text-left" style={{marginTop:'15px'}}>
                        <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2"  ref={buttonRef} role="button" data-slide="next">
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                    <div class="col-6">
                        <h3 class="mb-3" style={{textAlign:'right', fontSize:50}}>القاده</h3>
                    </div>
                    <div class="col-12">
                        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row">

                                        <div class="col-md-4 mb-3">
                                            <div class="card" style={{borderRadius:20}}>
                                                <img style={{height:500, borderRadius:20}} alt="100%x280" src={props.leader[0][leaders[0]]}></img>
                                                <div class="card-body">
                                                    <h4 class="card-title" style={{textAlign:'center'}}>قائد روماني جرجس</h4>
                                                    <p class="card-text" style={{textAlign:'center'}}>قائد عام المجموعة</p>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <div class="card" style={{borderRadius:20}}>
                                                <img class="img-fluid" style={{height:500, borderRadius:20}} alt="100%x280" src={props.leader[1][leaders[1]]}></img>
                                                <div class="card-body">
                                                    <h4 class="card-title" style={{textAlign:'center'}}>قائدة ايريني صموئيل</h4>
                                                    <p class="card-text" style={{textAlign:'center'}}>قائدة فريق كشاف</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <div class="card " style={{borderRadius:20}}>
                                                <img class="img-fluid" style={{height:500, borderRadius:20}} alt="100%x280" src={props.leader[2][leaders[2]]}></img>
                                                <div class="card-body">
                                                    <h4 class="card-title" style={{textAlign:'center'}}>قائد بولس برسوم</h4>
                                                    <p class="card-text" style={{textAlign:'center'}}>قائد فريق كشاف</p>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row">

                                        <div class="col-md-4 mb-3">
                                            <div class="card" style={{borderRadius:20}}>
                                                <img class="img-fluid" style={{height:500, borderRadius:20}} alt="100%x280" src={props.leader[3][leaders[3]]}></img>
                                                <div class="card-body">
                                                    <h4 class="card-title" style={{textAlign:'center'}}>قائدة مريم عطالله</h4>
                                                    <p class="card-text" style={{textAlign:'center'}}>قائدة فريق متقدم</p>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <div class="card" style={{borderRadius:20}}>
                                                <img class="img-fluid" style={{height:500, borderRadius:20, position:'center'}} alt="100%x280" src={props.leader[4][leaders[4]]}></img>
                                                <div class="card-body">
                                                    <h4 class="card-title" style={{textAlign:'center'}}>قائدة هاله نجيب</h4>
                                                    <p class="card-text" style={{textAlign:'center'}}>قائدة فريق براعم</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Leaders;