
import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"


 export let fetchdata = createAsyncThunk('rer',async()=>{
    try{
        let datafetch = await fetch('https://fakestoreapiserver.reactbd.com/photos')
        let response = await datafetch.json()
       console.log(response)
        return response
    }catch(error){
        throw error
    }

    
    
})

// export const Promise_fn = ([]) => {
//     return new Promise((resolve, reject) => {
//       fetch('https://jsonplaceholder.typicode.com/posts') 
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(error => reject(error));
//         console.log(data)
//     });
//   };


const slicedata = createSlice({
    name:'users',
    initialState : {
        Datalist: [],
        status: 'initial'
    },

    extraReducers: (builder) => {
        builder
          .addCase(fetchdata.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchdata.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.Datalist = action.payload;
          })
          .addCase(fetchdata.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload.error;
          });
      },
    
    // extraReducers:builders=>{
    //     builders.addCase(fetchdata.pending,(state)=>{
    //         state.status = 'loading'
    //     })
    //     builders.addCase(fetchdata.fulfilled,(state,action)=>{
    //         state.status = 'completed successfully'
    //         console.log(action.playload)
    //         state.Datalist = action.playload;
    //         console.log(state.Datalist)
            
    //     })
    //     builders.addCase(fetchdata.rejected,(state)=>{
    //         state.status = 'error'
    //     })
    // }

})

let storingData = configureStore({
    reducer:{
        first : slicedata.reducer
    }
    
})


export default storingData



