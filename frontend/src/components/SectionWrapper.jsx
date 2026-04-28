const SectionWrapper = ({ children, title, subtitle, className = '' }) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue mb-4 animate-fade-in">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
