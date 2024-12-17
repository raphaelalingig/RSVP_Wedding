import React from "react";
import Background from "../Background";

export default function SecondSection() {
  return (
    <Background>
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
        {/* Main Container */}
        <div className="bg-opacity-90 text-white p-6 md:p-12 rounded-lg shadow-lg w-full max-w-5xl">
          {/* Parents Section */}
          <div data-aos="zoom-in" className="text-center mb-8">
            <h1 className="font-aniyah text-4xl font-bold text-yellow-400">
              Parents
            </h1>
            <p className="mt-2 flex flex-row justify-center gap-5">
              <span className="block">Renario L. Daňas & Elisa T. Daňas</span>
              <span className="block">
                Gregorio Jr. D. Layson & Elizabeth G. Layson
              </span>
            </p>
          </div>

          {/* Entourage Section */}
          <div data-aos="zoom-in" className="text-center mb-10">
            <h2 className="font-aniyah text-3xl font-bold text-yellow-400 mb-4">
              Entourage List
            </h2>

            {/* Principal Sponsors */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-yellow-300">
                Principal Sponsors
              </h3>
              <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
                <div>
                  <p>Mr. Elvi Bugaoan</p>
                  <p>Mr. Mark Alfonso S. Del Fierro</p>
                  <p>Mr. Eduardo E. Acuña</p>
                  <p>Mr. Michael V. Leuterio</p>
                  <p>Mr. Antonino Alinig</p>
                </div>
                <div>
                  <p>Mrs. Venus Bugaoan</p>
                  <p>Mrs. Janice Del Fierro</p>
                  <p>Mrs. Laura O. Acuña</p>
                  <p>Mrs. Jenith V. Abejuela</p>
                  <p>Mrs. Lilibeth G. Alinig</p>
                </div>
              </div>
            </div>

            {/* Best Man & Maid of Honor */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">
                  Best Man
                </h3>
                <p>Rey Maurice T. Gutierez</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">
                  Maid of Honor
                </h3>
                <p>Marichu T. Paler</p>
              </div>
            </div>

            {/* Groomsmen & Bridesmaids */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">
                  Groomsmen
                </h3>
                <ul className="list-disc list-inside text-white">
                  <p>Rafael T. Daňas</p>
                  <p>Elrey T. Daňas</p>
                  <p>Jun Mark A. Sumaylo</p>
                  <p>John Ralph Balagot</p>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">
                  Bridesmaids
                </h3>
                <ul className="list-disc list-inside text-white">
                  <p>Mary Rose B. Tejada</p>
                  <p>Angelie Ortiz</p>
                  <p>Marielle Jane F. Cabahug</p>
                  <p>Jannen Kay Pongos</p>
                </ul>
              </div>
            </div>

            {/* Candle, Veil, and Cord */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">
                  Candle
                </h3>
                <p>Gary Vic Monton</p>
                <p>Christine Paula Villano</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">Veil</h3>
                <p>Carlo Pfel O. Acuña</p>
                <p>Lalaine L. Acuña</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">Cord</h3>
                <p>Randy T. Daňas</p>
                <p>Shanna Grace J. Daňas</p>
              </div>
            </div>

            {/* Bearers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">
                  Ring Bearer
                </h3>
                <p>Markus Alastair O. Jabson</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">
                  Coin Bearer
                </h3>
                <p>Rance Dylan J. Daňas</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300">
                  Bible Bearer
                </h3>
                <p>John Adrian G. Generoso</p>
              </div>
            </div>

            {/* Flower Girls */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-yellow-300">
                Flower Girls
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <ul className="list-disc list-inside text-white">
                  <p>Chessa Hailey A. Rodriguez</p>
                  <p>Marianne Chelley M. Patusac</p>
                </ul>
                <ul className="list-disc list-inside text-white">
                  <p>Sofia Mary D. Mejos</p>
                  <p>Caroline Marie L. Acuña</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
