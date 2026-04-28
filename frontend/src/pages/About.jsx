import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  const values = [
    {
      title: "Quality Craftsmanship",
      description: "Every piece is meticulously crafted with attention to detail and premium materials.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Sustainable Fashion",
      description: "Committed to environmentally conscious practices and ethical sourcing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Timeless Design",
      description: "Creating pieces that transcend seasons and trends with enduring style.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop"
    },
    {
      name: "James Chen",
      role: "Head Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      role: "Brand Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-deep-blue to-sky-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Nile Fashion
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Where timeless elegance meets contemporary blue fashion
          </p>
        </div>
      </div>

      {/* Our Story */}
      <SectionWrapper 
        title="Our Journey"
        subtitle="From inspiration to innovation"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2020, Nile Fashion emerged from a simple yet powerful idea: 
              to create a fashion brand that celebrates the color blue in all its magnificent shades. 
              Our founder, inspired by the timeless beauty of the Nile River, envisioned a collection 
              that would bring the same sense of tranquility and confidence to modern fashion.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What started as a small boutique in New York has grown into a global brand, 
              serving customers in over 50 countries. Our commitment to quality, sustainability, 
              and timeless design remains at the heart of everything we do.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-deep-blue mb-2">2020</div>
                <div className="text-gray-600">Year Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-blue mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
              alt="Nile Fashion Journey"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Our Values */}
      <SectionWrapper 
        title="Our Values"
        subtitle="The principles that guide us"
        className="bg-soft-blue"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
              <div className="text-sky-blue mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-deep-blue mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Our Team */}
      <SectionWrapper 
        title="Meet Our Team"
        subtitle="The creative minds behind Nile Fashion"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-deep-blue mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Mission Statement */}
      <SectionWrapper className="bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            To inspire confidence and elegance through exceptional blue fashion, 
            creating timeless pieces that empower individuals to express their unique style 
            while honoring our commitment to quality and sustainability.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
