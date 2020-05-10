import React from "react";
import AOS from 'aos';
import $ from "jquery";
class Summary extends React.Component {
    render(){
      AOS.init({
         duration : 1000
       })
       const {summary, currentDate} = this.props
       return (
           <div className="">
           <div className="boxes-wrapper">
        <div className="container">
          <div className="row flex space-between">
           <div className="box-4 TotalRecovered" data-aos="fade-up">
               <div className="inner">
                  <h3>Total Recovered</h3>
                  <p>{summary.TotalRecovered}</p>
                  <date>{new Date(currentDate).toDateString()}</date>
               </div>
             </div>
           
             <div className="box-4 TotalConfirmed" data-aos="fade-up">
               <div className="inner">
                  <h3>Total Confirmed</h3>
                  <p>{summary.TotalConfirmed}</p>
                  <date>{new Date(currentDate).toDateString()}</date>
               </div>
             </div>
             <div className="box-4 NewDeaths" data-aos="fade-up">
               <div className="inner">
                  <h3>New Deaths</h3>
                  <p>{summary.NewDeaths}</p>
                  <date>{new Date(currentDate).toDateString()}</date>
                </div>
             </div>
             <div className="box-4 TotalDeaths" data-aos="fade-up">
               <div className="inner">
                  <h3>Total Deaths</h3>
                  <p>{summary.TotalDeaths}</p>
                  <date>{new Date(currentDate).toDateString()}</date>
               </div>
             </div>
             <div className="box-4 NewRecovered" data-aos="fade-up">
               <div className="inner">
                  <h3>New Recovered</h3>
                  <p>{summary.NewRecovered}</p>
                  <date>{new Date(currentDate).toDateString()}</date>
               </div>
             </div>
             <div className="box-4 NewConfirmed" data-aos="fade-up">
                <div className="inner">
                  <h3>New Confirmed</h3>
                  <p>{summary.NewConfirmed}</p>
                  <date>{new Date(currentDate).toDateString()}</date>
               </div>
             </div>
             
           
        </div>
        </div>
        </div>
            <div className="img-wrapper">
              <div className="container">
                  <img src="https://i.ibb.co/Wz6CMP1/Screenshot-21.png" data-aos="fade-up" />
              </div>
              <div className="">
                 <div className="container">
                  <div className="flex space-center">
                  <div className="width50">
                     <img src="https://i.ibb.co/86JqGHZ/Pngtree-covid-2019-new-coronavirus-pneumonia-medical-5326896.png" data-aos="fade-up" />
                  </div>
                  <div className="width40">
                     <img src="https://i.ibb.co/r2qPVsR/united-nations-covid-19-response-o2h-Ms-Iyjb-GE-unsplash.jpg" data-aos="fade-up" />
                  </div>
                  </div>
                 </div>
              </div>
            </div>
            </div>
       )
    }
}
export default Summary;