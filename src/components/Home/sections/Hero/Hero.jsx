import fondoFormulas from '../../../../assets/hero/fondo-formulas.png'
import persona from '../../../../assets/hero/persona.jpg'

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-800 group">
      {/* Imagen de la persona - como fondo */}
      <img
        src={persona}
        alt="Persona"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full object-contain z-0 transition-all duration-300 group-hover:blur-sm"
      />

      {/* Imagen de las fórmulas - por encima */}
      <img
        src={fondoFormulas}
        alt="Fondo fórmulas"
        className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-50 transition-all duration-300 group-hover:blur-sm"
      />

      {/* Contenido del texto con efecto */}
      <div className="relative z-20 h-full w-full flex items-center justify-center">
        <div className="group text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold transition-all duration-500 scale-0 transform group-hover:scale-105 group-hover:opacity-100 opacity-80">
            Hello, I'm Valentina Dimitrova, Ph.D.
          </h1>
        </div>
      </div>
    </section>
  );
}