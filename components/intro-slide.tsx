import MicrobladingSlider from "./microblading-slider"

export default function IntroSlide() {
  return (
    <div className="min-h-screen p-8 pt-0" style={{ backgroundColor: "#ded8fd" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Interactive slider */}
        <div className="flex flex-col justify-center">
          <div className="w-full max-w-lg mx-auto">
            <MicrobladingSlider />
          </div>
        </div>

        {/* Right side - Course content */}
        <div className="text-slate-800 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Extension de Cils
            <br />
            <span className="text-slate-900">Professionnelles</span>
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Regardez cette transformation : de cils naturels à des extensions volume spectaculaires qui révèlent toute
              l'intensité du regard.
            </p>

            <p>
              Les extensions de cils professionnelles permettent d'obtenir un regard dramatique et naturel à la fois,
              avec des techniques adaptées à chaque forme d'œil et style souhaité.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Dans ce module, vous allez apprendre à :</h2>

            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  Maîtriser les 3 techniques principales (Cils naturels un-à-un Technique Classique, Technique Volume 3D/hybride, Volume Russe)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Découvrir 2 techniques avancées supplémentaires (œil de biche, œil ouvert)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Réaliser la cartographie de l'œil et choisir la technique adaptée</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Appliquer le protocole de pose en 17 étapes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>Respecter les contre-indications et conseils d'entretien</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
