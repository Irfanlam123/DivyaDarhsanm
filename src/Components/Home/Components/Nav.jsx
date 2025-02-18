
const Nav = () => {
  const sections = [
    { id: "home", title: "Home", content: "Welcome to the Home section!" },
    {
      id: "about",
      title: "About",
      content: "This is the About section, where we describe our purpose.",
    },
    {
      id: "description",
      title: "Description",
      content: "Detailed information is available in the Description section.",
    },
    {
      id: "contact",
      title: "Contact",
      content: "Get in touch with us through the Contact section.",
    },
    {
      id: "others",
      title: "Others",
      content: "Explore more in the Others section.",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md ">
        <ul className="flex justify-center space-x-6">
          {sections.map((section) => (
            <li
              key={section.id}
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
