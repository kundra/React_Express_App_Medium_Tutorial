import React, {Component} from 'react';
import {MenuItem, TextField} from "@material-ui/core";

const states = [
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh'},
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh'},
    { value: 'Assam', label: 'Assam'},
    { value: 'Bihar', label: 'Bihar'},
    { value: 'Chattisgarh', label: 'Chattisgarh'},
    { value: 'Goa', label: 'Goa'},
    { value: 'Gujrat', label: 'Gujrat'},
    { value: 'Haryana', label: 'Haryana'},
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh'},
    { value: 'Jharkhand', label: 'Jharkhand'},
    { value: 'Karnataka', label: 'Karnataka'},
    { value: 'Kerala', label: 'Kerala'},
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh'},
    { value: 'Maharashtra', label: 'Maharashtra'},
    { value: 'Manipur', label: 'Manipur'},
    { value: 'Meghalaya', label: 'Meghalaya'},
    { value: 'Mizoram', label: 'Mizoram'},
    { value: 'Nagaland', label: 'Nagaland'},
    { value: 'Orrisa', label: 'Orrisa'},
    { value: 'Punjab', label: 'Punjab'},
    { value: 'Rajasthan', label: 'Rajasthan'},
    { value: 'Sikkim', label: 'Sikkim'},
    { value: 'Tamil Nadu', label: 'Tamil Nadu'},
    { value: 'Telangana', label: 'Telangana'},
    { value: 'Tripura', label: 'Tripura'},
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh'},
    { value: 'Uttrakhand', label: 'Uttrakhand'},
    { value: 'West Bengal', label: 'West Bengal'},
    { value: 'Andaman and Nicobar Islands', label: 'Andaman and Nicobar Islands'},
    { value: 'Chandigarh', label: 'Chandigarh'},
    { value: 'Dadar & Nagar Haveli & Daman & Diu', label: 'Dadar & Nagar Haveli & Daman & Diu'},
    { value: 'Delhi', label: 'Delhi'},
    { value: 'Jammu & Kashmir', label: 'Jammu & Kashmir'},
    { value: 'Ladakh', label: 'Ladakh'},
    { value: 'Lakshdweep', label: 'Lakshdweep'},
    { value: 'Puducherry', label: 'Puducherry'}
];

const portals = [
    {value: 'Amazon', label: 'Amazon'},
    {value: 'Flipkart', label: 'Flipkart'},
    {value: 'Offline', label: 'Offline'},
    {value: 'PayTM', label: 'PayTM'}
];

class StockAddition extends Component{
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            value: '',
            fullName: '',
            address: '',
            city:'',
            state:'',
            mobileNumber:0,
            orderNumber:'',
            portal:''
        };

        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
        this.handleOrderNumberChange = this.handleOrderNumberChange.bind(this);
        this.handlePortalChange = this.handlePortalChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFullNameChange(event) {
        this.setState({fullName: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }

    handleCityChange(event) {
        this.setState({city: event.target.value});
    }

    handleStateChange(event) {
        this.setState({state: event.target.value});
    }

    handleMobileNumberChange(event) {
        this.setState({mobileNumber: event.target.value});
    }

    handleOrderNumberChange(event) {
        this.setState({orderNumber: event.target.value});
    }

    handlePortalChange(event) {
        this.setState({portal: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.fullName);
        event.preventDefault();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField required id="order-number" label="Order No." variant="outlined" value={this.state.orderNumber} onChange={this.handleOrderNumberChange} />
                    <br/><br/>
                    <TextField required id="portal" label="Portal/Vendor" select variant="outlined" value={this.state.portal} onChange={this.handlePortalChange} >
                        {portals.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br/><br/>
                    <TextField required id="full-name" label="Full Name" variant="outlined" value={this.state.fullName} onChange={this.handleFullNameChange} />
                    <br/><br/>
                    <TextField required id="address" label="Address" variant="outlined" multiline value={this.state.address} onChange={this.handleAddressChange} />
                    <br/><br/>
                    <TextField required id="city" label="City" variant="outlined" value={this.state.city} onChange={this.handleCityChange} />
                    <br/><br/>
                    <TextField required id="state" select label="State" variant="outlined" value={this.state.state} onChange={this.handleStateChange}>
                        {states.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br/><br/>
                    <TextField required id="mobile-number" label="Mobile Number" type="number" variant="outlined"  value={this.state.mobileNumber} onChange={this.handleMobileNumberChange} />
                    <br/><br/>
                    <input type="submit" value="Save" />
                </form>

            </div>
        );
    }
}

export default StockAddition;