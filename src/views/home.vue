<template>
    <div>
        <div class="img">
            <img src="../img/logo.png" alt="">
        </div>

        <div class="container">
            <div class="jumbotron b-banner">
                
                <div class="banner-text text-center">
                    <h3 class="text-center text-head">New Summer Hotspot In Day Life</h3>
                    <p class="text-muted">197 LIKES &nbsp; &nbsp; &nbsp;2 MINS READ &nbsp; &nbsp; &nbsp; 189 VIEWS</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                         elit.Magnam nesciunt architecto quaerat necessitatibus tenetur ratione eius numquam!</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">Read more</a>
                      </p>
                </div>
              </div>
        </div>
        <div class="container b-content">
            <div class="row">
                <div class="col-md-9 rightside">
                    <section>
                        <img src="../img/bg-fashion.jpg" alt="" width="700">
                        <router-link to="/showblog"><h5 class="text-uppercase blog-title">A Guide To Duxton Hill</h5></router-link>
                        <p class="text-muted blog-time"><i class="fa fa-clock"></i> 2 MIN READ &nbsp;&nbsp;&nbsp;&nbsp; 189 VIEWS</p>
                        <p class="blog-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Magnam nesciunt architecto
                             quaerat necessitatibus tenetur ratione eius numquam! elit. Earum in doloremque,
                             odit quas repellat voluptatum illo nulla ullam sunt, enim animi eaque dolorem possimus saepe!
                              Fuga voluptas sapiente, nemo sit.</p>
                    </section>
                    <hr>
                    <section class="menu-section">
                        <div class="media submenu">
                            <img class="mr-3" src="../img/img-1.jpg" alt="Generic placeholder image">
                            <div class="media-body">
                              <h5 class="mt-0">Launch A New Space</h5>
                              <p class="text-muted blog-time"><i class="fa fa-clock"></i> 2 MIN READ &nbsp;&nbsp;&nbsp;&nbsp; 189 VIEWS</p>
                             <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus 
                                scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                                 tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                  Donec lacinia congue felis in faucibus.</p>
                            </div>
                          </div>
                       </section>
                </div>
                <div class="col-md-3">
                   <section>
                    <div class="profile text-center"> 
                        <img src="../img/author.jpg" alt="">
                        <h6>Liam Mason</h6>
                        <p class="mt-100">Travel Blogger</p>
                        <p class="">I'm Liam, last year I decided to quit my job and travel the world.
                             You can follow my journey on this blog!</p>
                    </div>
                   </section>
                   <section>
                       <h5 class="text-center follow">FOLLOW ME</h5>
                       <div class="social-link">
                            <ul>
                                <li><router-link to="/"> <i class="fa fa-facebook"></i> </router-link> </li>
                                <li><router-link to="/"> <i class="fa fa-pinterest"></i> </router-link> </li>
                                <li><router-link to="/"> <i class="fa fa-twitter"></i> </router-link> </li>
                                <li><router-link to="/"> <i class="fa fa-instagram"></i> </router-link> </li>
                            </ul>
                       </div>
                   </section>
                  
                </div>
            </div>
        </div>

        
    </div>
</template>
<style scoped>
    .b-banner{
        background-image: url(../img/bg-banner-2.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        margin-top: 20px;
    }
</style>