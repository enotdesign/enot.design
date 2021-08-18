

<template>
    <div class="bg-thirtbg">
        <div class="container flex py-16 md:items-center">
            <div class="content-info md:w-1/2">
                <span class="subtitulos">{{data.subtitle}}</span>
                <h2 class="titulos">{{data.title}}</h2>
                <p>{{data.body}}</p>
                <ul class="pt-3 pl-3 text-base">
                    <li v-for = "list in data.list" :key="list" class="pb-1">
                        <i class='bx bx-check-circle text-lightblue'></i>
                        {{list}}
                    </li>
                </ul>
            </div>
           
            <div class="image md:w-1/2 invisible md:visible ">
                <img class="freelance" src="../assets/resources/icon_freelance.svg" alt="">
            </div>
        </div>
    </div>
  
</template>

<script>
export default {


    name: 'TheSeed',

    setup(){

        let data = {
            subtitle: '¿No tienes resultados?',
            title:'No Sólo Es "Hacer" Una Web',
            body: 'Una buena página web que cumpla los objetivos de la empresa conlleva muchas decisiones: a nivel técnico, de contenidos y estratégico. Algunos puntos claves son:',
            list: [
                'Tu web debe estar adaptada a móviles',
                'Saber cual es tu público objetivo',
                'Aplicar un buen copywriting',
                'Tener un SEO optimizado para Google'
            ],
            
        }

        return {data}
    }

}
</script>

<style>
.freelance{
    /* width:750px; */
}
</style>