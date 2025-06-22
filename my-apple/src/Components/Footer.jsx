function Footer() {
  const footerLinks = [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
    },
    {
      title: "Apple Wallet",
      links: ["Wallet","Mac","Apple","One"],
    },
    {
      title: "Account",
      links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
    },
    {
      title: "Entertainment",
      links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"],
    },
    {
      title: "Apple Store",
      links: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme", "Order Status", "Shopping Help"],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "For Education",
      links: ["Apple and Education", "Shop for Education", "Shop for University"],
    },
    {
      title: "For Healthcare",
      links: ["Apple in Healthcare", "Mac in Healthcare", "Health on Apple Watch"],
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain Innovation"],
    },
    {
      title: "About Apple",
      links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
    },
  ];

  return (
    <footer className="bg-gray-100 mt-10 px-4 md:px-16 py-10 text-xs text-gray-700 border-t border-gray-300">
        <p className="mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis veniam rerum harum sapiente, atque unde fugit mollitia tenetur minus aliquam cumque velit, asperiores, incidunt eligendi est quas. Facere amet labore natus alias, laborum obcaecati corporis quasi repellendus libero ducimus. Delectus accusantium quaerat nisi repellat. Beatae dolore quo nemo quibusdam eligendi cupiditate dolor voluptatem doloribus cum voluptatum modi deleniti incidunt, vitae ullam sint omnis expedita eum excepturi numquam nesciunt libero? Corporis ipsum numquam natus suscipit enim iste modi necessitatibus, porro autem amet cumque ipsam accusantium odit quisquam quod animi inventore similique tempore est ipsa vel? Nobis tempore atque maiores asperiores?</p> <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

        {footerLinks.map((section, i) => (
          <div key={i}>
            <h3 className="font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-[11px] text-gray-500">
        <p>
          More ways to shop: <span className="text-blue-600 underline cursor-pointer">Find an Apple Store</span> or <span className="text-blue-600 underline cursor-pointer">other retailer</span> near you. Or call <span className="text-blue-600">000800 040 1966</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
