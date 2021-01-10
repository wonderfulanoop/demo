import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap'


function ToggleDarkMode(){
	const [mode, changeMode] = useState("light");

	function toggle() {
    if(mode == "light"){
      document.body.style.backgroundColor = '#1a1919';
      changeMode("dark")
    }
    if(mode == "dark"){
      document.body.style.backgroundColor = '#FFFFFF';
      changeMode("light")
    }
  }

	return(
		<div>
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-8">
					<Card style={{ width: '40rem' }}>
					  <Card.Img variant="top" src="https://www.thenivbible.com/wp-content/uploads/2018/08/8.13.18_TalkingwithGod-1024x683.jpg" />
					  <Card.Body>
					    <Card.Title className="text-center"> <i className="fa fa-star mr-1 text-success"></i>
					    	<span className="ml-1 mr-1">Pray for You</span>
					     <i className="fa fa-star ml-1 text-success"></i> </Card.Title>
					    <Card.Text>
					    	Hi,
					    	As you might know the time is not in our favour. 
					    	Nature is ready to crush human beings. so I am sending this pray for you - <br/>
					     	<b>May Jesus keep you & your family safe and sound and healthy.</b>
					    </Card.Text>
					  </Card.Body>
					</Card>
				</div>
			</div>
		</div>
		)
}

export default ToggleDarkMode