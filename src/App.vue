<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style lang="scss" >
$colorPrincipal : #071521;
$menuColor: #0d2538;
$fontColor: #D1DCE9;
$secundaryFontColor: #53D8E6;


*{
    margin: 0;
    padding: 0;
    
}
body{
    font-family: 'Poppins', sans-serif;
    background-color: $colorPrincipal;
    color: #D1DCE9;
    
}

</style>
