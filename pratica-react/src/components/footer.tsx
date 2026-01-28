function Footer() {

    return (
        <div style={{
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',

            position: 'fixed',      // ← Fisso
            bottom: 0,              // ← In basso
            left: 0,                // ← Da sinistra
            right: 0,               // ← Fino a destra
        }}>
            <p style={{
                margin: 0,
                color: '#666',
                fontSize: '14px'
            }}>
                Questo è il footer
            </p>
        </div>
    );
}

export default Footer;