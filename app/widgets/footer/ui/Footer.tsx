import { Logo } from "../../../shared/ui/Logo";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <Logo />
              <span className="text-xl font-bold text-gray-800">
                СЕВЕРЯНОЧКА
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                О компании
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Контакты
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Вакансии
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Статьи
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Политика обработки персональных данных
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.908-1.49.402v1.608c0 .432-.138.69-1.276.69-1.815 0-3.834-.110-5.905-2.196-2.147-2.168-4.087-6.482-4.087-6.482s-.288-.724.022-1.077c.356-.405.94-.434.94-.434l2.027-.02c.192 0 .324.09.418.31 0 0 .49 1.23 1.144 2.305 1.304 2.157 1.856 2.433 2.288 2.433.558 0 .81-.256.81-1.664V8.422c-.073-1.183-.703-1.284-.703-1.706 0-.32.26-.628.687-.628h2.712c.578 0 .789.297.789.938v3.964c0 .577.258.789.42.789.558 0 1.02-.256 2.054-1.298.616-.625 1.099-1.618 1.099-1.618s.205-.401.516-.469c.318-.067.667.02.667.02l2.138-.02s1.284-.16.667 1.084c-.068.14-.484 1.233-2.28 3.154-1.707 1.825-1.9 1.58-.464 2.588 1.379 1.147 1.66 1.715 1.695 1.771.375.724-.42.772-.42.772z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c1.988 0 3.6 1.612 3.6 3.6S13.988 12 12 12s-3.6-1.612-3.6-3.6S10.012 4.8 12 4.8zm0 14.4c-2.985 0-5.4-2.415-5.4-5.4 0-.597.097-1.17.276-1.704l1.44 1.44c-.072.264-.116.54-.116.824 0 1.767 1.433 3.2 3.2 3.2s3.2-1.433 3.2-3.2c0-.284-.044-.56-.116-.824l1.44-1.44c.179.534.276 1.107.276 1.704 0 2.985-2.415 5.4-5.4 5.4z" />
                </svg>
              </a>
            </div>

            <div className="flex items-center space-x-2 text-gray-700">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium">8 800 777 33 33</span>
            </div>

            <div className="text-sm text-gray-500 hidden lg:block">
              Дизайн: <span className="font-medium">ZASOZKIY</span>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <nav className="flex flex-wrap gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
            >
              О компании
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
            >
              Контакты
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
            >
              Вакансии
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
            >
              Статьи
            </a>
          </nav>
          <div className="mt-2">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
            >
              Политика обработки персональных данных
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
