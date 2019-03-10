import React, { Component } from 'react';
import './style.css';
import Header from './Header';

class Bag extends Component {
  render() {
    return (
      <div>
      	<Header />

      	<div className="marginTop10px paddingTop40px desktop">
	      	<div className="col-sm-8">
	      		<div className="row">
	      			<ul style={{background: '#ffcc00', marginLeft: '-40px'}}>
				      <li className="menuBag"><a href="#">Sandwiches</a></li>
				      <li className="menuBag"><a href="#">Salads</a></li>
				      <li className="menuBag"><a href="#">Beverages</a></li>
				    </ul>
	      		</div>
	      		<div className="marginTop20px">
	      			<div className="col-sm-4">
	      				<div className="relative">
						  	<div className="absolute">
						  		<h5>FARMER SALAD</h5>
						  		<h6>Mixed greens, roasted chicken.</h6>
						  	</div>
						</div>
	      			</div>
	      			<div className="col-sm-4">
	      				<div className="relative">
						  	<div className="absolute">
						  		<h5>FARMER SALAD</h5>
						  		<h6>Mixed greens, roasted chicken.</h6>
						  	</div>
						</div>
	      			</div>
	      			<div className="col-sm-4">
	      				<div className="relative">
						  	<div className="absolute">
						  		<h5>FARMER SALAD</h5>
						  		<h6>Mixed greens, roasted chicken.</h6>
						  	</div>
						</div>
	      			</div>
	      		</div>
	      		<div>
	      			<div className="col-sm-4 marginTop20px">
	      				<div className="relative">
						  	<div className="absolute">
						  		<h5>FARMER SALAD</h5>
						  		<h6>Mixed greens, roasted chicken.</h6>
						  	</div>
						</div>
	      			</div>
	      			<div className="col-sm-4 marginTop20px">
	      				<div className="relative">
						  	<div className="absolute">
						  		<h5>FARMER SALAD</h5>
						  		<h6>Mixed greens, roasted chicken.</h6>
						  	</div>
						</div>
	      			</div>
	      			<div className="col-sm-4 marginTop20px">
	      				<div className="relative">
						  	<div className="absolute">
						  		<h5>FARMER SALAD</h5>
						  		<h6>Mixed greens, roasted chicken.</h6>
						  	</div>
						</div>
	      			</div>
	      		</div>
	      	</div>

	      	<div className="col-sm-4">
	      		<h4>Your Bag (4 Items)</h4>
	      		<div className="row">
	              <div className="col-xs-1"><h4>1</h4></div>
	              <div className="col-xs-7">
	                <h4>Chicken Deluxe</h4>
	                <p>Classic Bun, Extra Cheddar Cheese, NO Blue Cheese</p>
	              </div>
	              <div className="col-xs-3 textAlignRight"><h4>$20.55</h4></div>
	            </div>
	            <div className="row marginTop10px">
	              <div className="col-xs-6"><a href="#" className="aBlack">Delete</a></div>
	              <div className="col-xs-5"><button type="button" className="floatRight styleButtonBagNone"><span className="glyphicon glyphicon-pencil"></span></button></div>
	            </div>
	            <hr />

	            <div className="row">
	              <div className="col-xs-1"><h4>1</h4></div>
	              <div className="col-xs-7">
	                <h4>Chicken Deluxe</h4>
	                <p>Classic Bun, Extra Cheddar Cheese, NO Blue Cheese</p>
	              </div>
	              <div className="col-xs-3 textAlignRight"><h4>$20.55</h4></div>
	            </div>
	            <div className="row marginTop10px">
	              <div className="col-xs-6"><a href="#" className="aBlack">Delete</a></div>
	              <div className="col-xs-5"><button type="button" className="floatRight styleButtonBagNone"><span className="glyphicon glyphicon-pencil"></span></button></div>
	            </div>
	            <hr />

	            <div className="row">
	              <div className="col-xs-1"><h4>1</h4></div>
	              <div className="col-xs-7">
	                <h4>Chicken Deluxe</h4>
	                <p>Classic Bun, Extra Cheddar Cheese, NO Blue Cheese</p>
	              </div>
	              <div className="col-xs-3 textAlignRight"><h4>$20.55</h4></div>
	            </div>
	            <div className="row marginTop10px">
	              <div className="col-xs-6"><a href="#" className="aBlack">Delete</a></div>
	              <div className="col-xs-5"><button type="button" className="floatRight styleButtonBagNone"><span className="glyphicon glyphicon-pencil"></span></button></div>
	            </div>
	            <hr />

	            <button type="button" className="fixButton">Checkout: $24.42</button>
	      	</div>
      	</div>

      	<div className="padding20px paddingTop40px mobile">
      		<h3>Your Bag (4 Items)</h3>
            <div className="row">
              <div className="col-xs-1"><h4>1</h4></div>
              <div className="col-xs-8">
                <h4>Chicken Deluxe</h4>
	            <p>Classic Bun, Extra Cheddar Cheese, NO Blue Cheese</p>
              </div>
              <div className="col-xs-2 textAlignRight"><h4>$12.00</h4></div>
            </div>
            <div className="row marginTop10px">
              <div className="col-xs-6"><button type="button" className="styleButtonBag">Edit</button></div>
              <div className="col-xs-6"><button type="button" className="styleButtonBag">Remove</button></div>
            </div>
            <hr />

            <div className="row">
              <div className="col-xs-1"><h4>1</h4></div>
              <div className="col-xs-8">
                <h4>Chicken Deluxe</h4>
	            <p>Classic Bun, Extra Cheddar Cheese, NO Blue Cheese</p>
              </div>
              <div className="col-xs-2 textAlignRight"><h4>$12.00</h4></div>
            </div>
            <div className="row">
              <div className="col-xs-6"><button type="button" className="styleButtonBag">Edit</button></div>
              <div className="col-xs-6"><button type="button" className="styleButtonBag">Remove</button></div>
            </div>
            <hr />

            <div className="row">
              <div className="col-xs-1"><h4>1</h4></div>
              <div className="col-xs-8">
                <h4>Chicken Deluxe</h4>
	            <p>Classic Bun, Extra Cheddar Cheese, NO Blue Cheese</p>
              </div>
              <div className="col-xs-2 textAlignRight"><h4>$12.00</h4></div>
            </div>
            <div className="row marginTop10px">
              <div className="col-xs-6"><button type="button" className="styleButtonBag">Edit</button></div>
              <div className="col-xs-6"><button type="button" className="styleButtonBag">Remove</button></div>
            </div>
            <hr />

            <div className="row">
              <div className="col-xs-1"><h4>1</h4></div>
              <div className="col-xs-8">
                <h4>Chicken Deluxe</h4>
	            <p>Classic Bun, Extra Cheddar Cheese, NO Blue Cheese</p>
              </div>
              <div className="col-xs-2 textAlignRight"><h4>$12.00</h4></div>
            </div>
            <div className="row" style={{marginBottom: '150px'}}>
              <div className="col-xs-6"><button type="button" className="styleButtonBag">Edit</button></div>
              <div className="col-xs-6"><button type="button" className="styleButtonBag">Remove</button></div>
            </div>
            <hr />

            <nav className="navbar navbar-default navbar-fixed-bottom">
	          <ul className="nav navbar-nav navbar-right">
	              <li><a href="#" className="textAlignCenter bgBlack aWhite"><h4>Checkout($24.42)</h4></a></li>
	              <li><a href="#" className="textAlignCenter"><h4>Back to Menu</h4></a></li>
	            </ul>
	        </nav>
         </div>
      	
      </div>
    );
  }
}

export default Bag;
