// este es nuestro custom hook
import { useState } from 'react';
import axios from 'axios';

export const useApi = () => {
	const [data, setData] = useState(null);
	// voy agregar estos estos estados pero no los usare son pa manejar los errores y otro donde manejemos la pantalla de carga
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchData = async (url) => {
		// si hay una llamada se ponga la pantalla de carga y si hay un error q se borre cuando se hace la llamada
		setLoading(true);
		setError(null);
		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (error) {
			// seteo el error y lo mando, sy hay un mensaje lo muestro sino envio este mensaje
			setError(error.message || 'Something went wrong');
			// llamamos a finally pa q cuando se termine de ahcer la solicitud , asi mande la informacion correcta o se muestre un error se detenga esa pantalla de carga pa q me muestre el error o datos
		} finally {
			setLoading(false);
		}
	};
	// mado esto
	return [data, fetchData, error, loading];
};
