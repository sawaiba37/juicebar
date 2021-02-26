<template>
<q-page class="window-height window-width  column" style="background:#F5B7B1 ">
  <div class="q-ma-xs">
<div class="q-ma-md">
<img
     rounded
      src="icons/strawberry.png"
      style="width:100px;margin-left:130px;margin-top:30px"

   >
  
   </div>
   <div>
      <h4 class="text-center">Strawberry Shake</h4><br>
 <h3 class="text-center" style="margin-top:-50px">Price:<br>$20</h3>
   </div>
   
    <q-btn class="glossy "  size="xl"  rounded color="pink-2" label="Add To Cart" style="margin-top:2px;margin-left:100px" to="/cart"/>  
<div>
        <q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        style="margin-top:100px"
        
      >
        <q-route-tab  icon="home"  exact  to="/juices"/>
        <q-route-tab icon="add_shopping_cart" exact to="/cart"/>
        <q-route-tab name="movies" icon="person" exact  to="/juices"/>
      </q-tabs> 

      </div>
      </div>
</q-page>

      </template>
<script>
  export default{
    data(){
        return{
            tab:null
        }
    }
}
</script>
  
