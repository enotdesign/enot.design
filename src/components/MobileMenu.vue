<template>

<!-- ponerle un evento a; :class para hidden -->
    <div class="screen z-50" :class="{'bg-screen' : menu}">
    <div :class="{'show' : menu }" class="reveal-menu  z-40 pt-3 pb-16 flex justify-between items-center flex-col justify-center bg-menuColor w-4/5 h-screen box-border">
      <div class="logo">
        <img class="w-48 pt-5 " src="@/assets/resources/enot-design.svg">
      </div>

      <!-- menu body -->
      <div class="menu text-xl font-light">
        <ul>
          <li class="p-3"><a href="#"><i class='icon bx bx-home-alt pr-2'></i> Home</a></li>
          <li class="p-3"><a href="#about"><i class='icon bx bx-user-circle pr-2'></i> Quien Soy</a></li>
          <li class="p-3"><a href="#"><i class='icon bx bx-vector pr-2'></i> Proyectos</a></li>
          <li class="p-3"><a href="#"><i class='icon bx bx-gift pr-2'></i> Social Pack</a></li>
          <li class="p-3"><a href="#"><i class='icon bx bx-message-dots pr-2'></i> Contactar</a></li>
        </ul>
      </div>

      <!-- Quick contact -->
      <div class="quick-contact w-full bg-menuColor2">
        <div class="wrapper text-center mx-11 my-5">
          <span class="font-bold">¿Estamos contra el tiempo? Contacto rápido.</span>
          <hr class="my-2 border-menucolornotimportant">
          <p><span class="text-lightblue">T:</span> 939-579-9929</p>
          <p><span class="text-lightblue">E:</span> anibal@enot.design</p>
          <span class="text-xs text-menucolornotimportant">Toca para ejecutar la accion</span>
        </div>
      </div>

      <div class="social-links text-3xl">
        <a href="https://github.com/enotdesign" target=”_blank”><i class='bx bxl-github p-2 mb-4'></i></a>
        <a href="https://codepen.io/enotdesign" target=”_blank”><i class='bx bxl-codepen p-2 mb-4'></i></a>
        <a href="https://www.instagram.com/enot.designs/" target=”_blank”><i class='bx bxl-instagram p-2 mb-4'></i></a>
        <a href="https://www.facebook.com/enot.design" target=”_blank”> <i class='bx bxl-facebook-circle p-2 mb-4'></i></a>
        <a href="https://www.linkedin.com/in/anibalbonilla/" target=”_blank”><i class='bx bxl-linkedin-square p-2 mb-4'></i></a>
      </div>
    </div>
    </div>

    <div @click="isOpen" class="button  flex items-center justify-center z-50 bottom-7 right-5 h-12 w-12 rounded-3xl bg-white fixed ">
      
      <i  v-if="menu" class='bx bx-x text-2xl text-lightblue'></i>
      <i  v-else class='bx bx-menu text-2xl text-lightblue'></i>
    </div>
</template>

<script>
import { ref } from "vue";
export default{

  setup(){
    let menu = ref(false);


    const isOpen = ()=>{
      menu.value = !menu.value;
      console.log(menu.value);
    }

    return {
      menu,
      isOpen
    }
  }

}

</script>

<style lang="scss" scoped>

  .reveal-menu{
    position: fixed;
    left: -2000px;
    transition: .5s;
  }

  .show{
    left: 0;
    
  }

  .bg-screen{
    background-color: rgb(0, 0, 0, 0.7);
    position:fixed;
    height: 100vh;
    width: 100vw;
    transition: .3s;
    
    
  }


</style>