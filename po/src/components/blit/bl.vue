<template>
 
<div class="kol">
  
<div class="inf" >
  <h2 class="titel">Travel Tour</h2>
    <div class="rdif"> 
      
        <b-form-input placeholder="your name" type="text" v-model="name" class="inp"></b-form-input>
        <b-form-input placeholder="your last name" type="text" v-model="lsname" class="inp"></b-form-input>
        <b-form-input placeholder="your number" type="number" v-model="number" class="inp" ></b-form-input>
        <b-form-input placeholder="your email" type="email" v-model="email" class="inp" ></b-form-input>
     <div style="margin-top: -20px;"> <p class="p" >frome:</p>
         <b-form-select v-model="s1"  @change="x" class="inp">
          <b-form-select-option :value="null" disabled>Please select an option</b-form-select-option>
        <option value="iran">iran</option>
        <option value="franch">franch</option>
        <option value="korea">korea</option>
        <option value="torky">torky</option>
        </b-form-select>
        </div> 
         <b-form-select style="margin-top: 9.5px;" :options="o"  v-model="citym" class="inp"></b-form-select>

         <b-form-checkbox v-model="st" class="pip">
          Is your destination selected?</b-form-checkbox>
          <div> </div>
           <b-form-select v-show="st" v-model="s3"   @change="y">
            <b-form-select-option :value="null" disabled>Please select an option</b-form-select-option>
        <option value="iran">iran</option>
        <option value="franch">franch</option>
        <option value="korea">korea</option>
        <option value="torky">torky</option>
          </b-form-select>
            <b-form-select v-show="st"  v-model="cityd" :options="o2"></b-form-select>
          </div> 
    <div class="btn">
   <div style="margin: 0 auto;">
    <b-button variant="info" @click="send">search</b-button>
      
   
    <p style="color: red; margin: 0 auto;font-family: Arial, Helvetica, sans-serif;" v-show="er" >The information is not complete </p>
</div>
</div>
</div>

</div>

</template>

<script> 
import blit from'./blit.vue'
export default {

    name :'bl-m',
    computed:{blit},
    
    data(){
      return{
        er:false,
       name:'',
       lsname:'',
      number:'',
      email:'',
      citym:'',
      cityd:'',
        st: false,
        cl:false,
        s1:'',
        s3:'',
        s2:[],
        j:{
            iran : ['tehran','yazd','esfehan ','rasht'],
           franch :['paris','desire',],
           korea:['seol','boosan'],
           torky:['estanbol','one']
          },
        
         o:[],
         o2:[],
        
        
      }
    },
    props: {
  datam: {
    type: Object,
    required: true
  }
},
comments:{},
methods:{
  x:function (e){
  this.o = this.j[e]
  console.log(this.o)

            
            } ,
  y:function (e){
    this.o2 = this.j[e]
  console.log(this.o2)

  },
      send : function(){
        if( 
          this.name !=='' && this.lsname!=='' &&
      this.number!=='' && this.email!==''&&
      this.citym!=='')
      {
        // fetch('url', {method:'post'})
        this.cl=true
        this.$router.push('./blit')
      }
      else{this.er=true}
    
      // const datam = {name:this.name,lsname:this.lsname,city:this.citym,mgh:this.cityd}
    this.$emit('formSubmitted',this.name);
  }
},


 }  
</script>

<style scoped>
.kol{background: url(../../assets/clouds.jfif);
    background-repeat: no-repeat;
    background-size:cover;
    /* background-position-y:-600px; */
    min-height: 100vh;
}
.rdif{ display: grid;
     grid-template-columns: repeat(2,1fr);
     grid-gap: 15px;
     grid-row-gap: 20px;
    margin:0 10px;
    margin-top: 8%;

}
.inf{
   
    width: 38rem;
    border-radius: 10px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50% , -50%);
    background-color: rgba(255, 255, 255, 0.326);
    filter: blur();
}
.btn{margin-top: -10px;display: inline;border-radius: 6px;}
.p{
  margin: 5px;
 font-family: Arial, Helvetica, sans-serif ;
 ; font-size: small;
  
  }
  .pip{font-family: Arial, Helvetica, sans-serif;
     margin-top: -6px;font-size:medium;margin-bottom: -12px;}
  .titel{color: #242525;
     margin: 0 auto;
      width: fit-content;
       margin-bottom: -33px;
      margin-top: 10px;
      font-family:'Times New Roman', Times, serif;
  }
  @media(max-width: 760px){.inf{width: 85%;}}
  @media(max-width: 760px){.inf{width: 90%;} .pip {font-size: smaller !important;}}

</style>