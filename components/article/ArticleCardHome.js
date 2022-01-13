import React from 'react'

class ArticleCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
        <div className="article-card-home">
            <div className="article-picture-wrapper">
            <img className="article-picture" src={`https://svr.eramitra.com/images/${props.picture}`} /></div>
            <div className="article-description">
                <p className="article-date">{props.date}</p>
                <a href={`${process.env.ROOT_DOMAIN}/news-info/${props.slug}`}><h6 className="article-name">{props.name} </h6></a>
            </div>
            <style>
                {`

                    .article-card-home {
                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
                        border-radius: 20px;
                        height: 400px;
                        width: 200px;
                        margin: 10px;
                    }

                    .article-card-home .article-picture-wrapper {
                        width: 100%;
                        border-radius: 20px 20px 0 0;
                    }

                    .article-card-home .article-picture {
                        width: 200px;
                        height: 200px;
                        object-fit: cover;
                        border-radius: 20px 20px 0 0;
                    }

                    .article-card-home .article-description {
                        padding: 10px;
                        width: 200px;
                    }

                    .article-card-home .article-date {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        color: #C4C4C4;
                        margin: 0 0 10px 0;
                    }

                    .article-card-home .article-name {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        color: #000000;
                        margin: 0 0 24px 0;
                        word-wrap: wrap;
                    }

                    .btn-read-card {
                        font-family: Bahnschrift;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px;
                        letter-spacing: 0em;
                        text-align: left;

                        width: fit-content;
                        color: #1BA58A;
                        padding: 4px 16px;
                        border: 1px solid #1BA58A;
                        border-radius: 4px;
                        margin: 0;
                    }


                    @media only screen and (max-width: 800px){

                        .article-card-home .article-date {
                            font-family: Calibri;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 15px;
                            margin: 0 0 8px 0;
                        }

                        .article-card-home {
                        width: 150px;
                        height: 300px;
                    }

                    .article-card-home .article-picture {
                        width: 150px;
                        height: 150px;
                        object-fit: cover;
                    }

                    
                    .article-card-home .article-description {
                        padding: 10px;
                        width: 150px;
                    }

                    .article-card-home .article-name {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 17px;
                            letter-spacing: 0em;
                            text-align: left;
                            margin: 0 0 16px 0;
                        }
                    }

                `}
            </style>
        </div>
      )
    }
}

export default ArticleCard