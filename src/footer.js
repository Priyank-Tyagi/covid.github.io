import React from "react";
import AOS from 'aos';
import $ from "jquery";
class Footer extends React.Component {
    
    render(){
        AOS.init({
            duration : 1000
          })
       const {summary, currentDate} = this.props
       return (
           <div>
            <div className="">
                <h2 data-aos="fade-up">Connect With Me on: </h2>
            </div>
           <div className="social-icon flex" data-aos="fade-up">
                <a class="button-wrap facebook" href="https://www.facebook.com/golu746" target="_blank">
                <div class="button-inner-wrap">
                    <i class="icon-facebook inactive"></i>
                    <i class="icon-facebook active"></i>
                </div>
               </a>

                <a class="button-wrap instagram" href="https://www.instagram.com/priyank_tyagi_/" target="_blank">
                <div class="button-inner-wrap">
                    <i class="icon-instagram inactive"></i>
                    <i class="icon-instagram active"></i>
                </div>
              </a>


            <a class="button-wrap twitter" href="https://twitter.com/Priyank22432355" target="_blank"> 
            <div class="button-inner-wrap">
                <i class="icon-twitter inactive"></i>
                <i class="icon-twitter active"></i>
            </div>
            </a>

           </div>
           <div className="designedandeveloped">
               <h3 data-aos="fade-up">Designed & Developed by <span>Priyank Tyagi</span></h3>
               <img src="https://i.ibb.co/k4GChHC/IMG-20200503-195513-230-1.jpg" data-aos="fade-up" />
           </div>
           </div>


)
}
}
export default Footer;