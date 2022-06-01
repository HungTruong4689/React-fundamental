import {uiActions} from './ui-slice';
import {cartActions} from './cart-slice';


export const fetchCartData = () =>{
    return dispatch =>{
        const fetchData = async () =>{
            const response = await fetch('http://localhost:3010/todolist');

            if(!response.ok){
            throw new Error('Send cart data failed.');
            // dispatch(uiActions.showNotification({
            // status: 'error',
            // title: 'Error!',
            // message: 'Sent cart data failed!',
            //   }))
            }
            const data = await response.json();

            return data;

        }
        try{
            const cartData = fetchData();
            dispatch(cartActions.replaceCart(cartData));
        }catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sent cart data failed!',
            }));
        }
    }
}


export const sendCartData = (cart) =>{
    // return {type:'', payload: }
    return async (dispatch)=>{
        dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending....',
        message: 'Sending cart data!',
      }))

      const sendRequest = async() =>{
        const response = await fetch('http://localhost:3010/todolist', {method: 'PUT', body: JSON.stringify({
            items:cart.items,
            totalQuantity: cart.totalQuantity
        })});

        if(!response.ok){
        throw new Error('Send cart data failed.');
        // dispatch(uiActions.showNotification({
        // status: 'error',
        // title: 'Error!',
        // message: 'Sent cart data failed!',
    //   }))
      }
      }
      try{
        await sendRequest();

      
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
      }))
      }catch(error){
        dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed!',
      }));
      }
      
    
    }
}