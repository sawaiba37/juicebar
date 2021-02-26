<template>
<q-page class="window-height window-width col ">
 <div class="q-ma-lg">
     <q-toolbar class="bg-pink-1 text-black text-center">
     
      

      <q-toolbar-title>Profile</q-toolbar-title>

      <q-btn flat round dense icon="notifications" class="q-mr-sm" />
    </q-toolbar>

     <q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        
      >
        <q-route-tab name="Profile" icon="perm_identity" exact to="/profile"/>
        <q-route-tab name="My Orders" icon="local_bar" exact to="/order"/>
        <q-route-tab name="Settings" icon="manage_accounts" exact to="/setting"/>
      </q-tabs>
        <q-card style="margin-top:40px">
        <q-img
        src="icons/berry.png"
        style="width:70px;height:130px;margin-top:5px;margin-right:5px"
        />
     <b>Order ID: 4355676 7</b>
     <br><p style="margin-left:180px">Status: Not Delivered</p>
      
        </q-card>
        

  

<q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        style="margin-top:280px"
      >
        <q-route-tab  icon="home"  exact to="/juices"/>
        <q-route-tab icon="add_shopping_cart" exact to="/cart1"/>
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