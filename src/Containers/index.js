import Welcome from './Welcome';
import Undefined from './Undefined';
import Basic from './Basic';
import Initialize from './Initialize';
import Demo from './Demo';
import Slider from './Slider';
import SummedUp from './SummedUp';
import LazyImgDemo from './LazyImgDemo';
import CircleDemo from './CircleDemo';
import TooltipDemo from './TooltipDemo';
import MenuDemo from './MenuDemo';
import ButtonBaseDemo from './ButtonBaseDemo';
import ProcessLine from './ProcessLine';
import Loading from './Loading';


// export default Welcome ;

module.exports = {
	Welcome,
	Undefined,
	Basic,
	Initialize,
	Slider,
	...Demo,
	...SummedUp,
	LazyImgDemo,
	CircleDemo,
	TooltipDemo,
	MenuDemo,
	ButtonBaseDemo,
	ProcessLine,
	Loading
}
