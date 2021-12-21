import React from 'react'

class ArticleCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
        <div className="article-card">
            <div className="article-picture-wrapper">
            <img className="article-picture" src={props.picture} /></div>
            <div className="article-description">
                <p className="article-date">{props.date}</p>
                <h6 className="article-name">{props.name} </h6>
                <a href={`${process.env.ROOT_DOMAIN}/article/${props.slug}`}><div className="btn-read-card">Read Article</div></a>
            </div>
            <style>
                {`
                    .article-card {
                        width: 200px;
                    }

                    .article-picture-wrapper {
                        width: 100%;
                        border-radius: 20px;
                    }

                    .article-picture {
                        width: 200px;
                        height: 200px;
                        object-fit: cover;
                    }

                    .article-description {
                        margin-top: 10px;
                    }

                    .article-date {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        color: #C4C4C4;
                        margin: 0 0 10px 0;
                    }

                    .article-name {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        color: #000000;
                        margin: 0 0 24px 0;
                        width: 200px;
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

                        .article-date {
                            font-family: Calibri;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 15px;
                            margin: 0 0 8px 0;
                        }

                    .article-card {
                        width: 126px;
                    }

                    .article-picture {
                        width: 126px;
                        height: 126px;
                        object-fit: cover;
                    }

                        .article-name {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 17px;
                            letter-spacing: 0em;
                            text-align: left;
                            margin: 0 0 16px 0;
                            width: 126px;
                        }

                        .btn-read-card {
                            font-family: Bahnschrift;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 14px;
                            line-height: 17px;
                            /* identical to box height */

                            text-align: center;
                        }
                    }

                `}
            </style>
        </div>
      )
    }
}

export default ArticleCard