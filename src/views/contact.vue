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
                        <div class="section-full bg-white content-inner-1 contact-form">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="text-center section-head">
                                            <h1 class="contact-title">Contact Me</h1>
                                        </div>
                                        <div class="banner-contact">
                                            <img src="images/contact.jpg" alt=""/>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-9 col-lg-8 m-b30">
                                                <div class="dzFormMsg"></div>
                                                <form method="post" class="dzForm" action="https://lemars.dexignzone.com/xhtml/script/contact.php">
                                                    <input type="hidden" value="Contact" name="dzToDo">
                                                    <div class="row form-set">
                                                        <div class="col-md-6 col-sm-6">
                                                            <div class="form-group">
                                                                <input name="dzName" type="text" required class="form-control" placeholder="Name">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-sm-6">
                                                            <div class="form-group">
                                                                <input name="dzEmail" type="email" class="form-control" required  placeholder="Email" >
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 col-sm-12">
                                                            <div class="form-group">
                                                                <textarea name="dzMessage" rows="4" class="form-control" required placeholder="Add Your Message"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 col-sm-12">
                                                            <div class="form-group">
                                                                <div class="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                                <input class="form-control d-none" style="display:none;" data-recaptcha="true" required data-error="Please complete the Captcha">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 col-sm-12 text-center">
                                                            <button name="submit" type="submit" value="Submit" class="btn radius-xl">Send Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="col-xl-3 col-lg-4 m-b30">
                                                <div class="contact-info">
                                                    <div class="extra-info">
                                                        <div class="text-uppercase info-title text-center">Additional info</div>
                                                        <ul>
                                                            <li><i class="la la-location-arrow"></i> Agege, lagos</li>
                                                            <li><i class="la la-globe"></i> princessade33@gmail.com</li>
                                                            <li><i class="la la-mobile-phone"></i> +(234) 813 069 2014</li>
                                                        </ul>
                                                    </div>
                                                    <div class="text-center">
                                                        <ul class="list-inline link-btn-style m-b0">
                                                            <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-facebook"></i></a></li>
                                                            <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-twitter"></i></a></li>
                                                            <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-snapchat-ghost"></i></a></li>
                                                            <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-pinterest-p"></i></a></li>
                                                            <li><a href="javascript:void(0);" class="btn-link"><i class="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
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

<script>
// import '@/assets/plugins/bootstrap-select/bootstrap-select.min.js';
// import  externalJs from '@/assets/plugins/bootstrap-select'


// export default{
//   mounted(){
//     this.externalJs();
//   }
// }

</script>