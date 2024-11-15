import './Main.css';
import Home from '../Link/Home/Home';
import About from '../Link/About/About';
import Assortiment from '../Link/Assortiment/Assortiment';
import Items from '../Link/Items/Items';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../../ScrollToTop';

function Main({openSort, filteredProducts, hendlItemValue}) {

	return (
		<>
			<ScrollToTop/>
			<Routes>
				<Route path="/" element={<Home hendlItemValue={hendlItemValue}/>} />
				<Route path="/About" element={<About />} />
				<Route path="/Assortiment" element={<Assortiment />} />
				<Route path="/Bonbons" element={
                    <Items
                        title="Bonbons"
                        filteredProducts={filteredProducts}
                        openSort={openSort}
                        hendlItemValue={hendlItemValue}
						backgroundImage={"https://i.ibb.co/2jHdW2k/bonbons.webp"}
                    />
                } />
                <Route path="/Chocolate" element={
                    <Items
                        title="Chocolate"
                        filteredProducts={filteredProducts}
                        openSort={openSort}
                        hendlItemValue={hendlItemValue}
						backgroundImage={"https://i.ibb.co/B45CHYm/chocolate.webp"}
                    />
                } />
                <Route path="/Bars" element={
                    <Items
                        title="Bars"
                        filteredProducts={filteredProducts}
                        openSort={openSort}
                        hendlItemValue={hendlItemValue}
						backgroundImage={"https://i.ibb.co/w6jHcSs/bars.webp"}
                    />
                } />
                <Route path="/Nut_butters" element={
                    <Items
                        title="Nut butters"
                        filteredProducts={filteredProducts}
                        openSort={openSort}
                        hendlItemValue={hendlItemValue}
						backgroundImage={"https://i.ibb.co/HqzGNYf/nuts-butter.webp"}
                    />
                } />
                <Route path="/Gift_sets" element={
                    <Items
                        title="Gift sets"
                        filteredProducts={filteredProducts}
                        openSort={openSort}
                        hendlItemValue={hendlItemValue}
						backgroundImage={"https://i.ibb.co/k0N922w/gift-sets.webp"}
                    />
                } />
			</Routes>
		</>
	);

};

export default Main;