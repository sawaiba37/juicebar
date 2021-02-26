<template>
<q-page class="window-height window-width column" style="background:#85C1E9 ">
  <div class="q-ma-xs">
<div class="q-ma-md">
<img
     rounded
      src="icons/berry.png"
      style="width:90px;height:150px;margin-left:130px;margin-top:30px"

   >
  
   </div>
   <div>
      <h4 class="text-center">Berry Fruity Shake</h4><br>
 <h3 class="text-center" style="margin-top:-50px">Price:<br>$20</h3>
   </div>
   
    <q-btn class="glossy "  size="xl"  rounded color="pink-2" label="Add To Cart" style="margin-top:2px;margin-left:100px" to="/cart1"/>  
<div>
        <q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        style="margin-top:100px"
        
      >
        <q-route-tab  icon="home"  exact  to="/juices"/>
        <q-route-tab icon="add_shopping_cart" exact to="/juices"/>
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

  
