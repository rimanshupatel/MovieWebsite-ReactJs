const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#212121" }}>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop by Category</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-red-400 hover:pl-1 ">
                  hollywood
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 hover:pl-1 ">
                  bollywood
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 hover:pl-1 ">
                  hindi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 hover:pl-1 ">
                  Dual audio
                </a>
              </li>
              {/* Add more categories */}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Accepted Payment Methods
            </h4>
            <div className="flex items-center space-x-4">
              <img src="/images/visa.png" alt="Visa" className="h-6" />
              <img
                src="/images/mastercard.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="/images/creditcard.png"
                alt="Credit Card"
                className="h-6"
              />
              {/* Add more payment method logos */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              {/* Add more links */}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-500 mt-8 pt-4 text-sm text-center">
          &copy; 2024 Created by Rimanshu Patel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
