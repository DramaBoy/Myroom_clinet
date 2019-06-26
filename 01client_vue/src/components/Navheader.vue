<template>
    <div class="center">
        <Header />
        <Header1 v-on:header1select="incrementTotal"/>
        <Header2/>
        <Header3 ref="head3"/>
    </div>
</template>
<script>
import Header from "./Header";
import Header1 from './Header-1';
import Header2 from "./Header2";
import Header3 from "./Header3";
export default {
    name:"Navheader",
    components:{
       Header,
       Header1,
       Header2,
       Header3,
    },
    methods: {
         incrementTotal: function (index) {
             console.log("主"+index);
             this.$refs.head3.changeBgc(index);
    }
    },
}
</script>

<style scoped>
.center{
    width:1180px;
    margin: 0 auto;
}
</style>