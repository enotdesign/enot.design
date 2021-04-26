<template>
<div class="welcome">
  <div class="message">
    <h1 class="main-title">Diseño <br> Creativo</h1>
      <p><span>#</span>YoApoyoLoLocal</p>
  </div>
  <!-- <img src="@/icons/mainLogoIcon.vue" alt=""> -->
  <!-- <ProgramsIcons name="ai"/> -->
  
</div>



</template>

<script>
// import ProgramsIcons from './icons/ProgramsIcons'
import mainLogoIcon from "./icons/mainLogoIcon"
export default ({
  setup() {
    
  },

  components:{
    // ProgramsIcons
    mainLogoIcon
  }
})
</script>

<style lang="scss">
.main-title{
  font-size: 80px;
}
.welcome img{
  // margin-top: 100px;
  width: 40%;
  max-width: 500px;
}
.welcome .message p{
  font-size: 2.1875em;
  margin-top: 0.25em;
}
.welcome .message p span{
  color: #00B6FF;
}
</style>
