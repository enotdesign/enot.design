<template>
  <div class="home">
    <!-- <FirstView/> -->
    <!-- <img src="@/assets/resources/enot-design.svg"> -->


    <!-- mobile menu -->
    <div class="mobile-menu hidden z-40 pt-3 pb-16 flex justify-between items-center flex-col justify-center bg-menuColor w-4/5 h-screen box-border fixed">

      <div class="logo">
        <img class="w-48 pt-5 " src="@/assets/resources/enot-design.svg">
      </div>

      <div class="menu text-xl font-light">
        <ul>
          <li class="p-3"><a href="#"><i class='icon bx bx-home-alt pr-2'></i> Home</a></li>
          <li class="p-3"><a href="#about"><i class='icon bx bx-user-circle pr-2'></i> Quien Soy</a></li>
          <li class="p-3"><a href="#"><i class='icon bx bx-vector pr-2'></i> Proyectos</a></li>
          <li class="p-3"><a href="#"><i class='icon bx bx-gift pr-2'></i> Social Pack</a></li>
          <li class="p-3"><a href="#"><i class='icon bx bx-message-dots pr-2'></i> Contactar</a></li>
        </ul>
      </div>

      <div class="quick-contact">
        <span>Contacto</span>
        <hr>
        <p>T: 939-579-9929</p>
        <p>E: anibal@enot.design</p>
      </div>

      <div class="social-links text-3xl">
        <a href="https://github.com/enotdesign" target=”_blank”><i class='bx bxl-github p-2 mb-4'></i></a>
        <a href="https://codepen.io/enotdesign" target=”_blank”><i class='bx bxl-codepen p-2 mb-4'></i></a>
        <a href="https://www.instagram.com/enot.designs/" target=”_blank”><i class='bx bxl-instagram p-2 mb-4'></i></a>
        <a href="https://www.facebook.com/enot.design" target=”_blank”> <i class='bx bxl-facebook-circle p-2 mb-4'></i></a>
        <a href="https://www.linkedin.com/in/anibalbonilla/" target=”_blank”><i class='bx bxl-linkedin-square p-2 mb-4'></i></a>
      </div>
    </div>
    <!-- BIENVENIDA -->
    <div class="bg px-5 h-screen bg-cover">
      <div class="container flex flex-col">
        <div class="head-logo flex justify-between pt-5">

          <img class="w-10" src="@/assets/resources/isotipo.svg">
          <div class="burger-menu">
            <i class='bx bx-dots-horizontal-rounded text-4xl'></i>
          </div>
        </div>

        <div class="maintitle">
          <h1 class="font-bold text-5xl mb-5 mt-64">Diseño y Desarrollo de Páginas Web</h1>
          <span class="text-left text-2xl"><span class="text-lightblue">#</span>YoApoyoLoLocal</span>
        </div>


        <div class="text-center animate-bounce relative top-52">
          <i class='bx bx-down-arrow-alt text-7xl'></i>
        </div>
      </div>
    </div>
    <!-- END ------ BIENVENIDA -->

    <!-- SERVICIOS -->

    <div class="quick-service px-5 py-16" id="servicios">

      <div class="container">
        <h3 class="titulos text-center mb-10">Servicios</h3>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="col">


            <div class="service p-3">
              <!-- SERVICIO COMPONENTE -->
              <div class="box-services">
                <div class="icon-service self-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="110.029" height="91.865" viewBox="0 0 110.029 91.865">
                    <g id="Group_301" data-name="Group 301" transform="translate(273 -2254.572)">
                      <path id="Path_84" data-name="Path 84"
                        d="M-246.31,827.306v-9.323c.59-10.257-4.087-10.788-9.128-10.788h-90.924c-5.041,0-9.581-1.391-9.128,10.788v9.323Z"
                        transform="translate(83.021 1447.876)" fill="#ff6d4b" opacity="0.25" />
                      <rect id="Rectangle_86" data-name="Rectangle 86" width="109.029" height="90.865" rx="5.936"
                        transform="translate(-272.5 2255.072)" fill="none" stroke="#ff6d4b" stroke-miterlimit="10"
                        stroke-width="1" />
                      <g id="Group_121" data-name="Group 121" transform="translate(-236.599 2293.7)">
                        <g id="Group_120" data-name="Group 120" transform="translate(-26.401 -1)">
                          <path id="Path_465" data-name="Path 465"
                            d="M3.906-4.347c0,1.3-.441,3.381-.441,4.977,0,2.457,1.617,3.8,4.011,3.8H8.988V1.491H8.169c-.9,0-1.26-.42-1.26-1.218,0-1.134.357-3.276.357-4.746a2.653,2.653,0,0,0-2.247-2.9v-.042A2.632,2.632,0,0,0,7.266-10.29c0-1.47-.357-3.633-.357-4.767,0-.8.357-1.2,1.26-1.2h.819v-2.94H7.476c-2.394,0-4.011,1.344-4.011,3.78,0,1.6.441,3.675.441,4.977,0,.987-.588,1.554-2,1.617v2.856C3.318-5.9,3.906-5.271,3.906-4.347Zm10.479,0c0,1.3-.441,3.381-.441,4.977,0,2.457,1.617,3.8,4.011,3.8h1.512V1.491h-.819c-.9,0-1.26-.42-1.26-1.218,0-1.134.357-3.276.357-4.746a2.653,2.653,0,0,0-2.247-2.9v-.042a2.632,2.632,0,0,0,2.247-2.877c0-1.47-.357-3.633-.357-4.767,0-.8.357-1.2,1.26-1.2h.819v-2.94H17.955c-2.394,0-4.011,1.344-4.011,3.78,0,1.6.441,3.675.441,4.977,0,.987-.588,1.554-1.995,1.617v2.856C13.8-5.9,14.385-5.271,14.385-4.347ZM25.221,0h4.347L32-9.7,34.356,0H38.7l3.843-14.742H38.682L36.54-4.011,34.02-14.742H30.072L27.447-4.011,25.326-14.742H21.483Zm24.3-9.009a2.026,2.026,0,0,1,2.205,2.016H47.229A2.221,2.221,0,0,1,49.518-9.009Zm5.607,5.124H51.3a1.909,1.909,0,0,1-1.869,1.134A2.172,2.172,0,0,1,47.208-5h8.127a9.075,9.075,0,0,0,.063-1.05,5.522,5.522,0,0,0-5.838-5.838,5.628,5.628,0,0,0-5.922,6.027A5.649,5.649,0,0,0,49.56.168,5.476,5.476,0,0,0,55.125-3.885Zm5.754-6.174V-15.54H57.288V0h3.591V-1.638A4.118,4.118,0,0,0,64.491.168c2.877,0,5.166-2.352,5.166-6.048s-2.268-6.006-5.166-6.006A4.137,4.137,0,0,0,60.879-10.059ZM66-5.88A2.65,2.65,0,0,1,63.42-2.961a2.628,2.628,0,0,1-2.562-2.9,2.628,2.628,0,0,1,2.562-2.9A2.612,2.612,0,0,1,66-5.88ZM76.818-4.347c0,1.3.441,3.381.441,4.977,0,2.457-1.617,3.8-4.011,3.8H71.736V1.491h.819c.9,0,1.26-.42,1.26-1.218,0-1.134-.357-3.276-.357-4.746a2.653,2.653,0,0,1,2.247-2.9v-.042a2.632,2.632,0,0,1-2.247-2.877c0-1.47.357-3.633.357-4.767,0-.8-.357-1.2-1.26-1.2h-.819v-2.94h1.512c2.394,0,4.011,1.344,4.011,3.78,0,1.6-.441,3.675-.441,4.977,0,.987.588,1.554,2,1.617v2.856C77.406-5.9,76.818-5.271,76.818-4.347Zm10.479,0c0,1.3.441,3.381.441,4.977,0,2.457-1.617,3.8-4.011,3.8H82.215V1.491h.819c.9,0,1.26-.42,1.26-1.218,0-1.134-.357-3.276-.357-4.746a2.653,2.653,0,0,1,2.247-2.9v-.042a2.632,2.632,0,0,1-2.247-2.877c0-1.47.357-3.633.357-4.767,0-.8-.357-1.2-1.26-1.2h-.819v-2.94h1.512c2.394,0,4.011,1.344,4.011,3.78,0,1.6-.441,3.675-.441,4.977,0,.987.588,1.554,2,1.617v2.856C87.885-5.9,87.3-5.271,87.3-4.347Z"
                            transform="translate(0 22.3)" fill="#ff6d4b" />
                        </g>
                      </g>
                      <line id="Line_9" data-name="Line 9" x2="109" transform="translate(-272.5 2275.182)" fill="none"
                        stroke="#ff6d4b" stroke-miterlimit="10" stroke-width="1" />
                      <circle id="Ellipse_29" data-name="Ellipse 29" cx="3" cy="3" r="3"
                        transform="translate(-177 2262)" fill="#ff6d4b" />
                      <circle id="Ellipse_30" data-name="Ellipse 30" cx="3" cy="3" r="3"
                        transform="translate(-186 2262)" fill="#ff6d4b" />
                      <circle id="Ellipse_31" data-name="Ellipse 31" cx="3" cy="3" r="3"
                        transform="translate(-195 2262)" fill="#ff6d4b" />
                    </g>
                  </svg>
                </div>
                <div class="information md:pl-5">
                  <h4 class="text-xl my-4 font-bold text-center md:text-left ">Páginas Web</h4>
                  <p>Estoy preparado para crear una página web moderna y estratégica para tener un alto impacto en el
                    sector de cada cliente.</p>
                </div>
              </div>

            </div>


          </div>

          <div class="col">
            <div class="service p-3">
              <!-- SERVICIO COMPONENTE -->
              <div class="box-services">
                <div class="icon-service self-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="94.31" height="93.534" viewBox="0 0 94.31 93.534">
                    <g id="Group_300" data-name="Group 300" transform="translate(0.5 -0.5)">
                      <path id="Path_79" data-name="Path 79"
                        d="M-423.134,800.7h-3.286l-25.627,51.255,12.924,22.342h28.694l12.923-22.342Zm-1.643,51.912A7.228,7.228,0,0,1-432,845.38a7.229,7.229,0,0,1,7.228-7.228,7.228,7.228,0,0,1,7.228,7.228A7.227,7.227,0,0,1-424.777,852.608Z"
                        transform="translate(471.431 -787.331)" fill="#4d9cff" opacity="0.25" />
                      <rect id="Rectangle_83" data-name="Rectangle 83" width="11.828" height="11.828"
                        transform="translate(40.741 1.657)" fill="none" stroke="#4d9cff" stroke-miterlimit="10"
                        stroke-width="1" />
                      <rect id="Rectangle_84" data-name="Rectangle 84" width="38.113" height="6.571"
                        transform="translate(27.599 86.963)" fill="none" stroke="#4d9cff" stroke-miterlimit="10"
                        stroke-width="1" />
                      <rect id="Rectangle_85" data-name="Rectangle 85" width="11.828" height="11.828"
                        transform="translate(1.314 43.712)" fill="none" stroke="#4d9cff" stroke-miterlimit="10"
                        stroke-width="1" />
                      <line id="Line_6" data-name="Line 6" x2="26.285" transform="translate(52.569 8.228)" fill="none"
                        stroke="#4d9cff" stroke-miterlimit="10" stroke-width="1" />
                      <circle id="Ellipse_16" data-name="Ellipse 16" cx="7.228" cy="7.228" r="7.228"
                        transform="translate(78.854 1)" fill="none" stroke="#4d9cff" stroke-miterlimit="10"
                        stroke-width="1" />
                      <line id="Line_7" data-name="Line 7" x1="26.285" transform="translate(14.457 8.228)" fill="none"
                        stroke="#4d9cff" stroke-miterlimit="10" stroke-width="1" />
                      <circle id="Ellipse_17" data-name="Ellipse 17" cx="7.228" cy="7.228" r="7.228"
                        transform="translate(0 1)" fill="none" stroke="#4d9cff" stroke-miterlimit="10"
                        stroke-width="1" />
                      <line id="Line_8" data-name="Line 8" y2="37.456" transform="translate(46.655 13.366)" fill="none"
                        stroke="#4d9cff" stroke-miterlimit="10" stroke-width="1" />
                      <circle id="Ellipse_18" data-name="Ellipse 18" cx="7.228" cy="7.228" r="7.228"
                        transform="translate(39.427 50.821)" fill="none" stroke="#4d9cff" stroke-miterlimit="10"
                        stroke-width="1" />
                      <path id="Path_80" data-name="Path 80" d="M-437.8,797.2" transform="translate(475.909 -787.654)"
                        fill="none" stroke="#4d9cff" stroke-miterlimit="10" stroke-width="1" />
                      <path id="Path_81" data-name="Path 81" d="M-427.941,796.2s-30.227,3.943-32.856,35.484"
                        transform="translate(468.682 -787.968)" fill="none" stroke="#4d9cff" stroke-miterlimit="10"
                        stroke-width="1" />
                      <g id="Group_118" data-name="Group 118" transform="translate(19.385 13.366)">
                        <path id="Path_82" data-name="Path 82" d="M-439.123,874.293l-12.923-22.342,25.627-51.255"
                          transform="translate(452.047 -800.696)" fill="none" stroke="#4d9cff" stroke-miterlimit="10"
                          stroke-width="1" />
                        <path id="Path_83" data-name="Path 83" d="M-417.342,874.293l12.923-22.342L-430.047,800.7"
                          transform="translate(458.96 -800.696)" fill="none" stroke="#4d9cff" stroke-miterlimit="10"
                          stroke-width="1" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="information md:pl-5">
                  <h4 class="text-xl my-4 font-bold text-center md:text-left">Diseño Gráfico</h4>
                  <p>El buen diseño gráfico tiene que ser abordado de una manera estratégica para tener éxito y atraer a
                    clientes potenciales.</p>
                </div>
              </div>

            </div>
          </div>


        </div>



        <!-- MORE SERVICE SMALL -->
        <div class="text-center table mx-auto text-xs mt-7">
          <ul class="list-none">
            <li class="servicestip"><i class='bx bx-check-circle text-lightblue'></i> Branding</li>
            <li class="servicestip"><i class='bx bx-check-circle text-lightblue'></i> Diseño UI</li>
            <li class="servicestip"><i class='bx bx-check-circle text-lightblue'></i> Logos</li>
            <li class="servicestip"><i class='bx bx-check-circle text-lightblue'></i> Desarrollo Web</li>
            <li class="servicestip"><i class='bx bx-check-circle text-lightblue'></i> E-mail Design</li>
            <li class="servicestip"><i class='bx bx-check-circle text-lightblue'></i> Drawings</li>
          </ul>
        </div>
      </div>
    </div>






    <!-- about -->
    <div class="container px-5 pt-10 pb-10 text-left bg-secondbg rounded-t-lg">

      <h2 class="titulos my-3">Estoy preparado para comenzar!</h2>
      <p>¡Hola!, soy Anibal Bonilla llevo trabajando como diseñador gráfico por 10 años. La misión es ayudarte a ti y a
        otros pequeños comerciantes a potenciar su negocio en internet ya sea creando su “branding” o desarrollando su
        página web.</p>

      <div class="tech">
        <h3 class="titulos text-center my-7 ">Tecnologías que utilizo</h3>
        <div class="tech-list flex justify-center mt-5">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import FirstView from '@/components/FirstView.vue'

  export default {
    name: 'Home',
    components: {
      // FirstView
    }
  }
</script>


<style scoped>
  .bg {
    background-image: url('../assets/resources/test-bg.jpg');
  }
</style>