import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { capitalizeFirstLetter, setTitle } from '../tools/Utils'

export default function Apply() {
    const { persona } = useParams();
    const [globalId, setId] = useState('')
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [instagram, setInstagram] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [preferenciaSexual, setPreferenciaSexual] = useState('');
    const [genero, setGenero] = useState('');
    const [otroGenero, setOtroGenero] = useState('');
    const [artistaFavorito, setArtistaFavorito] = useState('');
    const [otrosArtistas, setOtrosArtistas] = useState([]);
    const [altura, setAltura] = useState('');
    const [colorOjos, setColorOjos] = useState('');
    const [descripcionPelo, setDescripcionPelo] = useState('');
    const [relacionesPasadas, setRelacionesPasadas] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const formatPhoneNumber = (phone) => {
        // limpar numero
        const cleaned = phone.replace(/\D/g, '');

        // casos específicos
        if (cleaned.startsWith('549')) {
            // si esta bien
            return cleaned;
        } else if (cleaned.startsWith('9')) {
            // si le falta el 54
            return `54${cleaned}`;
        } else if (cleaned.startsWith('54') && !cleaned.startsWith('549')) {
            // si le falta el 9
            return cleaned.slice(0, 2) + '9' + cleaned.slice(2);
        } else if (cleaned.startsWith('0')) {
            // si tiene 011
            return '549' + cleaned.slice(1);
        } else {
            // otros
            return `549${cleaned}`;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = uuidv4();
        setId(id);

        const formattedTelefono = formatPhoneNumber(telefono);

        const formData = {
            id,
            nombre,
            edad,
            telefono: formattedTelefono,
            instagram,
            descripcion,
            preferenciaSexual,
            genero: genero === 'Otro' ? otroGenero : genero,
            artistaFavorito,
            otrosArtistas,
            altura,
            colorOjos,
            descripcionPelo,
            relacionesPasadas,
            persona,
        };

        try {
            const response = await fetch('https://filehost.comidolar.com.ar:9090/add/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error al enviar los datos');
            }

            const responseData = await response.json();
            console.log('Respuesta de la API:', responseData);
            setIsCompleted(true);
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            setIsError(true);
            setErrorMessage(error.message); // Use error.message instead of just error
        }
    };

    useEffect(() => {
        const title = "Aplica para ser pareja de " + capitalizeFirstLetter(persona) + ' | Comi Buenas Noches'
        setTitle(title)
    })

    return (
        <div className="max-w-lg mx-auto bg-white py-[64px] pt-[150px] px-6">
            {!isCompleted && !isError && (
                <div>
                    <h1 className='text-4xl mb-12'>Solicitud para <strong className='capitalize'>{persona}</strong></h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="nombre" className="block font-medium text-gray-700">Nombre</label>
                            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div>
                            <label htmlFor="edad" className="block font-medium text-gray-700">Edad</label>
                            <input type="text" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div>
                            <label htmlFor="telefono" className="block font-medium text-gray-700">Número de Teléfono</label>
                            <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div>
                            <label htmlFor="instagram" className="block font-medium text-gray-700">Instagram</label>
                            <input type="text" id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div>
                            <label htmlFor="descripcion" className="block font-medium text-gray-700">Descripción</label>
                            <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Preferencia Sexual</label>
                            <div className="mt-1 flex items-center gap-2">
                                <div className='flex items-center'>
                                    <input type="radio" id="heterosexual" name="preferenciaSexual" value="Heterosexual" onChange={(e) => setPreferenciaSexual(e.target.value)} required />
                                    <label htmlFor="heterosexual" className="ml-2 text-gray-700">Heterosexual</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" id="homosexual" name="preferenciaSexual" value="Homosexual" onChange={(e) => setPreferenciaSexual(e.target.value)} required />
                                    <label htmlFor="homosexual" className="ml-2 text-gray-700">Homosexual</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Género con el que se identifica</label>
                            <div className="mt-1 flex items-center gap-2">
                                <div className='flex items-center'>
                                    <input type="radio" id="masculino" name="genero" value="Masculino" onChange={(e) => setGenero(e.target.value)} required />
                                    <label htmlFor="masculino" className="ml-2 text-gray-700">Masculino</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" id="femenino" name="genero" value="Femenino" onChange={(e) => setGenero(e.target.value)} required />
                                    <label htmlFor="femenino" className="ml-2 text-gray-700">Femenino</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" id="otro" name="genero" value="Otro" onChange={(e) => setGenero(e.target.value)} />
                                    <label htmlFor="otro" className="ml-2 text-gray-700">Otro</label>
                                    {genero === 'Otro' && (
                                        <input type="text" value={otroGenero} onChange={(e) => setOtroGenero(e.target.value)} placeholder="Especificar otro género" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="artistaFavorito" className="block font-medium text-gray-700">Artista/Banda Musical Favorito</label>
                            <input type="text" id="artistaFavorito" value={artistaFavorito} onChange={(e) => setArtistaFavorito(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div>
                            <label htmlFor="otrosArtistas" className="block font-medium text-gray-700">Otros Artistas/Bandas Musicales que te gusten (opcional)</label>
                            <input type="text" id="otrosArtistas" value={otrosArtistas} onChange={(e) => setOtrosArtistas(e.target.value.split(','))} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div>
                            <label htmlFor="altura" className="block font-medium text-gray-700">Altura (opcional)</label>
                            <input type="number" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div>
                            <label htmlFor="colorOjos" className="block font-medium text-gray-700">Color de Ojos (opcional)</label>
                            <input type="text" id="colorOjos" value={colorOjos} onChange={(e) => setColorOjos(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div>
                            <label htmlFor="descripcionPelo" className="block font-medium text-gray-700">Descripción de Pelo (opcional)</label>
                            <input type="text" id="descripcionPelo" value={descripcionPelo} onChange={(e) => setDescripcionPelo(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div>
                            <label htmlFor="relacionesPasadas" className="block font-medium text-gray-700">Número de Relaciones Pasadas (opcional)</label>
                            <input type="number" id="relacionesPasadas" value={relacionesPasadas} onChange={(e) => setRelacionesPasadas(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Enviar Candidatura
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {isCompleted && (
                <div className='flex flex-col gap-2 text-3xl'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="128"
                        height="128"
                        fill="none"
                        stroke="#00b341"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0"></path>
                    </svg>
                    <p>Formulario enviado con éxito!</p>
                    <p>Notificaremos a <strong className='capitalize'>{persona}</strong> de tu solicitud.</p>
                    <Link className="px-4 py-2 rounded-xl bg-gray-300 hover:scale-105 active:scale-95 transition duration-200" to={"/candidatura/" + globalId}>Revisar datos</Link>
                </div>
            )}

            {isError && (
                <main className="h-[100svh] p-8 flex flex-col items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="128"
                        height="128"
                        fill="none"
                        stroke="#ff2825"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        className="icon icon-tabler icon-tabler-face-id-error"
                        viewBox="0 0 24 24"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2M9 10h.01M15 10h.01M9.5 15.05a3.5 3.5 0 015 0"></path>
                    </svg>
                    <h1 className="text-2xl">
                        Error al enviar el Formulario:
                        <span className='text-red-400 font-bold'>{errorMessage}</span>
                    </h1>
                    <Link to="/">Volver al inicio</Link>
                </main>
            )}
        </div>
    );
}
