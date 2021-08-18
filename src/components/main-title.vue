<template>
 <span class="subtitulos">{{subtitle}}</span>
 <h3 class="titulos">{{title}}</h3> 
</template>

<script>
console.log('gello');
export default {
    name:'Main Title',
    props:['title','subtitle']
}
</script>

