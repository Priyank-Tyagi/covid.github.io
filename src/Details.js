import React from 'react';
import axios from 'axios';
import Summary from './Summary';
import Countries from './Countries';
import AOS from 'aos';
import $ from "jquery";
class Details extends React.Component {
    state = {
        countries : [],
        global:[],
        currentDate: null,
        loading:true
    }

    async componentDidMount(){
      const res = await axios.get("https://api.covid19api.com/summary");
      console.log(res);
      this.setState({countries : res.data.Countries});
      this.setState({global : res.data.Global});
      this.setState({currentDate : res.data.Date});
      this.setState({loading:false});
    }
    render(){
        AOS.init({
            duration : 1000
          })
        if (this.state.loading){
            return <h1>Loading...</h1>
        }
        return(
           <div>
            <Summary summary = {this.state.global} currentDate= {this.state.currentDate}></Summary>
            <div className="">
               <div className="container">
                    <h2 data-aos="fade-up">According to Countries</h2>
                </div>
            </div>
            <div className="container">
             <div className="tablewrapper">
            <table data-aos="fade-up">
                <thead>
                    <tr>
                        <th>Countries</th>
                        <th>Total Confirmed</th>
                        <th>New Confirmed</th>
                        {/* <th>New Recovered</th> */}
                        <th>Total Recovered</th>
                        <th>Total Deaths</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.countries.map(country => (
                        <Countries countries = {country} key={country.Country}></Countries>
                    ))}
                  
                </tbody>
            </table>
            </div>
            </div>
           </div>
        )
    }
}

export default Details;
