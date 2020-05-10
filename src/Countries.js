import React from 'react';
import { render } from '@testing-library/react';
import AOS from 'aos';
import $ from "jquery";

export class Countries extends React.Component{
    render() {
        AOS.init({
            duration : 1000
          })
        const {countries} = this.props;
       return (
        <tr>
            <td>{countries.Country}</td>
            <td class="mix">{countries.TotalConfirmed}</td>
            <td class="mix2">{countries.NewConfirmed}</td>
            <td className="green">{countries.TotalRecovered}</td>
            <td className="red">{countries.TotalDeaths}</td>
        </tr>
       )
    }
}

export default Countries;