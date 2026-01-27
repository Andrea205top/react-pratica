// voglio mostrare i bottoni per navigare nelle varei pagine
interface HeaderProps{
    paginaAttiva: number;
    onPagChangeClick: (pagNum: number) => void;
}

function Header({ paginaAttiva, onPagChangeClick }: HeaderProps) {
    return (
        <div style={{
            padding: '20px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center'
        }}>

            {/* Bottone Welcome */}
            <button
                onClick={() => onPagChangeClick(0)}
                style={{
                    fontWeight: paginaAttiva === 0 ? 'bold' : 'normal',
                    backgroundColor: paginaAttiva === 0 ? 'white' : 'rgba(255, 255, 255, 0.2)',
                    color: paginaAttiva === 0 ? '#667eea' : 'white',
                }}
            >
                Home
            </button>

            {/* Bottone Pagina 1 */}
            <button
                onClick={() => onPagChangeClick(1)}
                style={{
                    fontWeight: paginaAttiva === 1 ? 'bold' : 'normal',
                    backgroundColor: paginaAttiva === 0 ? 'white' : 'rgba(255, 255, 255, 0.2)',
                    color: paginaAttiva === 0 ? '#667eea' : 'white',
                }}
            >
                Pagina 1
            </button>

            {/* Bottone Pagina 2 */}
            <button
                onClick={() => onPagChangeClick(2)}
                style={{
                    fontWeight: paginaAttiva === 1 ? 'bold' : 'normal',
                    backgroundColor: paginaAttiva === 0 ? 'white' : 'rgba(255, 255, 255, 0.2)',
                    color: paginaAttiva === 0 ? '#667eea' : 'white',
                }}
            >
                Pagina 2
            </button>

            {/* Bottone Pagina 3 */}
            <button
                onClick={() => onPagChangeClick(3)}
                style={{
                    fontWeight: paginaAttiva === 1 ? 'bold' : 'normal',
                    backgroundColor: paginaAttiva === 0 ? 'white' : 'rgba(255, 255, 255, 0.2)',
                    color: paginaAttiva === 0 ? '#667eea' : 'white',
                }}
            >
                Pagina 3
            </button>
        </div>
    );
}
export default Header;