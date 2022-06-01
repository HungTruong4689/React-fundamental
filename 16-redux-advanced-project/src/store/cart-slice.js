// import { createSlice } from '@reduxjs/toolkit';


// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: [],
//         totalQuantity:0,
       
//     },
//     reducers: {
//         addItemToCart(state,action){
//             const newItem= action.payload;
//             const existingItem = state.items.find(item => item.id === newItem.id);
//             state.totalQuantity++;
//             if(!existingItem){
//                 state.items.push({
//                     id: newItem.id, 
//                     price: newItem.price, 
//                     quantity:1, 
//                     totalPrice: newItem.price,
//                     name: newItem.title});
//             }else{
//                 existingItem.quantity++;
//                 existingItem.totalPrice = existingItem.totalPrice + newItem.price;
//             }
//         },
//         removeItemFromCart(state,action){
//             const id = action.payload;
//             const existingItem = state.items.find(item => item.id ===id);
//             state.totalQuantity--;
//             if(existingItem.quantity ===1){
//                 state.items = state.items.filter(item=> item.id !==id);
//             }else{
//                 existingItem.quantity--;
//                 existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
//             }
//         }

//     }
// })

// export const cartActions = cartSlice.actions;

// export default cartSlice;


//Version 2
import { createSlice } from '@reduxjs/toolkit';
// import {uiActions} from './ui-slice';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

// export const fetchCartData = () =>{
//     return dispatch =>{
//         const fetchData = async () =>{
//             const response = await fetch('http://localhost:3010/todolist');

//             if(!response.ok){
//             throw new Error('Send cart data failed.');
//             // dispatch(uiActions.showNotification({
//             // status: 'error',
//             // title: 'Error!',
//             // message: 'Sent cart data failed!',
//             //   }))
//             }
//             const data = await response.json();

//             return data;

//         }
//         try{
//             const cartData = fetchData();
//         }catch(error){
//             dispatch(uiActions.showNotification({
//                 status: 'error',
//                 title: 'Error!',
//                 message: 'Sent cart data failed!',
//             }));
//         }
//     }
// }


// export const sendCartData = (cartData) =>{
//     // return {type:'', payload: }
//     return async (dispatch)=>{
//         dispatch(uiActions.showNotification({
//         status: 'pending',
//         title: 'Sending....',
//         message: 'Sending cart data!',
//       }))

//       const sendRequest = async() =>{
//         const response = await fetch('http://localhost:3010/todolist', {method: 'PUT', body: JSON.stringify(cartData)});

//         if(!response.ok){
//         throw new Error('Send cart data failed.');
//         // dispatch(uiActions.showNotification({
//         // status: 'error',
//         // title: 'Error!',
//         // message: 'Sent cart data failed!',
//     //   }))
//       }
//       }
//       try{
//         await sendRequest();

      
//             dispatch(uiActions.showNotification({
//                 status: 'success',
//                 title: 'Success!',
//                 message: 'Sent cart data successfully!',
//       }))
//       }catch(error){
//         dispatch(uiActions.showNotification({
//         status: 'error',
//         title: 'Error!',
//         message: 'Sent cart data failed!',
//       }));
//       }
      
    
//     }
// }

export const cartActions = cartSlice.actions;

export default cartSlice;