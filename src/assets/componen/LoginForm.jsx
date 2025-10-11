// src/components/LoginForm.tsx
/*import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica de autenticación
    const success = await authenticateUser(credentials);

    if (success) {
      // Navegar programáticamente
      navigate('/dashboard');
    } else {
      // Navegar con reemplazo (no agrega al historial)
      navigate('/login?error=invalid', { replace: true });
    }
  };

  return <form onSubmit={handleSubmit}>{/* Formulario de login }</form>;
}

export default LoginForm;*/