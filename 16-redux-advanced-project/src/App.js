import {Fragment,useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux';
// import { uiActions } from './store/ui-slice'
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions'

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector((state)=> state.cart);
  const notification = useSelector(state => state.ui.notification)

  useEffect(()=>{
    dispatch(fetchCartData());

  },[dispatch])

  useEffect(()=>{
    // const sendCartData = async () =>{
    //   dispatch(uiActions.showNotification({
    //     status: 'pending',
    //     title: 'Sending....',
    //     message: 'Sending cart data!',
    //   }))
    //   const response = await fetch('http://localhost:3010/todolist', {method: 'POST', body: JSON.stringify(cart)});

    //   if(!response.ok){
    //     // throw new Error('Send cart data failed.');
    //     dispatch(uiActions.showNotification({
    //     status: 'error',
    //     title: 'Error!',
    //     message: 'Sent cart data failed!',
    //   }))
    //   }
    //   dispatch(uiActions.showNotification({
    //     status: 'success',
    //     title: 'Success!',
    //     message: 'Sent cart data successfully!',
    //   }))
    // }

    // const responseData = await response.json();
    if(isInitial){
      isInitial =false;
      return;
    }
    // sendCartData().catch( error =>{
    //   dispatch(uiActions.showNotification({
    //     status: 'error',
    //     title: 'Error!',
    //     message: 'Sent cart data failed!',
    //   }))
    // })

    //Fetch data version
    if(cart.changed){
      dispatch(sendCartData(cart));
    }

    // dispatch(sendCartData(cart));
    
  },[cart, dispatch])
  return (
    <Fragment>
      {notification && <Notification 
      status={notification.status}
      title={notification.title}
      message={notification.message}/>}
    <Layout>
      {showCart &&<Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
