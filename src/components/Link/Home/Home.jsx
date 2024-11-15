import ProductList from "../../Main/ProductList/ProductList";
import Slider1 from "../../Main/Slider1/Slider1";
import BonbonSelection from "../../Main/BonbonSelection/BonbonSelection";

function Home({hendlItemValue}) {
	return (
		<>
			<ProductList/>
			<Slider1/>
            <BonbonSelection hendlItemValue={hendlItemValue}/>
		</>
	);
};

export default Home;