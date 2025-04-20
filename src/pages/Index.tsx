import { Coffee, Croissant, Sandwich } from 'lucide-react'

const Index = () => {
  const menuItems = [
    {
      name: "Artisan Coffee",
      description: "Handcrafted with premium beans from local roasters",
      icon: <Coffee className="w-8 h-8 text-pink-700" />
    },
    {
      name: "Fresh Pastries",
      description: "Baked fresh daily with organic ingredients",
      icon: <Croissant className="w-8 h-8 text-pink-700" />
    },
    {
      name: "Gourmet Sandwiches",
      description: "Made with locally-sourced meats and produce",
      icon: <Sandwich className="w-8 h-8 text-pink-700" />
    }
  ]

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-pink-800 text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container h-full flex flex-col justify-center relative z-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Brew & Bites</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Where every cup tells a story and every bite is a delight
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-medium">
              View Menu
            </button>
            <button className="px-6 py-3 border-2 border-white hover:bg-white/10 rounded-lg font-medium">
              Reserve a Table
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{item.name}</h3>
              <p className="text-pink-900/70 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-pink-100">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-pink-900/80 mb-4">
              Founded in 2015, Brew & Bites began as a small coffee cart in the heart of the city. 
              Today, we've grown into a beloved neighborhood cafe known for our commitment to quality 
              and community.
            </p>
            <p className="text-pink-900/80">
              We source our ingredients from local farmers and artisans, ensuring every item on our menu 
              supports our community while delivering exceptional flavor.
            </p>
          </div>
          <div className="bg-pink-300 h-96 rounded-xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Brew & Bites</h3>
              <p className="text-pink-200">123 Coffee Street</p>
              <p className="text-pink-200">Beanville, CA 90210</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-pink-200">Mon-Fri: 7am - 7pm</p>
              <p className="text-pink-200">Sat-Sun: 8am - 5pm</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <p className="text-pink-200">hello@brewandbites.com</p>
              <p className="text-pink-200">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;