import WebHead from "./head";
import Header from "./header";
import Footer from "./footer";
import React, {useState, useEffect} from 'react'

export default function Layout( { children, title, brands, applications, industries, cart }) {
  const [cartData, setCart] = useState([])

  useEffect(() => {
      if(localStorage.getItem("cart")) {
          setCart(JSON.parse(localStorage.getItem("cart")))
      }
  }, [])

  return (
    <div>
      <WebHead title={title}/>

      <main>
        <Header cart={cart || cartData} brands={brands} applications={applications} industries={industries}/>
        <div className="margin-container"></div>
        <div className="main-content">{children} </div>
        <Footer />
      </main>

      <style>
        {`
          .container {
            width: 100vw;
            padding: 0;
          }

          .margin-container {
            margin-top: 76px;
          }
          
          .container-inner {
            max-width: 1160px;
            margin: 0 auto;
            padding: 12px 20px;
          }

          .container.banner {
            background-color: #F5FFEE;
          }
          
          @media only screen and (max-width: 800px) {
            .margin-container {
              margin-top: 56px;
            }
          }
        `}
      </style>
    </div>
  );
}

