import React from 'react';

const Navigation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div>
      <h1>Navigation</h1>
      <form onSubmit={handleSubmit}>
        {/* Formulario */}
      </form>
    </div>
  );
};

export default Navigation;
