import React, {useState, useEffect} from 'react';
import Body from 'components/layout/Body/Body';
import Button from 'components/units/Button/Button';
import Spinner from 'components/units/Button/Spinner/Spinner';
import {MapContainer, TileLayer, Marker, MapConsumer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Styles
import {HomeStyled} from './Home.styles';
import {Card, Container} from 'theme/GlobalComponents';
import Colors from 'theme/Colors';
import 'leaflet/dist/leaflet.css';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {
	HOUSES_STATUS,
	setSelectedLocation,
	setHousesToShow,
} from 'store/toolkit/houses/houses.slice';
import {getHouses} from 'store/toolkit/houses/houses.slice';

// Se usa icono personalizado porque la librería react-leaflet da error con el icono por defecto.
// Mirar issue en: https://github.com/urlquesea.
// Solución encontrada en:

const leafletIcon = L.icon({
	iconSize: [25, 41],
	iconAnchor: [10, 41],
	popupAnchor: [2, -40],
	iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
	shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
});

/**
 * Esta función devuelve la portada
 * @returns {JSX} Home page.
 */
function Home() {
	const dispatch = useDispatch();
	const selectedLocation = useSelector((state) => state.houses.selectedLocation);
	const houses = useSelector((state) => state.houses.houses);
	const housesStatus = useSelector((state) => state.houses.status);
	const housesToShow = useSelector((state) => state.houses.housesToShow);
	const [positionMouse, setPositionMouse] = useState(undefined);

	useEffect(() => {
		dispatch(getHouses());
	}, []);

	const handleLoadMore = () => {
		dispatch(setHousesToShow());
	};

	
	const locateInMap = (lat, long) => {
		dispatch(setSelectedLocation([lat, long]));
	};


	const mostrarZona = (e) => {
		alert("hola")
		var latLngToLayerPoint =e.latlng
		console.log(latLngToLayerPoint);
		console.log("longitud")
		var layerPointToLatLng = e.layerPoint
		console.log("latitud")
		console.log(layerPointToLatLng);
	};
	
	return (
		<Body hasSubheader={true}>
			<Container>
				<HomeStyled>
					<div className="left">
						<div className="houses-wrapper">
							{housesStatus === HOUSES_STATUS.PENDING ||
							housesStatus === HOUSES_STATUS.INITIAL ? (
								<div
									style={{
										width: '100%',
										height: 200,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Spinner color={Colors.blue} fontSize={40} />
								</div>
							) : (
								<div className="houses">
									{houses.slice(0, housesToShow).map((house, idx) => (
										<Card key={`house-${idx}`} className="house">
											<img
												src={`https://api-casas.kevinmamaqi.com/${house.image}`}
												alt=""
											/>
											<div className="title">{house.name}</div>
											<div className="footer">
												<div className="price">{house.price}</div>
												<Button
													text="Localizar"
													textStyles={{color: 'white', fontSize: 14}}
													buttonStyles={{
														backgroundColor: '#8077A3',
													}}
													onClick={() =>
														locateInMap(house.lat, house.long)
													}
												/>
											</div>
										</Card>
									))}
								</div>
							)}
							{housesToShow <= 500 ? (
								<Button
									text="Cargar más"
									buttonStyles={{backgroundColor: Colors.darkBlue}}
									textStyles={{color: 'white'}}
									onClick={() => handleLoadMore()}
								/>
							) : null}
						</div>
					</div>
					<div className="right">
						{housesStatus === HOUSES_STATUS.PENDING ||
						housesStatus === HOUSES_STATUS.INITIAL ? (
							<div
								style={{
									width: '100%',
									height: 200,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Spinner color={Colors.blue} fontSize={40} />
							</div>
						) : (
							<MapContainer
								center={selectedLocation}
								zoom={13}
								scrollWheelZoom={false}
								style={{width: '100%'}}
								id="mapaCasas"
							>
								<TileLayer
									attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>

								<Button style="z-index:100" onClick={()=>mostrarZona} position={selectedLocation}>VER EN ESTA ZONA</Button>
								<Marker icon={leafletIcon} position={selectedLocation} />
								<MapConsumer>
									{(map) => {
										map.setView(selectedLocation);
										return null;
									}}
								</MapConsumer>
							</MapContainer>
						)}
					</div>
				</HomeStyled>
			</Container>
		</Body>
	);
}

export default Home;

/**
 * Esta función suma dos números.
 * @param {number} a any number
 * @param {number} b any number
 * @returns {number} that a plus b.
 */
function suma(a, b) {
	return a + b;
}
suma(2, 4);
