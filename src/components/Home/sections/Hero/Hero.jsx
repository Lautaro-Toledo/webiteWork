import fondoFormulas from '../../../../assets/hero/fondo-formulas.png'

export const Hero = ({img}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-800">
      {/* Imagen de la persona - como fondo */}
      <img
        src={img}
        alt="Persona"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full object-contain z-0 transition-all duration-300"
      />

      {/* Imagen de las fórmulas - por encima */}
      <img
        src={fondoFormulas}
        alt="Fondo fórmulas"
        className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-20 transition-all duration-300"
      />
    </section>
  );
}