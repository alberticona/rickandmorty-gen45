import { useState } from 'react';
// axios simplifica el proceso pa obtencion de datos
import axios from 'axios';

// este es nuestro custom hook, creamos nuestro custom hook con una arrowfunction, el custom hook realiza solicitudes get a diferentes endpoints y rutas
// el custom hook lo q hace es reutilizar la misma lógica, realiza una solicitud de manera genérica hacia una api apuntando a un end point, este es el verdadero uso de los customhook q podemos reutilizar la lógica para no duplicarla 
export const useApi = () => {
	// pa  guardar la info q estoy solicitando, necesito un estado  que inicia en nulo y creamos una var de estado llamada data
	const [data, setData] = useState(null);
	// aca tbn pueden sacar el error y el loading si lo necesitan pa generar la pantalla de carga, esto directamente del useApi
	// voy agregar estos estados pero no los usare son pa manejar los errores y otro donde manejemos la pantalla de carga
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	// crearemos una func q se encargue de hacer la solicitud (darle la opción al usuario de ejecutar la solicitud cuando el lo necesite), dar la opción de retornar data y fetch data cuando se quiere realzar la solicitud
	const fetchData = async (url) => {
		// si hay una llamada se ponga la pantalla de carga y si hay un error q se borre cuando se hace la llamada
		setLoading(true);
		setError(null);

		// el fetch data recibe la url, una ves recibida usamos axios.get y apuntamos a esa url, como usamos async se puede usar el try catch, ese proceso tarda un poco esperalo, por eso el await, y lo q obtenemos es una respuesta y de esa respuesta obtenemos la data y seteamos data
		try {
			// con axios, quiero q me traigas la url
			const res = await axios.get(url);
			setData(res.data);
		} catch (error) {
			// seteo el error y lo mando, si hay un mensaje lo muestro sino envio este mensaje
			setError(error.message || 'Something went wrong');
			// llamamos a finally pa q cuando se termine de hacer la solicitud, asi mande la informacion correcta o se muestre un error se detenga esa pantalla de carga pa q me muestre el error o datos
		} finally {
			setLoading(false);
		}
	};

	// mando esto
	return [data, fetchData, error, loading];
};
