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
        
      >
        <q-route-tab name="Profile" icon="perm_identity" exact to="/profile"/>
        <q-route-tab name="My Orders" icon="local_bar" exact to="/order"/>
        <q-route-tab name="Settings" icon="manage_accounts" exact to="/setting"/>
      </q-tabs>
    <div class="q-gutter-md row items-start" style="margin-left:10px;margin-top:20px">
 <q-img
       src="icons/call.png"
        style="width: 120px"
        basic
        spinner-color="white"
        class="rounded-borders">
       
 </q-img>
      <q-img
       src="icons/email.png"
        style="width: 130px"
        

        basic
        spinner-color="white"
        class="rounded-borders"
      />
      </div>
      <q-card class="q-pa-xs q-ma-lg rounded" style="margin-top:10px" >
        <q-list bordered>
            
      <q-item clickable v-ripple>
       

        <q-item-section>
            <q-icon name="lock"/>
            </q-item-section>
            <q-item-section >
           change password
            </q-item-section>
      </q-item>

     <q-item clickable v-ripple>
       

        <q-item-section>
            <q-icon name="feedback"/>
            </q-item-section>
            <q-item-section>
           Feedback
            </q-item-section>
      </q-item>
<q-item clickable v-ripple>
       

        <q-item-section>
            <q-icon name="delete"/>
            </q-item-section>
            <q-item-section>
          Delete Account
            </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
       

        <q-item-section>
            <q-icon name="logout" @click="myFunction()"/>
            </q-item-section>
            <q-item-section>
       logout
            </q-item-section>
      </q-item>
        </q-list>
         </q-card>
          <q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        style="margin-top:100px"
        
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
    },
    methods:{
        myFunction(){
            this.$router.push('index')
        }
    }
}
</script>