import { useEffect } from 'react';
import { useApi } from '../hooks/useApi';

// pueden crear asi sus componentes con funciones
// este comopnent lo usamos por cada personaje
function Item({ url }) {
	// usamos el useApi aqui pa mostrar la info tbn pueden sacar el error y el loading 
	const [resident, getResident] = useApi();

	useEffect(() => {
		getResident(url);
	}, [url]);

	// en lugar del null mostrar un parrafo q diga Cargando <p>Cargando ...</p>
	if (!resident) return null;

	return (
		// rounded-2xl borde redondeado, overflow-hidden todo lo desbordado de  la tarjeta se oculta. aca definen como quieren diseñar su tarjeta
		<div className="bg-black/25 text-white rounded-2xl overflow-hidden">
			{/* flex sm:flex-col en dispositivos mas pequeños */}
			<div className="flex sm:flex-col">
				<div className="w-72 h-52 sm:w-full">
					<img
						// size-full q el ancho y alto sean de 100% y ya no heigh o width w-full, object-cover pa q no se estire solamente se adapte
						className="size-full object-cover"
						src={resident.image}
						alt={resident.name}
						width={150}
						height={150}
					/>
				</div>
				{/* p-4 pa q la info no se apegue en los bordes, pa q la info ocupe todo el ancho w-full */}
				<div className="w-full p-4">
					<h2 className="text-green-400 font-semibold text-center mb-4">
						{resident.name}
					</h2>

					{/* en dispositivos medianos el texto q sea normal */}
					<ul className="text-sm md:text-base space-y-1">
						<li>
							<span>Species:</span> {resident.species}
						</li>
						<li>
							<span>Origin:</span> {resident.origin.name}
						</li>
						<li>
							<span>Gender:</span> {resident.gender}
						</li>
						<li>
							{/* xq es un arreglo y debemos calcular la cantidad de episodios usamos length */}
							<span>Episodes where appear:</span> {resident.episode.length}{' '}
							{/* cuando sea un solo episodio aparezca en singular y mas en plural */}
							{resident.episode.length === 1 ? ' episode' : ' episodes'}
						</li>
						<li>
							<span>Status:</span>
							{/* 55m usamos un ternario multiple condicion multiple  */}
							{
								// si residents en su estatus es igual a alive
								resident.status === 'Alive'
									? '🥳 Alive' // if
									: // la segunda condicion
									resident.status === 'Dead'
									? '💀 Dead' // else if
									: '❔ Unknown' // else
							}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Item;
