// import React, { Fragment, useEffect } from 'react';
// import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
// import Comments from '../components/comments/Comments';
// import HighlightedQuote from '../components/quotes/HighlightedQuote';
// import useHttp from '../hooks/use-http';
// import { getSingleQuote } from '../lib/api';

// // const DUMMY_QUOTES = [
// //     {id: 'q1', author:'Max', text: 'Learning React is fun!'},
// //     {id: 'q2', author:'Maxi', text: 'Learning React is great!'}
// // ]

// const QuoteDetail = () => {
//     const match = useRouteMatch();
//     const params = useParams();
//     const {quoteId} = params;
//     // const quote = DUMMY_QUOTES.find(quote => quote.id ===params.quoteId);
//     const {sendRequest, status, data: loadedQuote,error} = useHttp(getSingleQuote,true)
//     useEffect(()=>{
//         sendRequest(quoteId);
//     },[sendRequest,quoteId])
//     // if(!quote){
//     //     return <p>No quote found!</p>
//     // }
//     if(error){
//         return <p className="centered">{error}</p>
//     }
//     if(!loadedQuote){
//         return <p>No quote found!</p>
//     }
//     return (
//         <Fragment>
//         <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
//         {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
//         <Route path={match.path} exact>
//             <div className='centered'>
//             {/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
//             <Link className="btn--flat" to={`${match.url}/comments`}>
//                 Load Comments
//             </Link>
//         </div>
//         </Route>
        
//         {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
//         <Route path={`${match.path}/comments`}>
//             <Comments />
//         </Route>
//         </Fragment>
//     );
// };

// export default QuoteDetail;


   
import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;