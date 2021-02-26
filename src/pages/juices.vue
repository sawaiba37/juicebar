<template>
    <q-page class="window-height window-width ">

 <div class="q-pa-md">
    <q-toolbar class="bg-pink-1 text-black text-center">
     
      

      <q-toolbar-title>Juice Bar</q-toolbar-title>

      <q-btn flat round dense icon="notifications" class="q-mr-sm" />
    </q-toolbar>
  </div>
       
           <div class="column q-ma-xs q-mt-md q-pa-sm" style="margin-top:10px">
         <q-btn class="glossy " size="xl"  icon-right="blender" rounded color="pink-2" label="Strawberry Shake" style="margin-top:10px" to="/shake1"/>  
         <q-btn class="glossy " size="xl"  icon-right="blender" rounded color="purple-4" label="Berry fruity Shake" style="margin-top:20px" to="/shake2"/> 
         <q-btn class="glossy  " size="xl" icon-right="blender" rounded color="light-green-5" label="Water Melon Drink" style="margin-top:20px" to="/shake3"/> 
         <q-btn class="glossy " size="xl" icon-right="blender" rounded color="yellow" label="Mango Milk Shake" style="margin-top:20px" to="/shake4"/>  
         <q-btn class="glossy" size="xl" icon-right="blender" rounded color="blue-4" label="Blue Berries Shake" style="margin-top:20px" to="/shake5"/>   
         
           </div>
          
         <q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        style="margin-top:100px"
      >
        <q-route-tab  icon="home"  exact to="/juices"/>
        <q-route-tab icon="add_shopping_cart" exact to="/order"/>
        <q-route-tab name="movies" icon="person" exact to="/profile"/>
      </q-tabs> 
      
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