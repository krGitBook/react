import Welcome from './Welcome';
import Undefined from './Undefined';
import Basic from './Basic';
import Initialize from './Initialize';
import Demo from './Demo';
import Slider from './Slider';
import SummedUp from './SummedUp'


// export default Welcome ;

module.exports = {
	Welcome,
	Undefined,
	Basic,
	Initialize,
	Slider,
	...Demo,
	...SummedUp
}

