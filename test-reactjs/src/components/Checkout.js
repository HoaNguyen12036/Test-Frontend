import React, { Component } from 'react';
import './style.css';
import Header from './Header';

class Checkout extends Component {
  render() {
    return (
      <div>
        <Header />
        <img src="https://www.netgamix.com/wp-content/uploads/2018/10/tong-hop-anh-bia-facebook-dep-y-nghia-chat-kich-thuoc-chuan-8.jpg" style={{width: '100%'}} className="desktop" />
        <div className="checkoutScreen padding20px paddingTop40px">
          <h2>01 | REVIEW INFORMATION</h2>
          <p className="marigoldColor fontSize14px"><strong>YOUR INFO</strong></p>
          <h3>Pete Hasalastname</h3>
          <p>Pete.hastalastname@gmail.com</p>

          <div className="desktop">
            <h4>Contact Number</h4>
            <hr />
            <p>In case we need to contact you about your order.</p>

            <p className="marigoldColor fontSize14px marginTop10px"><strong>CREDIT CARD</strong></p>
            <form>
              <select className="styleDropDown">
                <option value="amex-2">0002* (Amex)</option>
                <option value="amex-3">0003* (Amex)</option>
                <option value="amex-4">0004* (Amex)</option>
                <option value="amex-5">0005* (Amex)</option>
              </select>
            </form>
            <p className="marginTop10px textAlignRight"><a href="#" className="aWhite">Add Promo Code</a></p>

            <p className="marigoldColor fontSize14px marginTop10px"><strong>I AM PICKING UP FROM</strong></p>
            <form>
              <select className="styleDropDown">
                <option value="us-2">Union Station</option>
                <option value="us-3">Union Station (3)</option>
                <option value="us-4">Union Station (4)</option>
                <option value="us-5">Union Station (5)</option>
              </select>
            </form>

            <p className="marigoldColor fontSize14px marginTop10px"><strong>PICKUP TIME</strong></p>
            <form>
              <select className="styleDropDown">
                <option value="time-2">Friday, 4:55 PM</option>
                <option value="time-3">Friday, 4:56 PM</option>
                <option value="time-4">Friday, 4:58 PM</option>
                <option value="time-5">Friday, 4:59 PM</option>
              </select>
            </form>
          </div>
          
          <div className="mobile">
            <div style={{float: 'left', width: '70%'}}><h4>Contact Number</h4></div>
            <div style={{float: 'left', width: '30%'}}><div className="floatRight"><h4><span className="glyphicon glyphicon-phone"></span></h4></div></div>
            <hr />

            <p className="marigoldColor fontSize14px marginTop10px"><strong>PAYMENT INFORMATION</strong></p>
            <form>
              <select className="styleDropDown">
                <option value="ending-2">Ending in 0189</option>
                <option value="ending-3">Ending in 0188</option>
                <option value="ending-4">Ending in 0187</option>
                <option value="ending-5">Ending in 0186</option>
              </select>
            </form>

            <p className="marigoldColor fontSize14px marginTop10px"><strong>LOCATION</strong></p>
            <form>
              <select className="styleDropDown">
                <option value="us-2">Union Station</option>
                <option value="us-3">Union Station (3)</option>
                <option value="us-4">Union Station (4)</option>
                <option value="us-5">Union Station (5)</option>
              </select>
            </form>

            <p className="marigoldColor fontSize14px marginTop10px"><strong>PICKUP TIME</strong></p>
            <form>
              <select className="styleDropDown">
                <option value="time-2">Friday, 4:55 PM</option>
                <option value="time-3">Friday, 4:56 PM</option>
                <option value="time-4">Friday, 4:58 PM</option>
                <option value="time-5">Friday, 4:59 PM</option>
              </select>
            </form>

            <p className="marginTop10px"><a href="#" className="aMarigold">Promo Code?</a></p>
          </div>

          <div className="marginTop80px">
            <h2>01 | REVIEW ORDER</h2>
            <p className="marigoldColor fontSize14px"><strong>ORDER SUMMARY</strong></p>
          </div>

          <div className="desktop">
            <div className="row">
              <div className="col-sm-1 marigoldColor"><h4>1</h4></div>
              <div className="col-sm-7">
                <h4>Product Name Here</h4>
                <p>Chicken Sandwich, Lettuce, Mayo</p>
              </div>
              <div className="col-sm-1"><button type="button" className="styleButtonCheckout"><h4><span className="glyphicon glyphicon-pencil"></span></h4></button></div>
              <div className="col-sm-1"><button type="button" className="styleButtonCheckout"><h4>X</h4></button></div>
              <div className="col-sm-2 textAlignRight"><h4>$20.55</h4></div>
            </div>

            <div className="row">
              <div className="col-sm-1 marigoldColor"><h4>1</h4></div>
              <div className="col-sm-7">
                <h4>Product Name Here</h4>
                <p>Chicken Sandwich, Lettuce, Mayo</p>
              </div>
              <div className="col-sm-1"><button type="button" className="styleButtonCheckout"><h4><span className="glyphicon glyphicon-pencil"></span></h4></button></div>
              <div className="col-sm-1"><button type="button" className="styleButtonCheckout"><h4>X</h4></button></div>
              <div className="col-sm-2 textAlignRight"><h4>$20.55</h4></div>
            </div>

            <div className="row">
              <div className="col-sm-1 marigoldColor"><h4>1</h4></div>
              <div className="col-sm-7">
                <h4>Product Name Here</h4>
                <p>Chicken Sandwich, Lettuce, Mayo</p>
              </div>
              <div className="col-sm-1"><button type="button" className="styleButtonCheckout"><h4><span className="glyphicon glyphicon-pencil"></span></h4></button></div>
              <div className="col-sm-1"><button type="button" className="styleButtonCheckout"><h4>X</h4></button></div>
              <div className="col-sm-2 textAlignRight"><h4>$20.55</h4></div>
            </div>

            <div className="row">
              <div className="col-sm-1 marigoldColor"><h4>1</h4></div>
              <div className="col-sm-7">
                <h4>Product Name Here</h4>
                <p>Chicken Sandwich, Lettuce, Mayo</p>
              </div>
              <div className="col-sm-1"><button type="button" className="styleButtonCheckout"><h4><span className="glyphicon glyphicon-pencil"></span></h4></button></div>
              <div className="col-sm-1"><button type="button" className="styleButtonCheckout"><h4>X</h4></button></div>
              <div className="col-sm-2 textAlignRight"><h4>$20.55</h4></div>
            </div>
          </div>

          <div className="mobile">
            <div className="row">
              <div className="col-xs-1 marigoldColor"><h4>1</h4></div>
              <div className="col-xs-8">
                <h4>Product Name Here</h4>
                <p>Chicken Sandwich, Lettuce, Mayo</p>
              </div>
              <div className="col-xs-2 textAlignRight"><h4>$20.55</h4></div>
            </div>
            <div className="row marginTop10px">
              <div className="col-xs-6"><button type="button" className="styleButtonCheckout2">Edit</button></div>
              <div className="col-xs-6"><button type="button" className="styleButtonCheckout2">Remove</button></div>
            </div>
            <hr />

            <div className="row">
              <div className="col-xs-1 marigoldColor"><h4>1</h4></div>
              <div className="col-xs-8">
                <h4>Product Name Here</h4>
                <p>Chicken Sandwich, Lettuce, Mayo</p>
              </div>
              <div className="col-xs-2 textAlignRight"><h4>$20.55</h4></div>
            </div>
            <div className="row">
              <div className="col-xs-6"><button type="button" className="styleButtonCheckout2">Edit</button></div>
              <div className="col-xs-6"><button type="button" className="styleButtonCheckout2">Remove</button></div>
            </div>
            <hr />

            <div className="row">
              <div className="col-xs-1 marigoldColor"><h4>1</h4></div>
              <div className="col-xs-8">
                <h4>Product Name Here</h4>
                <p>Chicken Sandwich, Lettuce, Mayo</p>
              </div>
              <div className="col-xs-2 textAlignRight"><h4>$20.55</h4></div>
            </div>
            <div className="row marginTop10px">
              <div className="col-xs-6"><button type="button" className="styleButtonCheckout2">Edit</button></div>
              <div className="col-xs-6"><button type="button" className="styleButtonCheckout2">Remove</button></div>
            </div>
            <hr />

            <div className="row">
              <div className="col-xs-1 marigoldColor"><h4>1</h4></div>
              <div className="col-xs-8">
                <h4>Product Name Here</h4>
                <p>Chicken Sandwich, Lettuce, Mayo</p>
              </div>
              <div className="col-xs-2 textAlignRight"><h4>$20.55</h4></div>
            </div>
            <div className="row">
              <div className="col-xs-6"><button type="button" className="styleButtonCheckout2">Edit</button></div>
              <div className="col-xs-6"><button type="button" className="styleButtonCheckout2">Remove</button></div>
            </div>
            <hr />
          </div>

          <div className="marginTop80px">
            <div className="row">
              <div className="col-xs-9"><h5>Subtotal</h5></div>
              <div className="col-xs-3 textAlignRight"><h5>$0.0</h5></div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xs-9"><h5>Taxes</h5></div>
              <div className="col-xs-3 textAlignRight">$0.0</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xs-9"><h3>Total</h3></div>
              <div className="col-xs-3 textAlignRight"><h3>$0.0</h3></div>
            </div>

            <button className="desktop marginTop10px styleButtonCheckout3"><strong>PLACE ORDER</strong></button>
            <button className="mobile marginTop10px styleButtonCheckout4"><strong>PAY</strong></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
