<template>
    <div id="bg"> 
        <div class="page-wraper">
            <!-- <div id="loading-area"></div> -->
                <!-- header -->
                
                <!-- header END -->
                <!-- Content -->
                <div class="page-content bg-white">
                <div class="content-block">
                    <!-- About Us -->
                    <div class="section-full content-inner bg-white">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-head text-center">
                                        <div class="title-sm">Fashion</div>
                                        <h2 class="title-head"> {{blog.title}} </h2>
                                    </div>
                                    <div class="dlab-post-media blog-single">
                                        <a href="javascript:;"><img src="../assets/images/blog/large/pic3.jpg" alt=""></a>
                                    </div>
                                    <div class="blog-post blog-single blog-post-style-2">
                                        <div class="dlab-post-info">
                                            <div class="dlab-post-text text">
                                               
                                                <p>{{blog.content}} </p>
                                                <p></p>
                                            </div>
                                            <div class="blog-card-info style-1 no-bdr">
                                                <div class="date">
                                                    {{blog.blogDate}}
                                                </div>
                                                <div class="">
                                                    <ul class="social-link-round">
                                                        <li class="link-ic"><a href="javascript:void(0);" class="btn-link share"><i class="la la-share-alt"></i></a></li>
                                                        <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-twitter"></i></a></li>
                                                        <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-pinterest-p"></i></a></li>
                                                        <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-facebook"></i></a></li>
                                                        <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-instagram"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="">
                                                    <a href="" class="btn-link comment">WRITE A COMMENT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="min-container">
                                        <div class="">
                                            <!-- <div class="author-box blog-user m-b60">
                                                <div class="author-profile-info">
                                                    <div class="author-profile-pic">
                                                        <img src="../assets/images/testimonials/pic1.jpg" alt="">
                                                    </div>
                                                    <div class="author-profile-content">
                                                        <h6>Mercer Owen</h6>
                                                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quisma bibendum auctor nisi elit consequat ipsum, nec sagittis sem amet nibh vulputate cursus itaet mauris. </p>
                                                        <ul class="list-inline m-b0">
                                                            <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-twitter"></i></a></li>
                                                            <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-pinterest-p"></i></a></li>
                                                            <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-facebook"></i></a></li>
                                                            <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-instagram"></i></a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <!-- <div class="post-btn">
                                                <div class="prev-post">
                                                    <img src="../assets/images/blog/recent-blog/pic1.jpg" alt=""/>
                                                    <h6 class="title"><a href="post-gallery.html">Wardrobe this Season</a><span class="post-date">25 January, 2020</span></h6>
                                                </div>
                                                <div class="next-post">
                                                    <h6 class="title"><a href="post-gallery-alternative.html">Our Winter Fairytale</a> <span class="post-date">25 January, 2020</span></h6>
                                                    <img src="../assets/images/blog/recent-blog/pic3.jpg" alt=""/>
                                                </div>
                                            </div> -->
                                            <div class="clear m-b30" id="comment-list">
                                                <div class="comments-area" id="comments">
                                                    <h6 class="comments-title"><span>Comments</span></h6>
                                                    <div>
                                                        <!-- comment list END -->
                                                        <ol class="comment-list" >
                                                            <li class="comment">
                                                                <div class="comment-body">
                                                                    <div class="comment-author vcard"> <img class="avatar photo" src="../assets/images/testimonials/pic1.jpg" alt=""> <cite class="fn">consequat ipsum </cite> <span class="says">says:</span> </div>
                                                                    <div class="comment-meta"> <a href="javascript:void(0);">25 January, 2020</a> </div>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur, 
                                                                        esse placeat cupiditate provident, a, vitae nulla vero tempore
                                                                         nostrum eius distinctio recusandae excepturi sequi. Maxime labore deleniti inventore distinctio?</p>
                                                                    <div class="reply"> <a href="javascript:void(0);" class="comment-reply-link"><i class="fa fa-share"></i></a> </div>
                                                                </div>
                                                                
                                                               
                                                            </li>
                                                            
                                                        </ol>
                                                      
                                                        <!-- Form -->
                                                       <form action="">
                                                        <div class="comment-respond" id="respond">
                                                            <h3 class="comment-reply-title text-center" id="reply-title">Leave a Reply <small> <a style="display:none;" href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h3>
                                                            <form class="comment-form" id="commentform" method="post">
                                                                <p class="comment-form-author">
                                                                    <label for="author">Name <span class="required">*</span></label>
                                                                    <input  type="text" value="" placeholder="Name" id="author">
                                                                </p>
                                                                <p class="comment-form-email">
                                                                    <label for="email">Email <span class="required">*</span></label>
                                                                    <input  type="text" value="" placeholder="Email" id="email">
                                                                </p>
                                                                <p class="comment-form-comment">
                                                                    <label for="comment">Comment</label>
                                                                    <textarea  rows="8" placeholder="Add Comment" id="comment"></textarea>
                                                                </p>
                                                                <p class="form-submit text-center">
                                                                    <input type="submit" value="Post Comment" class="submit" >
                                                                </p>
                                                            </form>
                                                        </div>
                                                       </form>
                                                        <!-- Form END -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- About Us End -->
                   
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

<script>

import axios from 'axios';
export default{
        data(){
            return{
                id:this.$route.params.id,
                blog:[],
                allComments:{name:'', email:'', comment:''}
            }
        },
        created(){
            axios.get('https://vue-blog-12a9c.firebaseio.com/blog-post/' + this.id +'.json')
            .then(responce =>{
                this.blog = responce.data;
            })
        },
        methods:{
            // saveComment:function(){
            //     axios.post('https://vue-blog-12a9c.firebaseio.com/comment.json',this.allComments)
            //     .then(responce => {
            //         console.log(responce);
            //     })
            // }
        }
}

</script>