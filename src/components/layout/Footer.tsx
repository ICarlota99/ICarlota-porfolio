import GithubIcon from '@/assets/icons/github.svg?react';
import LinkedinIcon from '@/assets/icons/linkedin.svg?react';
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className=" bg-gray-950 border-t border-gray-800 relative text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600
              bg-clip-text text-white"
            >
              <span className="text-purple-400">{"{"}</span>
              <span className="text-amber-300 mx-1">"dev"</span>
              <span className="text-gray-400">: </span>
              <span className="text-emerald-400">"Carlota"</span>
              <span className="text-purple-400">{"}"}</span>
            </a>
            <p className="mt-4 text-gray-400">
              Passionate about creating dynamic websites and applications with modern technology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {
                [
                  "Home",
                  "About",
                  "Projects",
                  "Skills",
                  "Testimonials",
                  "Resume",
                  "Contact"
                ]
                  .map((item) => (
                    <li key={ item }>
                      <a
                        href={ `#${item.toLowerCase()}` }
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        { item }
                      </a>
                    </li>
                  )) }
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              { [ "Web Development" ].map((item) => (
                <li key={ item }>
                  <p
                    className="text-gray-400"
                  >
                    { item }
                  </p>
                </li>
              )) }
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 hover:text-blue-400 hover:cursor-pointer transition-colors">
                <Mail className="h-4 w-4 mr-2" /> k431999@gmail.com
              </li>
              <li className="flex items-center text-gray-400 hover:text-blue-400 hover:cursor-pointer transition-colors">
                <GithubIcon className="h-4 w-4 mr-2" /> github.com/icarlota99
              </li>
              <li className="flex items-center text-gray-400 hover:text-blue-400 hover:cursor-pointer transition-colors">
                <LinkedinIcon className="h-4 w-4 mr-2" /> linkedin.com/in/icarlota99
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 dark:text-gray-400 text-sm">
            Made with love by © { new Date().getFullYear() } ICarlota. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
