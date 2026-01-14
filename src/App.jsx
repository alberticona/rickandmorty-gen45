import { useEffect } from 'react';
import { useApi } from './hooks/useApi';
import { baseUrl, randomId } from './lib/utils';
import Card from './components/Card';
import List from './components/List';
import Search from './components/Search';

function App() {
	// usamos el useApi aqui pa mostrar la info tbn lo uso en el componente item
	const [location, getLocation] = useApi();

  // necesitamos de este efecto pa traernos la data
	useEffect(() => {
    // concatenamos con el baseUrl al randomId, ej https://rickandmortyapi.com/api/location/3
		getLocation(`${baseUrl}/${randomId}`);
	}, []);

	return (
		<div>
			{/* 1.05 esto es pa el wallpaper y no se vea tan simple, esto es pa colocar la img ahi bg-[url('/bg.jpg')]. xq la img esta muy grande bg-cover. en dispositivos medianos md:min-h-[75dvh] el 75% del display dinamic del viewportheight. cuando la img es muy grande debemos poner pa q el backrgound no se repita bg-no-repeat. el bg fixed hace q la img se quede quieta asi te desplazas hacia abajo con el scroll y la img se va desplazando */}
			<div className="min-h-80 md:min-h-[75dvh] bg-black/50 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat" />

			{/* Search Form */}
			<Search
				// 16 agregamos una prop onSearch y le pasamos nuestra func llamada getlLocation le psamos el baseUrl , y sacamos el locationId y locationId es lo q vamos a buscar, este onSearch lo pasamos al componente search...
				onSearch={(locationId) => getLocation(`${baseUrl}/${locationId}`)}
			/>

			{/* Location Card */}
			{location && <Card location={location} />}

			{/* Residents List */}
			<List residents={location?.residents} />
		</div>
	);
}

export default App;
