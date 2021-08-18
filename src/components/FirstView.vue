<template>

  <div class="bg h-screen bg-cover bg-center">

    <div class="container">
      <div class="head-logo flex justify-between pt-5">
        <img class="w-10" src="@/assets/resources/isotipo.svg">
      </div>
    </div>

    <div class="container h-screen flex flex-col md:flex-row md:items-center md:justify-between">
      <div class="maintitle md:w-1/2">
        <h1 class="font-bold text-5xl mb-5 mt-36 leading-tight md:mt-1 md:text-6xl">{{title}}</h1>
        <p class="text-left text-2xl md:mt-10">{{subtitle}}</p>
        <br><br>
        <button class=" hover:bg-lightblue text-white font-bold border border-lightblue py-2 px-4 mr-4 rounded inline-flex items-center">
          <span>¡Empecemos!</span>
        </button>
        <button class="bg-lightblue hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <a href="#portafolio">Mis Trabajos</a>
        </button>
      </div>

      <div class="square-logo invisible md:visible md:w-1/2">
        <img src="@/assets/resources/logo-square.svg">
      </div>
    </div>

    <div class="text-center absolute inset-x-0 bottom-0 z-0">
      <i class='animate-bounce bx bx-down-arrow-alt text-7xl'></i>
    </div>    
  </div>

</template>

<script>
  // import ProgramsIcons from './icons/ProgramsIcons'
  export default ({
    
    setup() {
      const title = "Ya es hora de sacarle provecho a tu página web";
      const subtitle = "de forma estratégica para aumentar ventas y mejorar tu presencia en internet."

      return {title, subtitle};
    },

    components: {}
  })
</script>

<style lang="scss">

</style>