import React from "react";
import FaqCard from "../faq/FaqCard";
class Faq extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <div className="faq-section">
        <div className="faq-title">
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <p className="faq-subtitle">
          Need some help with your order or got a burning question that you need
          answered pronto? Just click on one of the sections below to find the
          answer
        </p>
        <FaqCard
          question={"Bagaimana cara menyewa barang di byebeli?"}
          answer={[
            "Untuk sekarang kami hanya melayani pemesanan melalui WhatsApp, silahkan klik ",
            <a href="https://api.whatsapp.com/send/?phone=6281337928622&text&app_absent=0">
              disini
            </a>,
            " untuk berinteraksi dengan Admin kami.",
          ]}
        />
        <FaqCard
          question={"Bagaimana cara pembayaran yang dapat saya lakukan?"}
          answer={[
            "Kami menerima pembayaran melalui: ",
            <br />,
            "- Transfer bank",
            <br />,
            "- Cash pada saat pengambilan barang.",
          ]}
        />
        <FaqCard
          question={
            "Wilayah mana saja yang menjadi cakupan oleh Byebeli untuk mengantarkan barang?"
          }
          answer={
            "Pengantaran kami mencakupi wilayah Jakarta, Bogor, Depok, Tangerang, Bekasi, Jogja, Bandung, dan Bali."
          }
        />
        <FaqCard
          question={"Kapan barang akan dikirimkan?"}
          answer={
            "Sesuai dengan tanggal sewa. Barang akan datang di hari H tanggal sewa dan akan dijemput hari H tanggal selesai sewa."
          }
        />
        <FaqCard
          question={
            "Apakah keadaan barang yang dikirimkan sudah bersih saat kami menyewa?"
          }
          answer={
            "Byebeli berkomitmen untuk menyewakan barang dalam keadaan bersih dan tidak rusak."
          }
        />
        <div className="button-wrapper"></div>
        <style>
          {`
                        .mobile-only {
                          display: none;
                        }
                      
                        .desktop-only {
                          display: block;
                        }
                        
                        .faq-title h3{
                            position: relative;
                            font-family: Open Sans;
                            font-size: 70px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 95px;
                            letter-spacing: 0em;
                            text-align: center;
                            color: #6ECAE8;
                            margin-bottom: 0;
                          }

                        .faq-section {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            margin-top: 250px;
                        }

                        .faq-section .faq-subtitle {
                            font-family: Open Sans;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 22px;
                            letter-spacing: 0em;
                            text-align: center;
                            margin-bottom: 61px;
                        }

                        .testimonial-wrapper {
                            max-width: 1120px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .button-wrapper {
                            display: flex;
                            justify-content: center;
                            margin-top: 32px;
                          }

                        .material-icons {
                          cursor: pointer;
                        }
                        @media only screen and (max-width: 1100px){ 

                          .faq-title h3{
                            font-size: 60px;
                          }
  
                          .faq-title span {
                              font-size: 60px;
                            }
                        }

                        @media only screen and (max-width: 800px){ 


                          .mobile-only {
                            display: block;
                          }
                        
                          .desktop-only {
                              display: none;
                          }

                          .faq-section {
                            margin-top: -50px;
                          }

                          .faq-title h3 {
                            font-size: 25px;
                            line-height: 27.24px;
                          }

                          .faq-section .faq-subtitle {
                            font-family: Open Sans;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 16px;
                            letter-spacing: 0em;
                            text-align: center;
                          }
  
                        }
                    `}
        </style>
      </div>
    );
  }
}

export default Faq;
