<template>
    <div class="referencias">
      <div class="container">
        <h5 class="text-4xl text-lightblue font-bold">¡Soy muy bueno en lo que hago!</h5>
        <p class="pb-12 text-lg" >Pero ojo no lo digo yo, lo dicen mis clientes…</p>



        <splide :options="splideOptions">

    <splide-slide class="pb-12">
        <div class="content bg-thirtbg border-bordercolor">
            <p>Una persona súper amable y respetuoso, con muchas ideas inovadoras. Me ah realizado varios trabajos y he quedado súper complacido con los mismos. No tengo dudas que los trabajos que el les realize les van a encantar.</p>
        </div>
    </splide-slide>
    <splide-slide  class="pb-12">
        <div class="content bg-thirtbg border-bordercolor">
            <p>Si buscas a alguien que este dispuesto a trabajar tu logo a la perfección con lujos y detalles, único, más a tu gusto no esperes mas busca a Anibal Bonilla super profesional, dispuesto a complacer al cliente y dar la milla extra. 10/10</p>
        </div>
    </splide-slide>
      <splide-slide  class="pb-12">
        <div class="content bg-thirtbg border-bordercolor">
            <p>Enot Design creo mi logo y el resultado final fue mas allá de lo que esperaba, le exprese mis ideas y con sus excelentes recomendaciones permitieron un resultado final profesional, obtuve un logo creativo, único y que expresaba mi marca. Lo recomiendo al 100% a cualquiera que requiera de alguien creativo y profesional, sin duda alguna volvería a contactar sus servicios.</p>
        </div>
    </splide-slide>
          <splide-slide>
        <div class="content bg-thirtbg border-bordercolor">
            <p>Excelente profesional y sobretodo creativo. Posee vasto conocimiento en el área de artes gráficas y diseño, tanto web como de impresión. Lo recomiendo a ojos cerrados.</p>
        </div>
    </splide-slide>
        </splide>
      </div>
    </div>  
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import {Splide, SplideSlide} from '@splidejs/vue-splide';
export default {
  name: 'Recomendations',
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
        font-size: 13px;
        padding: 20px;
        margin: 10px 0px;
        border-radius: 20px;
        /* min-height: 300px; */
        -webkit-box-shadow: 4px 16px 20px -4px rgba(0,0,0,0.67); 
        box-shadow: 4px 16px 20px -4px rgba(0,0,0,0.67);
    }

    .referencias{
        background: #091A28;
        padding:20px;
    }
</style>