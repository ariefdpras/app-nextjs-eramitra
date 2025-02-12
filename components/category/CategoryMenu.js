import React from 'react'

class CategoryMenu extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
        activeTab: "brands"
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(params) {
    this.setState(state => ({
      activeTab: params
    }));
  }


  render() {
    const props = this.props

    const brandTotal = props.brands && props.brands.length / 3;
    const applicationTotal = props.brands && props.applications.length / 3;
    const industriesTotal = props.brands && props.industries.length / 3;
    const catalogueTotal = props.catalogue && props.catalogue.length / 3;

    return (
        <div className="category-menu">
            <div className="container-inner">
            <div className="category-menu-wrapper">
            <div className="left-category-menu">
                <a 
                    onMouseOver={() => this.handleClick("brands")} >  
                    <h3 className={this.state.activeTab == "brands" ? "category-side-title active" : "category-side-title" }>
                    Brands
                    </h3>
                </a>

                <a 
                    onMouseOver={() => this.handleClick("industry")} >
                    <h3 className={this.state.activeTab == "industry" ? "category-side-title active" : "category-side-title" }>
                        Industry
                    </h3>
                </a>

                <a 
                    onMouseOver={() => this.handleClick("application")} >  
                    <h3 className={this.state.activeTab == "application" ? "category-side-title active" : "category-side-title" }>
                        Application
                    </h3>
                </a>

                <a 
                    onMouseOver={() => this.handleClick("catalogue")} >  
                    <h3 className={this.state.activeTab == "catalogue" ? "category-side-title active" : "category-side-title" }>
                        Catalogue
                    </h3>
                </a>
       
            </div>
            <div className="right-category-menu">
                <div className="right-category-inner">
                    <div className="category-col">
                    {
                        this.state.activeTab == "brands" && props.brands && props.brands.length > 0 && props.brands.map((brand, idx ) =>
                            { 
                                if(idx > brandTotal) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a href={`${process.env.ROOT_DOMAIN}/products/brand/${brand.id}`} 
                                    key={idx}>
                                            {brand.name}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>

                 <div className="category-col">
                    {
                        this.state.activeTab == "brands" && props.brands && props.brands.length > 0 && props.brands.map((brand, idx ) =>
                            { 
                                if(idx < brandTotal || idx > brandTotal*2) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a href={`${process.env.ROOT_DOMAIN}/products/brand/${brand.id}`} 
                                    key={idx}>
                                            {brand.name}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>

                 <div className="category-col">
                    {
                        this.state.activeTab == "brands" && props.brands && props.brands.length > 0 && props.brands.map((brand, idx ) =>
                            { 
                                if(idx < brandTotal*2 || idx > brandTotal*3) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a href={`${process.env.ROOT_DOMAIN}/products/brand/${brand.id}`} 
                                    key={idx}>
                                            {brand.name}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>

                 <div className="category-col">
                    {
                        this.state.activeTab == "application" && props.applications && props.brands.length > 0 && props.applications.map((app, idx ) =>
                            { 
                                if(idx > applicationTotal) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a href={`${process.env.ROOT_DOMAIN}/products/application/${app.id}`} 
                                    key={idx}>
                                            {app.name}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>

                 <div className="category-col">
                    {
                        this.state.activeTab == "application" && props.applications && props.applications.length > 0 && props.applications.map((app, idx ) =>
                            { 
                                if(idx < applicationTotal || idx > applicationTotal*2) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a href={`${process.env.ROOT_DOMAIN}/products/application/${app.id}`} 
                                    key={idx}>
                                            {app.name}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>

                 <div className="category-col">
                    {
                        this.state.activeTab == "application" && props.applications && props.applications.length > 0 && props.applications.map((app, idx ) =>
                            { 
                                if(idx < applicationTotal*2 || idx > applicationTotal*3) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a href={`${process.env.ROOT_DOMAIN}/products/application/${app.id}`} 
                                    key={idx}>
                                            {app.name}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>
                 <div className="category-col">
                    {
                        this.state.activeTab == "industry" && props.industries && props.industries.length > 0 && props.industries.map((ind, idx ) =>
                            { 
                                if(idx > industriesTotal) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a  href={`${process.env.ROOT_DOMAIN}/products/industry/${ind.id}`} 
                                    key={idx}>
                                            {ind.name}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>
                 <div className="category-col">
                    {
                        this.state.activeTab == "industry" && props.industries && props.industries.length > 0 && props.industries.map((ind, idx ) =>
                            { 
                                if(idx < industriesTotal || idx > industriesTotal*2) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a  href={`${process.env.ROOT_DOMAIN}/products/industry/${ind.id}`} 
                                    key={idx}>
                                            {ind.name}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>
                 <div className="category-col">
                    {
                        this.state.activeTab == "industry" && props.industries && props.industries.length > 0 && props.industries.map((ind, idx ) =>
                            { 
                                if(idx < industriesTotal*2 || idx > industriesTotal*3) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a  href={`${process.env.ROOT_DOMAIN}/products/industry/${ind.id}`} 
                                    key={idx}>
                                            {ind.name}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>

                 <div className="category-col">
                    {
                        this.state.activeTab == "catalogue" && props.catalogue && props.catalogue.length > 0 && props.catalogue.map((cat, idx ) =>
                            { 
                                if(idx > catalogueTotal) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a  href={cat.url} 
                                    key={idx}>
                                            {cat.title}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>

                 <div className="category-col">
                    {
                        this.state.activeTab == "catalogue" && props.catalogue && props.catalogue.length > 0 && props.catalogue.map((cat, idx ) =>
                            { 
                                if(idx < catalogueTotal || idx > catalogueTotal*2) {
                                    return;
                                }
                                return (
                                <div className="category-side-name" key={idx}>
                                    <a  href={cat.url} 
                                    key={idx}>
                                            {cat.title}
                                    </a>
                                </div>)
                            }
                        )
                    }
                 </div>

                 <div className="category-col">
                    {
                        this.state.activeTab == "catalogue" && props.catalogue && props.catalogue.length > 0 && props.catalogue.map((cat, idx ) =>
                            { 
                                if(idx < catalogueTotal*2 || idx > catalogueTotal*3) {
                                    return;
                                }
                                return (
                                <div className="category-side-catalogue" key={idx}>
                                    <div className={`category-side-banner-${idx}`} />
                                    <div className="category-side-name">
                                        <a  href={cat.url} 
                                        key={idx}>
                                                {cat.title}
                                        </a>
                                    </div>
                                    <style>
                                        {`
                                        `}
                                    </style>
                                </div>)
                            }
                        )
                    }
                 </div>

               </div>
            </div>
            </div>
            </div>
            <style>
                {`
                    .category-menu {
                        z-index: 10;
                    }

                    .category-menu .container-inner {
                        padding: 0px;
                    }

                    .category-menu-wrapper {
                        display: flex;
                        width: 100%;
                        height: 450px;
                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
                    }

                    .left-category-menu {
                        width: 300px;
                        background: #1BA58A;
                        padding: 24px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .right-category-menu {
                        width: calc(100% - 300px);
                        background: #FFFFFF;
                        padding: 24px;
                    }

                    .right-category-inner {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        max-height: 402px;
                        overflow-y: auto;
                    }

                    .category-menu .category-side-title {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 24px;
                        color: #FFFFFF;
                        text-transform: uppercase;
                        margin: 8px 0 8px 0;
                        width: fit-content;
                    }

                    .left-category-menu a {
                        width: fit-content;
                    }
                    .category-menu .category-side-title.active {
                        color: #FFF502;
                        cursor: default;
                    }

                    .category-menu .category-side-name {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        text-transform: uppercase;
                        color: #000000;
                        max-width: 200px;
                        padding: 6px 0;
                    }

                    .category-menu .category-side-name:hover {
                        color: #1BA58A;
                    }


                @media only screen and (max-width: 800px){

                    .category-menu-wrapper {
                        width: 100%;
                        box-shadow: none;
                        height: calc(100vh - 56px);
                    }

                    .right-category-inner {
                        display: grid;
                        grid-template-columns: 1fr;
                        max-height: calc(100vh - 56px);
                        overflow-y: auto;
                    }


                    .left-category-menu {
                        width: 40%;
                        justify-content: flex-start;
                    }

                    .right-category-menu {
                        width: 60%;
                    }

                    .category-menu .category-side-title {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 10px;
                        color: #FFFFFF;
                        text-transform: uppercase;
                        margin: 8px 0 8px 0;
                    }

                    .category-menu .category-side-name {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 10px;
                        line-height: 12px;
                        text-transform: uppercase;
                        padding: 6px 0;
                    }
                }
                `}
            </style>
        </div>
      )
    }
}

export default CategoryMenu