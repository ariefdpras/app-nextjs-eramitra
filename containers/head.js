import Head from "next/head";
import React from "react";

const WebHead = (props) => {
    return (
      <Head>
        <title>{props.title || "PT. Era Mitra Perdana"} </title>
        <link rel="icon" href="/static/images/icon.png" />
        <meta name="title" content={props.title || "PT. Era Mitra Perdana"} />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/css/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/css/slick-theme.css"
        />

      <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/css/style.css"
        />
        <link
          rel="stylesheet"
          href="/static/fonts/Bahnschrift.TTF"
        />

        <script src="https://kit.fontawesome.com/abed9966b6.js" crossorigin="anonymous"></script>

      </Head>
    );
  }

export default WebHead;
