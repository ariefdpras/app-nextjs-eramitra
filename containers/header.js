import React from "react";
import Link from "next/link";
import CategoryMenu from "Components/category/CategoryMenu";
import Cart from "Components/cart/Cart";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isProduct: false,
      isSearch: false,
      isCart: false,
      search: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickProduct = this.handleClickProduct.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleClickCart = this.handleClickCart.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleClick() {
    if (this.state.isToggleOn) {
      this.setState((state) => ({
        isProduct: false,
      }));
    }
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  handleClickProduct() {
    this.setState((state) => ({
      isProduct: !state.isProduct,
    }));
  }

  handleClickSearch() {
    if (this.state.search !== "") {
      this.submitSearch();
    } else {
      this.setState((state) => ({
        isSearch: !state.isSearch,
      }));
    }
  }

  handleClickCart() {
    this.setState((state) => ({
      isCart: !state.isCart,
    }));
  }

  handleSearch(e) {
    this.setState((state) => ({
      search: e.target.value,
    }));
    if (e.target.value == "") {
      this.setState((state) => ({
        isSearch: !state.isSearch,
      }));
    }
  }

  submitSearch() {
    window.location.replace(
      `${process.env.ROOT_DOMAIN}/search?name=${this.state.search}&by=product`
    );
  }

  render() {
    const props = this.props;

    return (
      <div className="navbar-header">
        {this.state.isToggleOn && (
          <div className="sidebar mobile-only">
            <div className="logo-wrapper">
              <a href={`${process.env.ROOT_DOMAIN}`} legacyBehavior>
                <img className="logo" src="/static/images/logo.png" />
              </a>
              <span className="material-icons" onClick={this.handleClick}>
                close
              </span>
            </div>
            <div className="navbar-link">
              <Link href={`${process.env.ROOT_DOMAIN}/about-us`}>About Us</Link>
              <a onClick={this.handleClickProduct} legacyBehavior>
                Products
              </a>
              <Link href={`${process.env.ROOT_DOMAIN}/news-info`}>
                News &amp; Info
              </Link>
              <Link href={`${process.env.ROOT_DOMAIN}/career`}>Career</Link>
              <Link
                href={`${process.env.ROOT_DOMAIN}/contact-us`}
                legacyBehavior
              >
                <a>Contact Us</a>
              </Link>
            </div>
          </div>
        )}

        {this.state.isToggleOn && this.state.isProduct && (
          <div className="sidebar product mobile-only">
            <div className="logo-wrapper">
              <span
                className="material-icons"
                onClick={this.handleClickProduct}
              >
                chevron_left
              </span>
              <a href={`${process.env.ROOT_DOMAIN}`} legacyBehavior>
                <img className="logo" src="/static/images/logo.png" />
              </a>
            </div>
            <CategoryMenu
              brands={props.brands}
              applications={props.applications}
              industries={props.industries}
              catalogue={props.catalogue}
            />
          </div>
        )}

        {this.state.isToggleOn && (
          <div
            className="sidebar-background mobile-only"
            onClick={this.handleClick}
          ></div>
        )}

        <div className="navbar-content-wrapper">
          <div className="navbar-inner-content-wrapper">
            <div className="logo-wrapper mobile-only">
              <span className="material-icons" onClick={this.handleClick}>
                menu
              </span>
              {!this.state.isSearch && (
                <a href={`${process.env.ROOT_DOMAIN}`} legacyBehavior>
                  <img className="logo" src="/static/images/logo.png" />
                </a>
              )}
            </div>
            <div className="logo-wrapper desktop-only">
              <a href={`${process.env.ROOT_DOMAIN}`} legacyBehavior>
                <img className="logo" src="/static/images/logo.png" />
              </a>
            </div>
            <div className="navbar-link desktop-only">
              <div className="navbar-link-wrapper">
                <Link
                  href={`${process.env.ROOT_DOMAIN}/about-us`}
                  legacyBehavior
                >
                  <a>About Us</a>
                </Link>
                <a onClick={this.handleClickProduct}>Products</a>
                <Link
                  href={`${process.env.ROOT_DOMAIN}/news-info`}
                  legacyBehavior
                >
                  <a>News &amp; Info</a>
                </Link>
                <Link href={`${process.env.ROOT_DOMAIN}/career`} legacyBehavior>
                  <a>Career</a>
                </Link>
                <Link
                  href={`${process.env.ROOT_DOMAIN}/contact-us`}
                  legacyBehavior
                >
                  <a>Contact Us</a>
                </Link>
                <div className="separator"></div>
                {this.state.isSearch ? (
                  <div className="input-search">
                    <input
                      type="text"
                      placeholder=""
                      onChange={this.handleSearch}
                    />
                    <a className="search-box" onClick={this.handleClickSearch}>
                      <span className="material-icons">search</span>
                    </a>
                  </div>
                ) : (
                  <a className="search-header" onClick={this.handleClickSearch}>
                    <span className="material-icons">search</span>
                  </a>
                )}
                <a className="cart-header" onClick={this.handleClickCart}>
                  <span className="material-icons">shopping_cart</span>
                </a>
              </div>
            </div>

            <div className="navbar-link mobile-only">
              <div className="navbar-link-wrapper">
                {this.state.isSearch ? (
                  <div className="input-search">
                    <input
                      type="text"
                      placeholder=""
                      onChange={this.handleSearch}
                    />
                    <a className="search-box" onClick={this.handleClickSearch}>
                      <span className="material-icons">search</span>
                    </a>
                  </div>
                ) : (
                  <a className="search-header" onClick={this.handleClickSearch}>
                    <span className="material-icons">search</span>
                  </a>
                )}
                <a className="cart-header" onClick={this.handleClickCart}>
                  <span className="material-icons">shopping_cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {this.state.isCart && (
          <>
            <Cart cart={props.cart} />
            <div className="backdrop" onClick={this.handleClickCart}></div>
          </>
        )}

        {!this.state.isToggleOn && this.state.isProduct && (
          <CategoryMenu
            brands={props.brands}
            applications={props.applications}
            industries={props.industries}
            catalogue={props.catalogue}
          />
        )}

        <style>
          {`
                .desktop-only {
                    display: block;
                }

                .mobile-only {
                    display: none !important;
                }
                
                .navbar-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 200;
                    width: 100vw;
                    padding: 0;
                    
                }

                .navbar-content-wrapper {
                    width: 100%;
                    position: relative;
                    box-shadow: 0px 4px 10px rgba(145, 158, 171, 0.1);
                    background-color: rgba(255, 255, 255, 0.7);
                }

                .navbar-inner-content-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    max-width: 1120px;
                    height: 76px;
                    margin: 0 auto;
                   
                }

                .navbar-inner-content-wrapper .logo-wrapper {
                    display: flex;
                    align-items: center;
                }

                .navbar-inner-content-wrapper .logo {
                  height: 30px;
                  width: auto;
                }

                .navbar-link-wrapper {
                  display: flex;
                  align-items: center;
                }

                .navbar-link-wrapper a {
                  cursor: pointer;
                }

                .navbar-link a {
                    font-family: 'Bahnschrift';
                    font-weight: 500;
                    font-size: 17px;
                    margin-left: 55px;
                }

                .navbar-link a.active {
                    font-family: 'Bahnschrift';
                    font-weight: 500;
                    margin-left: 55px;
                    text-decoration: none;
                    color: #4B8343;
                }

                .cart-header, .search-header {
                  margin-left: 25px !important;
                }

                .input-search input {
                  padding: 8px 30px 8px 8px;
                }

                .search-box {
                  margin-left: -30px !important;
                }

                .input-search {
                  display: flex;
                  align-items: center;
                  margin-left: 25px;
                }

                .separator {
                  width: 2px;
                  height: 30px;
                  background: #000000;
                  margin-left: 25px;
                }
 
                .backdrop {
                  background: #000000;
                  opacity: 0.5;
                  width: 100vw;
                  height: 100vh;
                  position: fixed;
                  top: 0;
                } 

                @media only screen and (max-width: 800px){
                    .mobile-only {
                        display: block !important;
                    }

                    .desktop-only {
                      display: none !important;
                  }
                    
                    .desktop-only, .logo-wrapper.desktop-only{
                        display: none;
                    }

                    .navbar-link .cart-header {
                      margin-left: 15px !important;
                    }

                    .search-box {
                      margin-left: -30px !important;
                    }

                    .navbar-inner-content-wrapper {
                        height: 56px;
                        padding: 0 10px;
                    }
                    
                    .navbar-inner-content-wrapper .logo, .sidebar .logo {
                        height: 20px;
                        width: auto;
                        margin: 0 16px;
                    }

                    .navbar-header {
                        position: absolute;
                    }

                    .sidebar {
                        width: 90%;
                        height: 100vh;
                        background-color: white;
                        position: fixed;
                        z-index: 100;
                        top: 0;
                        left: 0;
                    }

                    .sidebar-background {
                        width: 100%;
                        height: 100%;
                        z-index: 99;
                        background-color: rgba(0, 0, 0, 0.1);
                        position: fixed;
                        top: 0;
                        left: 0;
                    }

                    .sidebar .logo-wrapper {
                        display: flex;
                        align-items: center;
                        height: 56px;
                        justify-content: space-between;
                        padding: 16px 32px 16px 14px;
                        border-bottom: 1px solid rgb(235,235,235,1);
                    }

                    .sidebar.product .logo-wrapper {
                      display: flex;
                      align-items: center;
                      height: 56px;
                      justify-content: flex-start;
                      padding: 16px 32px 16px 14px;
                      border-bottom: 1px solid rgb(235,235,235,1);
                    }

                    .sidebar .navbar-link {
                        display: flex;
                        flex-direction: column;
                    }

                    .sidebar .navbar-link a {
                        font-family: 'Bahnschrift';
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 22px;
                        letter-spacing: 0em;
                        text-align: left;
                        margin: 32px 0 0 32px;
                    }

                }
                `}
        </style>
      </div>
    );
  }
}

export default Header;
