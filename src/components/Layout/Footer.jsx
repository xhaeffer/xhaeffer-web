const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="py-8 bg-[#181818] text-center text-white">
      <p>© {year} - Sube</p>
      <p>Build with ❤ & ☕</p>
    </div>
  );
};

export default Footer;
