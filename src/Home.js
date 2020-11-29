import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
	 <img className="home_image" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png" alt=" "/>
	 <div className="home_row">
	     <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
	 </div>
     <div className="home_row">
		  <Product
            id="4903850"
            title="Lakme Absolute Matte Ultimate Lip Color with Argan Oil, Rose Pink, 3.4 g"
            price={99.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51gSR4OfE6L._AC_UY218_.jpg"
          />
		  <Product
            id="12321341"
            title="ADDYVERO Cotton & Crush Skater Women Dress,Care Instructions: Machine Wash"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/619rnEyFzzL._AC_UL320_.jpg"
          />
		  <Product
            id="23445930"
            title="Envias Leatherette Handbags For Women's Ladies Combo Of 3 (PlusCombo_Maroon_EVS-109)"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41x6XOAoGTL.jpg"
          />
	 </div>
	  <div className="home_row">
		   <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
	 </div>
	 </div>
	  </div>
  );
}

export default Home;
