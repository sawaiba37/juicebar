<template>
<q-page class="window-height window-width col ">
 <div class="q-ma-lg">
     
        <q-card>
        <q-img
        src="icons/watermelon.png"
        style="width:100px;height:110px;margin-top:5px;margin-right:5px"
        />
     Watermelon shake: $20
        </q-card>
        
      <q-card style="margin-top:10px">
        <q-img
        src="icons/watermelon.png"
        style="width:100px;height:110px;margin-top:5px;margin-right:5px"
        />
   Watermelon shake: $20
        </q-card>
   
  <hr>
  <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section>Your Order</q-item-section>
      </q-item>
      <hr>
      <q-item clickable v-ripple>
        <q-item-section>Bill Total</q-item-section>
        <q-item-section avatar >
         $20
        </q-item-section>
      </q-item>
<hr>
      <q-item clickable v-ripple>
        <q-item-section>Discount</q-item-section>
        <q-item-section avatar>
          $0
        </q-item-section>
      </q-item>
      <hr>
      <q-item clickable v-ripple>
        <q-item-section>Grand Total</q-item-section>
        <q-item-section avatar>
          $20
        </q-item-section>
      </q-item>
  </q-list>
  <q-btn class="glossy " size="xl"   rounded color="pink-2" label="Proceed Now" style="margin-top:10px;margin-left:70px" to="/proceed"/>  
<q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        
      >
        <q-route-tab  icon="home"  exact to="/juices"/>
        <q-route-tab icon="add_shopping_cart" exact to="/cart3"/>
        <q-route-tab name="movies" icon="person" exact to="/profile"/>
      </q-tabs>
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