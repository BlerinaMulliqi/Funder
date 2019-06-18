import React from "react"
import Button from 'react-bootstrap/Button';

function DonateForm(props) {

    return (
        <div>
            <form>
             <h2>Event Name </h2>
    
            <input required type="text" placeholder="" /><br />
            <label>Location</label><br />
            <input required type="text"  placeholder="" /><br />
            <label>Time</label><br></br>
            <input required type="text" placeholder="" /><br />
            <label>Add picture</label> <br></br>
            <input required type="text" placeholder="" /><br />
            
            <button>Post</button>


            </form>

        </div>
    )
}

export default DonateForm