<template>
    <form action="" class="flex flex-col justify-center py-4 text-center w-96 bg-white m-auto rounded-md ">
        <span id="toast1" class="flex text-slate-100 absolute top-1 border-red-800 border-l-4 right-1 toast rounded-md rounded-b-md rounded-r-md " :class="!toast? 'flex ' : 'hidden'" ><h2 class="bg-slate-100 rounded-b-md rounded-r-md text-black py-2 px-4">Item (nome do item) inserido</h2></span>
        <div class="flex flex-col w-96 h-auto p-2 justify-center text-center shadow-lg relative m-auto">
            <input type="text" name="nameItem" id="nameItem" class="bg-slate-300 rounded-md outline-none w-64 p-1 justify-center mx-auto flex text-center" placeholder="Novo item">
            <div  class="flex w-96 h-auto p-2 justify-center text-center m-auto">
                <button @click.prevent="decrement()" class="bg-red-400 text-yellow-800 p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <input type="number" name="" id="" class="bg-slate-300 p-1 w-16 justify-center text-center text-lg" :value="quantidade">
                <button @click.prevent="increment()" class="bg-red-400 text-yellow-800 p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
            <input @click="inserirItem()" type="button" value="Inserir" class="bg-red-400 rounded w-32 mt-2 py-1 m-auto justify-center flex text-center">
            
        </div>
        
    </form>
</template>

<script setup>
import { ref } from 'vue'

    const quantidade = ref(1)

    const increment = ()=>{
        if(quantidade.value <= 29)
        quantidade.value++
        
    }
    const decrement = ()=>{
        if(quantidade.value != 1){
          quantidade.value--
          
        }     
        
    }

    const inserirItem = ()=>{
       quantidade.value = 1
       toastDiplay()
      }

    const toast =ref(true)

    const toastDiplay = () => {
       showToast() 
       setTimeout( ()=>{
            toast.value = true
       }, 2000 )
    
      toast.value = false
    }
    
    const showToast = () =>{
    const toast = document.querySelector('.toast')
    toast.classList.remove('hidden') 
    setTimeout( ()=>{
            toast.classList.add('hidden')
       }, 2000 )
    
}


</script>

<style>
.toast {
    animation: toast .3s forwards;
}

@keyframes toast {
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
}
</style>