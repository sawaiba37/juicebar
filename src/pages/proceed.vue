<template>
<q-page class="window-height window-width col ">
  <div class="q-pa-xs">
    
     <q-card class="my-card bg-primary q-ma-lg text-white rounded" style="margin-top:25px">
         
      <q-card-section>
          <q-item style="margin-left:190px">
        <q-item-section avatar>
          
            VISA
          
        </q-item-section>
        </q-item>
        <div class="text-h6">123  456  790  567</div>
        <div class="text-subtithrsle5">5hrs<br><br>
        <q-card-actions>
        
        <q-btn flat>
          John
        </q-btn>
        
        <q-btn flat style="margin-left:130px">
          3/17
        </q-btn>
      </q-card-actions>
      
       
            </div>
        
      
        
      </q-card-section>
     </q-card>
     <q-card class="my-card bg-white q-ma-lg text-black rounded dense">
         
      
         <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section>Your Payment</q-item-section>
      </q-item>
      
      <q-option-group
      :options="options"
      label="Notifications"
      type="checkbox"
      v-model="group"
    />
         </q-list>
     
        
     
    
      
           <q-list bordered class="bg-primary text-white">
      <q-item-section style="margin-left:15px;margin-top:10px">Payment Amount</q-item-section>
        <q-card-actions>
        
        <q-btn flat style="margin-top:-20px">
          $20
        </q-btn>
        
        <q-btn flat style="margin-left:180px;margin-top:-20px;color:blue" @click="myFunction()">
         PAY
        </q-btn>
      </q-card-actions>
           </q-list>
      </q-card>
       <q-tabs
        v-model="tab"
        indicator-color="transparent" 
        active-color="black"
        style="margin-top:100px"
        
      >
        <q-route-tab  icon="home"  exact to="/juices"/>
        <q-route-tab icon="add_shopping_cart" exact to="/juices"/>
        <q-route-tab  icon="person" exact to="/juices"/>
      </q-tabs>
    </div>
  
    </q-page>
    </template>
    <script>
export default {
  data () {
    return {
      group: [],
      tab:null,
      options: [
        { label: 'Cash on Deliver', value: '1' },
        { label: 'Debit/Credit Card', value: '2'},
        { label: 'Payment Gateaway', value: '3' }
      ]
    }
  },
  methods:{
      myFunction(){
        this.$q.notify('Successfully Paid')
        this.$router.push('juices')
      }
  }
}
</script>