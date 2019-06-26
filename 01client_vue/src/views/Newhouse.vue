<template>
  <div class="hello">
    <br>
    <selectform/>
     <br>
  </div>
</template>

<script>
import selectform from "../components/selectform";
export default {
  name:"Newhouse",
  components: {
    selectform
  }      
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 1180px;
  height: auto;
  margin: 0 auto;
}
</style>
