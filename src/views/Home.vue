<template>
    <mobile-menu/>
    <FirstView/>
    <TheSeed/>
    <Services/>
    <Proyects/>
    <!-- <Recomendations/> -->
    <Contact/>
    <div class="quote px-5 p-10 bg-blueborder">
      <p class="italic">"El que cree que cuesta caro un profesional, no sabe lo caro que cuesta un incompetente."</p>
    </div>

    <!-- about -->
    <div class="container px-5 pt-10 pb-10 text-left bg-secondbg rounded-t-lg">

      <h2 class="titulos my-3">Estoy Preparado para Ayudarte</h2>
      <p>¡Hola!, soy Anibal Bonilla llevo trabajando como diseñador gráfico por 10 años. La misión es ayudarte a ti y a
        otros pequeños comerciantes a potenciar su negocio en internet ya sea creando su “branding” o desarrollando su
        página web.</p>

      <div class="tech">
        <h3 class="titulos text-center my-5 ">Tecnologías que utilizo</h3>
        <div class="tech-list flex justify-center">
          <div class="box-techologies">
            <img src="../assets/resources/js.svg" alt="">
          </div>
          <div class="box-techologies">
            <img src="../assets/resources/php.svg" alt="">
          </div>
          <div class="box-techologies">
            <img src="../assets/resources/vue.svg" alt="">
          </div>
          <div class="box-techologies">
            <img src="../assets/resources/wordpress.svg" alt="">
          </div>
          <div class="box-techologies">
            <img src="../assets/resources/ai.svg" alt="">
          </div>
          <div class="box-techologies">
            <img src="../assets/resources/ps.svg" alt="">
          </div>          
        </div>
      </div>
    </div>

</template>

<script>
  // @ is an alias to /src
  import FirstView from '@/components/FirstView.vue'
  import MobileMenu from '@/components/MobileMenu.vue'
  import TheSeed from '@/components/TheSeed.vue'  
  import Proyects from '@/components/Proyects.vue'
  import Services from '@/components/Services.vue'
  // import Recomendations from '@/components/Recomendations.vue'
  import Contact from '@/components/Contact.vue'

  export default {
    name: 'Home',
    components: {
      FirstView,
      MobileMenu,
      TheSeed,
      Proyects,
      Services,
      // Recomendations,
      Contact,

    }
  }
</script>


<style scoped>
  .bg {
    background-image: url('../assets/resources/bg.png');
  }
</style>