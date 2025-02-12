import React from "react";
import Link from "next/link";

/**
 * Props:
 *  - breadcrumbs = [{title:'',pathname:'',query:{},url:''},,] (exclude Home)
 */
const Breadcrumb = (props) => {
  return (
    <React.Fragment>
      <ul className="breadcrumb">
        <li key={0}>
          <Link href={props.url} as={props.url} legacyBehavior>
            <a className="breadcrumb-section-text">Home</a>
          </Link>
        </li>
        {props.breadcrumbs
          ? props.breadcrumbs.map((item, idx) =>
              !!item.title ? (
                <li key={idx} className="breadcrumb-section">
                  <span className="ic-separate">/</span>
                  {idx < props.breadcrumbs.length - 1 ? (
                    <Link href={item.url} legacyBehavior>
                      <a className="breadcrumb-section-text">
                        {item.title.replace(/[-]/g, " ")}
                      </a>
                    </Link>
                  ) : (
                    <span className="breadcrumb-section-text active">
                      {item.title.replace(/[-]/g, " ")}
                    </span>
                  )}
                </li>
              ) : null
            )
          : null}
      </ul>

      <style jsx>
        {`
          .ic-separate {
            color: #919eab;
            font-family: Calibri;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
            margin: 0px 10px;
          }
          .breadcrumb {
            padding: 0;
            margin: 35px 0;
          }
          .breadcrumb-section {
            display: flex;
            flex-flow: row;
            align-items: center;
          }
          .breadcrumb-section-text {
            font-family: Calibri;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            color: #1ba58a;
            text-align: left;
            text-transform: capitalize;
          }
          .breadcrumb-section-text:hover {
            color: #4a4a4a;
          }
          .breadcrumb-section-text.active {
            color: #000;
          }
          .breadcrumb li {
            display: inline;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Breadcrumb;
