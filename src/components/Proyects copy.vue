<template>
<div id="portafolio" class="container py-16">
    <span class="px-5 subtitulos">Portafolio</span>
    <h4 class="px-5 titulos">Trabajos Realizados</h4>
    <splide :options="splideOptions">

    <splide-slide>
        <div class="content">
                <img src="https://librosostenibilidad.files.wordpress.com/2017/03/paisaje-cultura-sostenibilidad.jpg" alt="">
            <div class="info">
                <div class="titles">
                    <p>Nova Home</p>
                    <span>Branding | Diseno Web</span>
                </div>

                <div class="action"><i class='bx bxl-behance'></i></div>
            </div>
        </div>
    </splide-slide>
    <splide-slide>
        <div class="content">
                <img src="https://librosostenibilidad.files.wordpress.com/2017/03/paisaje-cultura-sostenibilidad.jpg" alt="">
            <div class="info">
                <div class="titles">
                    <p>Nova Home</p>
                    <span>Branding | Diseno Web</span>
                </div>

                <div class="action"><i class='bx bxl-behance'></i></div>
            </div>
        </div>
    </splide-slide>
    <splide-slide>
        <div class="content">
                <img src="https://librosostenibilidad.files.wordpress.com/2017/03/paisaje-cultura-sostenibilidad.jpg" alt="">
            <div class="info">
                <div class="titles">
                    <p>Nova Home</p>
                    <span>Branding | Diseno Web</span>
                </div>

                <div class="action"><i class='bx bx-right-arrow'></i></div>
            </div>
        </div>
    </splide-slide>
    <splide-slide>
        <div class="content">
                <img src="https://librosostenibilidad.files.wordpress.com/2017/03/paisaje-cultura-sostenibilidad.jpg" alt="">
            <div class="info">
                <div class="titles">
                    <p>Nova Home</p>
                    <span>Branding | Diseno Web</span>
                </div>

                <div class="action"><i class='bx bx-right-arrow'></i></div>
            </div>
        </div>
    </splide-slide>
      
      
    </splide>  

</div>

</template>

<script>
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// // or
// import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// // or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import {Splide, SplideSlide} from '@splidejs/vue-splide';
export default {
    name: 'Proyects',
    components:{
        Splide,
        SplideSlide
    },
    setup(){
        let splideOptions = {
            perPage: 4,
            gap: 15,
            arrows: false,
            autoplay: true,
            breakpoints:{
                500:{
                    perPage: 1
                }
            },
            pagination: true,
            interval: 3000,
            
            
        }


        return{splideOptions}
    }

}
</script>

<style scoped>

.content{
    /* max-width: 300px; */
    width:100%;
    background:#091A28;
    border: 1px solid #0D2538;
    border-radius: 13px;
    margin-bottom: 50px
}

.content img{
    border-radius: 12px;
}

.content .info{
    display: flex;
    padding:20px;
    /* border: 1px solid red; */
    justify-content: space-between;
  align-items: center;
}
.info i{
    color: #00B6FF;
    font-size: 30px;
    margin-right: 15px;
}
.titles p{
    font-size: 20px;
    font-weight: 700;
}

.titles span{
    font-size: 13px;
    color: #00B6FF;
}
</style>