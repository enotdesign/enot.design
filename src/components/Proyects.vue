<template>
<!-- <div id="portafolio" class="container py-16">
    <span class="subtitulos">Portafolio</span>
    <h4 class="titulos">Trabajos Realizados</h4>
    <div class="options grid grid-cols-2 gap-4 flex justify-center">
        <div class="op1"><p>Branding</p></div>
        <div class="op1"><p>Diseño Web</p></div>
         <div class="op1"><p>Branding</p></div>
        <div class="op1"><p>Diseño Web</p></div>
    </div>
    <img src="../assets/resources/icon_freelance.svg" alt="">
    <img :class="images.class" :src="images.filedic" alt="">

  
</div> -->

<section id="project">
    <div class="project-heading">
        <span class="subtitulos">Portafolio</span>
        <h3 class="titulos">Trabajos Realizados</h3>
    </div>


    <!-- filter -->
    <ul class="project-filter">

        <li @click="projectClick" class="list project-filter-active">Todos</li>
        <li @click="projectClick" class="list">Diseño Web</li>
        <li @click="projectClick" class="list">Branding</li>
        <li @click="projectClick" class="list">Promos</li>
    </ul> 

</section>

</template>

<script>
export default {
    name: 'Proyects',
    data(){
        return {
            images: {
                class: 'My Custom class',
                name: 'Example Name',
                filedic: require('@/assets/resources/icon_freelance.svg'),
            },
            active: 'project-filter-active'
        }
    },

    methods: {
        projectClick(){
            console.log('hello')
            
        }
    }
    
    
}

</script>

<style scoped>

a{
    text-decoration: none;

}
ul{
    list-style: none;
}

#project{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px 0;
}

.project-filter{
    display:flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(237,237,237,0.6);
    flex-wrap: wrap;
    margin: 20px;
}

.project-filter li{
    margin: 10px;
    padding: 5px 20px;
    color: #9b9b9b;
    font-size: 1rem;
    letter-spacing: 0.5px;
    font-weight: 400px;
    cursor:pointer;
    user-select:none;
}
.project-filter-active{
    background: #f0f0f0;
    color: black;
}

</style>