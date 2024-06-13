import React, { useState } from "react";



//create your first component
const Home = () => {
	const [SelectedColor, setselectedColor] = useState("");
console.log(SelectedColor)
	return (
		
		<div className="traffic-light">

				<div className="traffic-handel"></div>
				
				<div 
				onClick= {() =>setselectedColor("red") }
				className={"light red"+(SelectedColor ==="red" ? " glow" : "")}>

				</div>
				<div
				onClick= {() =>setselectedColor("yellow") }
				 className={"light yellow"+(SelectedColor ==="yellow" ? " glow" : "")}>

				 </div>
				<div 
				onClick= {() =>setselectedColor("green") }
				className={"light green"+(SelectedColor ==="green" ? " glow" : "")}>

				</div>
		
		</div>
	);
};

export default Home;
