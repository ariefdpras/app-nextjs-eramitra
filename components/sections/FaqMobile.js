import React from 'react'
import FaqCard from '../faq/FaqCard'

class FaqMobile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOnOrder: false,
            isToggleOnPengiriman: false,
            isToggleOnKondisi: false
        };
        this.handleClickOrder = this.handleClickOrder.bind(this);
        this.handleClickPengiriman = this.handleClickPengiriman.bind(this);
        this.handleClickKondisi = this.handleClickKondisi.bind(this);
      }
    
        handleClickOrder() {
            this.setState(state => ({
                isToggleOnOrder: !state.isToggleOnOrder
              }));
            }
    
        handleClickPengiriman() {
            this.setState(state => ({
                isToggleOnPengiriman: !state.isToggleOnPengiriman
              }));
        } 
        handleClickKondisi(){
            this.setState(state => ({
                isToggleOnKondisi: !state.isToggleOnKondisi
              }));
          }

  render() {
    const props = this.props

    return (
        <div className="faq-section-mobile">
            <div className="faq-expand">
                <div className="faq-expand-inner-wrapper">
                    <h5 className="faq-expand-title">Order</h5>                
                    { this.state.isToggleOnOrder ? <span className="material-icons" onClick={this.handleClickOrder}>expand_less</span> : 
                    <span className="material-icons" onClick={this.handleClickOrder}>expand_more</span> }
                </div>
                { this.state.isToggleOnOrder && 
                    <div className="faq-card-wrapper">
                        <FaqCard question={"Bagaimana cara menyewa barang di byebeli?"} answer={["Untuk sekarang kami hanya melayani pemesanan melalui WhatsApp, silahkan klik ", <a href="https://api.whatsapp.com/send/?phone=6281337928622&text&app_absent=0">disini</a>, " untuk berinteraksi dengan Admin kami."]}/>
                        <FaqCard question={"Apakah saya bisa order melalui whatsApp?"} answer={"Bisa."}/>
                        <FaqCard question={"Apakah saya bisa memperpanjang waktu penyewaan barang yang sedang saya sewa?"} answer={"Anda dapat melakukan request perpanjang sewa melalui Chat dengan Admin WhatsApp Byebeli."}/>
                        <FaqCard question={"Bagaimana jika saya ingin mengembalikan barang sebelum waktu penyewaan selesai?"} answer={"Anda dapat mengembalikan Lebih Awal dengan melakukan konfirmasi dengan Admin via WhatsApp. Akan tetapi Biaya dari sisa sewa tidak dapat di refund."}/>
                        <FaqCard question={"Bagaimana cara pembayaran yang dapat saya lakukan?"} answer={["Kami menerima pembayaran melalui: ", <br/>, "- Transfer bank", <br/>, "- Cash pada saat pengambilan barang."]}/>
                        <FaqCard question={"Bagaimana jika saya ingin mengembalikan barang sebelum waktu penyewaan selesai?"} answer={"Anda dapat mengembalikan Lebih Awal dengan melakukan konfirmasi dengan Admin via WhatsApp. Akan tetapi Biaya dari sisa sewa tidak dapat di refund."}/>
                        <FaqCard question={"Apakah harga di website bisa di nego ?"} answer={"Sudah nett. Namun kamu bisa mendapatkan potongan harga dengan memanfaatkan promo yang sedang berlaku."}/>
                        <FaqCard question={"Bagaimana jika sudah Deal sewa lalu cancel ?"} answer={"Sesuai syarat dan ketentuan yang berlaku. Jika cancel setelah Deal sewa maka akan dikenakan denda sebesar biaya sewa 1 hari item yang akan disewa"}/>
                    </div>
                }
            </div>
            <div className="faq-expand">
                <div className="faq-expand-inner-wrapper">
                    <h5 className="faq-expand-title">Pengiriman</h5>                
                    { this.state.isToggleOnPengiriman ? <span className="material-icons" onClick={this.handleClickPengiriman}>expand_less</span> : 
                    <span className="material-icons" onClick={this.handleClickPengiriman}>expand_more</span> }
                </div>
                { this.state.isToggleOnPengiriman && 
                    <div className="faq-card-wrapper">
                        <FaqCard question={"Wilayah mana saja yang menjadi cakupan oleh Byebeli untuk mengantarkan barang?"} answer={"Kami hanya mengantar barang ke wilayah Jakarta, Bogor, Depok, Tangerang, Bekasi, Jogja, Bandung, dan Bali."}/>
                        <FaqCard question={"Apakah barang dapat dijemput sendiri?"} answer={"Bisa."}/>
                        <FaqCard question={"Kapan barang akan dikirimkan?"} answer={"Sesuai dengan tanggal sewa. Barang akan datang di hari H tanggal sewa dan akan dijemput hari H tanggal selesai sewa."}/>
                        <FaqCard question={"Apa saja pilihan kurir pengiriman yang tersedia?"} answer={"Byebeli Delivery"}/>
                    </div>
                }
            </div>
            <div className="faq-expand">
                <div className="faq-expand-inner-wrapper">
                    <h5 className="faq-expand-title">Kondisi</h5>                
                    { this.state.isToggleOnKondisi ? <span className="material-icons" onClick={this.handleClickKondisi}>expand_less</span> : 
                    <span className="material-icons" onClick={this.handleClickKondisi}>expand_more</span> }
                </div>
                { this.state.isToggleOnKondisi && 
                    <div className="faq-card-wrapper">
                        <FaqCard question={"Apakah keadaan barang yang dikirimkan sudah bersih saat kami menyewa?"} answer={"Byebeli berkomitmen untuk menyewakan barang dalam keadaan bersih dan tidak rusak."}/>
                        <FaqCard question={"Apakah penyewa harus membersihkan barang yang telah disewa sebelum dikembalikan?"} answer={"Tidak harus, tetapi kami memberikan apresiasi yang tinggi untuk customer yang merawat dan membersihkan barang yang di sewa."}/>
                    </div>
                }
            </div>
            <style>
                    {`
                        .mobile-only {
                          display: none;
                        }
                      
                        .desktop-only {
                          display: block;
                        }
                        
                        .faq-expand {
                            margin-bottom: 8px;
                            border-radius: 4px;
                            border: 1px solid rgba(51, 51, 51, 0.2);
                            padding: 8px;
                        }
                        
                        .faq-expand-inner-wrapper {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }

                        .faq-expand-title {
                            font-family: Open Sans;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 22px;
                            letter-spacing: 0em;
                            text-align: left;
                            margin: 0;                            
                        }
                        
                        .faq-card-wrapper {
                            margin-top: 8px;
                        }

                        .material-icons {
                            cursor: pointer;
                          }
                        @media only screen and (max-width: 800px){ 


                          .mobile-only {
                            display: block;
                          }
                        
                          .desktop-only {
                              display: none;
                          }

                        }
                    `}
                </style>
        </div>
      )
    }
}

export default FaqMobile