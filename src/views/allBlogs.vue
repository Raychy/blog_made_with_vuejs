<template>
    <div id="bg"> 
        <div class="page-wraper">
            <!-- <div id="loading-area"></div> -->
                <!-- header -->
                
                <!-- header END -->
                <!-- Content -->
                <div class="page-content bg-white">
                    <!-- Slider Banner -->
                    
                    <!-- Slider Banner -->
                    <div class="content-block">
                        <!-- About Us -->
                        <!-- category -->
                        
                        <!-- category end -->
                        <div class="section-full bg-white content-inner-2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
                                        <div class="loadmore-content">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="blog-card post-left" v-for="blog in blogs" v-bind:key="blog">
                                                        <div class="blog-card-media">
                                                            <img src="../assets/images/blog/blog-left/pic1.jpg" alt=""/>
                                                        </div>
                                                        <div class="blog-card-info">
                                                            <!-- <div class="title-sm"><a href="javascript:void(0);">Beauty</a></div> -->
                                                            <router-link v-bind:to=" '/blog/' + blog.id "> <h4 class="title">{{blog.title}} </h4></router-link>
                                                            <p>{{blog.content}} </p>
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <ul class="social-link-round">
                                                                    <li class="link-ic"><a href="javascript:void(0);" class="btn-link share"><i class="la la-share-alt"></i></a></li>
                                                                    <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-twitter"></i></a></li>
                                                                    <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-pinterest-p"></i></a></li>
                                                                    <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-facebook"></i></a></li>
                                                                    <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-instagram"></i></a></li>
                                                                </ul>
                                                                <div class="">
                                                                    <router-link v-bind:to="'/showblog/' + blog.id" class="btn-link readmore"><i class="la la-arrow-right"></i></router-link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
  
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Pagination start -->
                                        <div class="pagination-bx clearfix text-center">
                                            <ul class="pagination">
                                                <li class="active"><a href="javascript:void(0)">1</a></li>
                                                <li><a href="javascript:void(0)">2</a></li>
                                                <li><a href="javascript:void(0)">3</a></li>
                                                <li class="next"><a href="javascript:void(0)"><i class="fa fa-angle-right"></i></a></li>
                                            </ul>
                                        </div>
                                        <!-- Pagination END -->
                                    </div>
                                    <div class="col-xl-3 col-lg-4 col-md-5 col-sm-12 col-12">	
                                        <div class="side-bar p-l30 sticky-top">
                                            <div class="widget widget-newsletter text-center">
                                                <form class="dzSubscribe dezPlaceAni" action="https://lemars.dexignzone.com/xhtml/script/mailchamp.php" method="post">
                                                    <div class="news-back form-style">
                                                        <h4>Join</h4>
                                                        <div class="input-group">
                                                            <input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email">
                                                            <div class="input-group-append">
                                                        <button name="submit" value="Submit" type="submit" class="btn"><i class="la la-paper-plane"></i></button>
                                                    </div>
                                                        </div>
                                                        <div class="dzSubscribeMsg"></div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="widget widget_gallery gallery-grid-2">
                                                <h6 class="widget-title"><span>Instagram</span></h6>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div class="dlab-post-thum dlab-img-overlay1 dlab-img-effect">
                                                                <img src="../assets/images/gallery/widget-gallery/pic1.jpg" alt="">
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div class="dlab-post-thum dlab-img-overlay1 dlab-img-effect">
                                                                <img src="../assets/images/gallery/widget-gallery/pic2.jpg" alt="">
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div class="dlab-post-thum dlab-img-overlay1 dlab-img-effect">
                                                                <img src="../assets/images/gallery/widget-gallery/pic3.jpg" alt="">
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div class="dlab-post-thum dlab-img-overlay1 dlab-img-effect">
                                                                <img src="../assets/images/gallery/widget-gallery/pic4.jpg" alt="">
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                          
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- About Us End -->
                        <!-- subscribe -->
                       
                    </div>
                    <!-- contact area END -->
                </div>
                <!-- Content END-->
                <!-- Footer -->
                
                <!-- Footer END-->
                <button class="scroltop fa fa-chevron-up" ></button>
            </div>
    </div>
</template>
<style>
    a:hover{
        text-decoration: none;
        color: blue;
    }
    h4.title::after{
        color: blue;
        
    }
</style>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            blogs:[]
        }
    },
    created(){
        axios.get('https://vue-blog-12a9c.firebaseio.com/blog-post.json')
        .then(responce => {
            return responce.data;
        }).then(responce =>{
            var blogArray=[];
            for(let key in responce){
                responce[key].id = key;
                blogArray.push(responce[key]);

            }
            this.blogs = blogArray;
        })
    }
}
</script>