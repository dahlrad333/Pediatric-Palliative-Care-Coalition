import React, { Component } from 'react';
import axios from 'axios';
import Profile from './Profile_Data';

class Medication extends Component {      
    constructor( props ) {
      super( props );
      this.state = {
        profile: Profile,
        // medicationName: "", 
        // dose: "",
        // frequency: "",
      };
      this.handleAddMedication = this.handleAddMedication.bind(this);
      this.handleDeleteMedication = this.handleDeleteMedication.bind(this);
      
    }
   
    handleAddMedication() { //adds another medication form
        var tempProfile = this.state.profile;
        tempProfile.medication.push({medicationName: '', dose: '', frequency: ''})
        this.setState({profile: tempProfile});
    }

    handleDeleteMedication(idx) { //deletes medication form
        var tempProfile = this.state.profile;
        if (idx > 0) {
            tempProfile.medication.splice(idx, 1);
            this.setState({profile: tempProfile});
        }
    }

render() {
    const medications= this.state.profile.medication;
    return (
      <div><br/>
            <form id="form2">
                <br/><h2>Medication</h2><br/>
                
                {medications.map((medication, idx) => {
                    var btn = '';
                    if(idx > 0) {
                        btn = <button type = "button" onClick={() => {this.handleDeleteMedication(idx)}} className="small">Delete</button>;
                    }
                    return (<div>  
                        <input className = "text" field="medicationName" id="medicationName" value ={medication.medicationName} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[idx].medicationName = e.target.value; this.setState({profile: tempProfile})}} placeholder = "Medication Name"/>
                        <input className = "text" field="dose" id="dose" value={medication.dose} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[idx].dose = e.target.value; this.setState({profile: tempProfile})}}  placeholder = "Dose"/>
                        <input className = "text" field="frequency" id="frequency" value ={medication.frequency} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[idx].frequency = e.target.value; this.setState({profile: tempProfile})}} placeholder = "Frequency"/><br/>
                    {btn}
                    </div>);
                })}
                <button type = "button" onClick = {this.handleAddMedication} className = "small">Add Another Medication</button><br/>
                {/* <label htmlFor="name"></label>
                    <input className = "text" field="name" id="name" value={medication[0].pharmacy[0].name} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].name = e.target.value; this.setState({profile: tempProfile})}}  placeholder = "Pharmacy Name"/>
                    <label htmlFor="addressLine1"></label>
                        <input className = "text" field="line1" id="line1" value={medication[0].pharmacy[0].addresses[0].line1} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].line1 = e.target.value; this.setState({profile: tempProfile})}}  placeholder="Address Line 1"/>
                    <label htmlFor="addressLine2" ></label>
                        <input className = "text" field="line2" id="line2" value={medication[0].pharmacy[0].addresses[0].line2} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].line2 = e.target.value; this.setState({profile: tempProfile})}} placeholder="Address Line 2"/><br/>
                    <label htmlFor="addressCity" ></label>
                        <input className = "text" field="city" id="city" value={medication[0].pharmacy[0].addresses[0].city} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].city = e.target.value; this.setState({profile: tempProfile})}} placeholder="City"/>
                    <label htmlFor="addressState" ></label>
                        <input className = "text" field="state" id="state" value={medication[0].pharmacy[0].addresses[0].state} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].state = e.target.value; this.setState({profile: tempProfile})}} placeholder="State"/>
                    <label htmlFor="addressZip" ></label>
                    <input className = "text" field="zip" id="zip" value={medication[0].pharmacy[0].addresses[0].zip} onChange={e => {var tempProfile = this.state.profile; tempProfile.medication[0].pharmacy[0].addresses[0].zip = e.target.value; this.setState({profile: tempProfile})}} placeholder="Zip Code"/><br/> */}
            </form>
        </div>
    )
}
}
export default Medication;