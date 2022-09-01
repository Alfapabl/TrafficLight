import { func } from "prop-types";
import React, { useState } from "react";

//create your first component


const Light = () => {

	const [ color, setColor] = useState("");
	console.log(color);



	return (
		
		<>
		

		<span className="border border-dark">
			
		</span>
		<div className="container text-center">
		
			<div className="row"><span id="red" onClick={() => setColor("red")} className={(color === "red" ? "spinner-grow spinner-grow-sm" : "dot")} ></span></div>
			<div className="row"><span id="yellow" onClick={() => setColor("yellow")} className={(color === "yellow" ? "spinner-grow spinner-grow-sm" : "dot")} ></span></div>
			<div className="row"><span id="green" onClick={() => setColor("green")} className={(color === "green" ? "spinner-grow spinner-grow-sm" : "dot")}></span></div>
			
	

		</div>

			

		</>
	
	
		
	);
};

export default Light;
