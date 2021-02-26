<template>
  <q-page class="window-height window-width row justify-center items-center" style="background:#FFF5EE">
    <div class="column">
      <div class="row q-gutter-md">
    <img
     rounded
      src="icons/logo3.png"
      style="width:80px;height:150px;margin-left:70px;margin-top:2px"

   >
   
    </div>
    <div class="row q-gutter-y-md column" >
     <q-form  >
<q-input 
                standard
                clearable
                
                
                v-model="email"
                type="  Email"
                label="Email"
              />
              <q-input
           
                standard
                clearable
               v-model="password"
                type="Password"
                label="Password"
              />
              
            </q-form>
          <!-- </q-card-section> --> 
          <!-- <q-card-actions class="q-px-lg"> -->
            
          <!-- </q-card-actions>
          <q-card-section class="text-center q-pa-none"> -->
           <q-btn class="glossy" size="xl" rounded color="pink" @click="checkUser" label="Login" />
    </div>
    </div>
   
  </q-page>
</template>

<script>
export default {
 data(){
   return{
     email:null,
     password:null,
     
   }
 },
 methods:{
checkUser() {
      if (this.email == "admin@gmail.com" && this.password == "admin") {
        this.$router.push("juices");
      } 
 
 else {
        this.$q
          .dialog({
            title: "Error!",
            message: "Invalid username or password.",
          })
          .onOk(() => {
            // console.log('OK')
          })
          .onCancel(() => {
            // console.log('Cancel')
          })
          .onDismiss(() => {
            // console.log('I am triggered on both OK and Cancel')
          });
      }
}
}
}
</script>
