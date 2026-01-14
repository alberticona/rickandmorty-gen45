// pueden crear asi sus componentes con funciones
// paso la prop location donde mando toda la info q necesitas pa mostrar esos datos
function Card ({ location }) {
  return (
    <div className='max-w-2xl min-w-80 mx-auto px-4'>
      <div className='bg-black/25 rounded-2xl text-white py-9 px-6'>
        <h1 className='text-2xl font-semibold text-green-400 text-center mb-4'>{location.name}</h1>
        <ul className='flex justify-between'>
          {/* cuando el texto este mas grande colocamos md:text-lg */}
          <li className='text-center md:text-lg'>
            {/* md:text-base en dispositivos medianos y mas grandes el texto deja de ser sm y se vulve base/normmal */}
            <span className='block text-sm md:text-base text-white/50'>Type:</span> {location.type}
          </li>
          <li className='text-center md:text-lg'>
            <span className='block text-sm md:text-base text-white/50'>Dimension:</span> {location.dimension || 'Empty'}
          </li>
          <li className='text-center md:text-lg'>
            <span className='block text-sm md:text-base text-white/50'>Residents:</span>{' '}
            {location.residents.length}{' '}
            {location.residents.length === 1 ? 'Resident' : 'Residents'}
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Card 