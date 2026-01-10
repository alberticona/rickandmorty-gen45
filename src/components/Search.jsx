import { useEffect, useRef, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { baseUrl } from '../lib/utils';

// 16 ... recibimos como prop el onSearch..
function Search({ onSearch }) {
	const [locations, getLocations] = useApi();
	// 10 .....tbn colocamos un estadores errors esto viene del useState,inicialmente va a ser vacio
	const [errors, setErrors] = useState('');
	// 10 .... vamos a crear una referencia con valor incial nulo
	const inputRef = useRef(null);

	useEffect(() => {
		getLocations(`${baseUrl}/${Array.from({ length: 126 }, (_, i) => i + 1)}`);
	}, []);

	// 10 ... este es pa agregar validaciones....
	const handleSearch = () => {
		//10 tomamos const value q viene de inputref.value.trim
		const value = inputRef.current.value.trim();
		// 10 aqui hacemos validaciones las validadicones deben mostrarse debajo del formulario (donde haces la busqueda de la locacion..... )
		// 10 si hay un error vamos a setear los errores, y estos errores ......
		if (!value) {
			setErrors('Please enter a location name.');
			return;
		}
		// 12 vlidacion si sabendo q son 216 personajes alguien pone 127, colocamos una constdebmos transforar el string a un numero, usamos el Number q transforma cualquier tipo de dato en un num, si el valor no es un numero necesito q me diga not a number NAN
		const numValue = Number(value);
		if (Number.isNaN(numValue)) {
			// 13 va dar true si es un string, seteamosel  error
			setErrors('Please enter a valid number.');
			return;
		}
		// 13 siquient validacion, si me manda mas de 126 te arojo un number must be between 1 and 126
		if (numValue < 1 || numValue > 126) {
			setErrors('Number must be between 1 and 126.');
			return;
		}
		// 16 ..q lo ejecutamos aqui y solo pasamos el value
		onSearch(value);
	};

	if (!locations) return null;

	return (
		<div className="p-14">
			{/* 11 creo este div pa q los msn de error se coloquen debajo */}
			<div className="flex justify-center">
				<input
					type="text"
					// 11 y debemos usar la referencia
					ref={inputRef}
					list="locations"
					className="bg-white border border-gray-300 rounded max-w-2xl min-w-2xs py-1 px-3"
					placeholder="Search for a location"
				/>

				<datalist id="locations">
					{locations.map((location) => (
						// quiero q me muesrtre el nombre y me mande el id
						<option key={location.id} value={location.id}>
							{location.name}
						</option>
					))}
				</datalist>

				{/* 10 necesitamos un boton de manera no controlad sino como una referencia el input de arriba dispara la accion pa hacer una nueva solicitud, creamos una const handleSearch...  */}
				{/* 11 le colocamos el evento onClick y dntro el handleSearch  */}
				<button
					type="button"
					onClick={handleSearch}
					className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
				>
					Search
				</button>
			</div>

			{/* 10 los colocamos aca, los mensajes de eror deben ser pequeños text-sm */}
			{errors && (
				<p className="text-sm text-center text-red-300 mt-2">{errors}</p>
			)}
		</div>
	);
}
export default Search;
