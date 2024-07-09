import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Apply() {
    const { persona } = useParams();
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            id: uuidv4(),
            nombre,
            edad,
            telefono,
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
            alert('¡Candidatura enviada con éxito!');
            limpiarFormulario();
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            alert('Ocurrió un error al enviar la candidatura. Por favor, inténtalo de nuevo.');
        }
    };

    const limpiarFormulario = () => {
        setNombre('');
        setEdad('');
        setTelefono('');
        setInstagram('');
        setDescripcion('');
        setPreferenciaSexual('');
        setGenero('');
        setOtroGenero('');
        setArtistaFavorito('');
        setOtrosArtistas([]);
        setAltura('');
        setColorOjos('');
        setDescripcionPelo('');
        setRelacionesPasadas('');
    };

    return (
        <div className="max-w-lg mx-auto py-[64px] pt-[150px] px-6">
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
                    <div className="mt-1">
                        <input type="radio" id="heterosexual" name="preferenciaSexual" value="Heterosexual" onChange={(e) => setPreferenciaSexual(e.target.value)} required />
                        <label htmlFor="heterosexual" className="ml-2 text-gray-700">Heterosexual</label>
                        <input type="radio" id="homosexual" name="preferenciaSexual" value="Homosexual" onChange={(e) => setPreferenciaSexual(e.target.value)} required />
                        <label htmlFor="homosexual" className="ml-2 text-gray-700">Homosexual</label>
                        {/* Agregar más opciones de radio según las preferencias sexuales requeridas */}
                    </div>
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Género con el que se identifica</label>
                    <div className="mt-1">
                        <input type="radio" id="masculino" name="genero" value="Masculino" onChange={(e) => setGenero(e.target.value)} required />
                        <label htmlFor="masculino" className="ml-2 text-gray-700">Masculino</label>
                        {/* Agregar más opciones de radio según los géneros requeridos */}
                        <input type="radio" id="otro" name="genero" value="Otro" onChange={(e) => setGenero(e.target.value)} />
                        <label htmlFor="otro" className="ml-2 text-gray-700">Otro</label>
                        {genero === 'Otro' && (
                            <input type="text" value={otroGenero} onChange={(e) => setOtroGenero(e.target.value)} placeholder="Especificar otro género" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        )}
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
    );
};