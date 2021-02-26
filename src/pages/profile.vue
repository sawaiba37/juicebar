<template>
    <q-page class="window-height window-width ">

 <div class="q-pa-md">
    <q-toolbar class="bg-pink-1 text-black text-center">
     
      

      <q-toolbar-title>Profile</q-toolbar-title>

      <q-btn flat round dense icon="notifications" class="q-mr-sm" />
    </q-toolbar>

     <q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        style="margin-top:10px"
        
      >
        <q-route-tab name="Profile" icon="perm_identity" exact to="/profile"/>
        <q-route-tab name="My Orders" icon="local_bar" exact to="/order"/>
        <q-route-tab name="Settings" icon="manage_accounts" exact to="/setting"/>
      </q-tabs>
      <q-card class="q-pa-sm q-ma-lg rounded" style="margin-top:10px" >
        <q-list bordered>
            <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>
        <q-item-section style="margin-left:50px">John</q-item-section>
      </q-item>
      <hr>
      <q-item clickable v-ripple>
        

        <q-item-section>Contact</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        

        <q-item-section>Mobile<br>+921 56778 78</q-item-section>
      </q-item>
<q-item clickable v-ripple>
        

        <q-item-section>Email<br>abc@gmail.com</q-item-section>
      </q-item>
        </q-list>
         </q-card>
        <q-card class="my-card bg-white q-ma-lg text-black rounded dense">
         
      
         <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section>Address 1: <br>abc fl#02, abc</q-item-section>
      </q-item>
       <q-item clickable v-ripple>
            <q-item-section>Address 1: <br>abc fl#02, abc</q-item-section>
      </q-item>
         </q-list>
       
        </q-card>
   
   <q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        style="margin-top:90px"
        
      >
        <q-route-tab  icon="home"  exact to="/juices"/>
        <q-route-tab icon="add_shopping_cart" exact to="/order"/>
        <q-route-tab  icon="person" exact to="/juices"/>
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
  
