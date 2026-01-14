import Item from './Item';

//  en el component list tenemos q mapear la lista pa mostrar una tarjeta por cada residente q se encuentra en esa locación. pa q vean q es lo q tiene esta lista
function List({ residents }) {
	return (
		<div className="max-w-5xl min-w-80 mx-auto px-4 py-18">
			{/* este div va contener todas las tarjetas, aplicamos un sistema de cuadriculas con grid. tailwind te trae pa poder trabajar las cuadriculas de manera responsiva ej en dispositivos mobiles grid-cols-1 pa q todo este en una sola columna, en dispositivos mas grandes md:grid-cols-2. en minmax establecemos el tamaño minimo y maximo q va tener como min 250px y como max 1fr todos los q quepan el mismo espacio disponible, aca calculas pa ver q el tamaño de las imgs se vean mejor 250px */}
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6">
				{/* map al igual q los bucles de js lo q hace es duplicar lo q le quieras pasar,te voy a pasar un componente item y me vas  a crear todos los items dependiendo de la long q tengas de los personajes si son 62 personajes debes crear 62 componentes items */}
				{residents?.map((resident) => (
					<Item key={resident} url={resident} />
				))}
			</div>

			{/* podriamos crear un componente empty con una img q indique vacio, en este caso solo haremos estilos  */}
			{residents?.length === 0 && (
				<p className="text-2xl text-white font-semibold text-center">
					No residents found
				</p>
			)}
		</div>
	);
}
export default List;
