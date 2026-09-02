const metrics = [
  { label: "Daily one-way person trips", value: "147,132" },
  { label: "Registered vehicles", value: "138,087" },
  { label: "Average jeepney speed", value: "20 km/h" },
  { label: "Rain-related mode shift", value: "39.33%" },
];

const solutions = [
  {
    title: "Vehicle-aware predictions",
    text: "TranSync analyzes motorcycle and private vehicle behavior separately to avoid generic car-based routing errors.",
  },
  {
    title: "Live weather intelligence",
    text: "Weather, traffic density, and local disruptions are combined to adjust departure advice in real time.",
  },
  {
    title: "Probabilistic timing",
    text: "The model delivers optimistic, typical, and conservative travel scenarios based on calibrated quantile predictions.",
  },
  {
    title: "Multi-stop planning",
    text: "Users can compute arrival-focused departure times with intermediate stops and dwell times across the itinerary.",
  },
];

const architecture = [
  "Google Maps routing and traffic density",
  "Open-Meteo weather, precipitation, and visibility data",
  "XGBoost quantile regression residual correction model",
  "Retrieval-augmented advisory layer using local Lipa context",
  "Anthropic Claude-powered guidance and fallback handling",
];

const impact = [
  "Improves decision-making for students, workers, and daily commuters",
  "Reduces uncertainty during rain, road incidents, and class suspensions",
  "Creates a smart-city-ready framework for Philippine secondary cities",
  "Supports both a mobile-first web app and a native Android client",
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#1e1e1e] text-[#e5e5e5]">
      <header className="sticky top-0 z-50 border-b border-[#3e3e42] bg-[#252526]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007acc] text-lg font-bold text-white shadow-lg shadow-[#007acc]/30">
              T
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-[#f5f5f5]">TranSync</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#b5b5b5]">Predictive travel advisory</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#d4d4d4] md:flex">
            <a href="#problem" className="transition hover:text-white">Problem</a>
            <a href="#solution" className="transition hover:text-white">Solution</a>
            <a href="#system" className="transition hover:text-white">System</a>
            <a href="#impact" className="transition hover:text-white">Impact</a>
          </nav>

          <a
            href="#cta"
            className="rounded-full bg-[#007acc] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#007acc]/25 transition hover:bg-[#0a8de0]"
          >
            Explore system
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,122,204,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(62,62,66,0.3),_transparent_35%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <span className="mb-6 inline-flex w-fit items-center rounded-full border border-[#007acc]/40 bg-[#2d2d30] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8ed0ff]">
                Capstone project • Lipa City, Batangas
              </span>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Smarter departure planning for local travel realities.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#d1d5db]">
                TranSync combines traffic, weather, and local disruption data to recommend the best departure time for commuters, students, and drivers navigating Lipa City.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#solution"
                  className="rounded-full bg-[#007acc] px-6 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-[#007acc]/25 transition hover:bg-[#0a8de0]"
                >
                  See the solution
                </a>
                <a
                  href="#system"
                  className="rounded-full border border-[#3e3e42] bg-[#2d2d30] px-6 py-3 text-center text-sm font-semibold text-[#e5e5e5] transition hover:border-[#5d5d5d] hover:bg-[#3e3e42]"
                >
                  View system design
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#d1d5db]">
                <span className="rounded-full bg-[#2d2d30] px-3 py-1.5 ring-1 ring-[#3e3e42]">Live advisories</span>
                <span className="rounded-full bg-[#2d2d30] px-3 py-1.5 ring-1 ring-[#3e3e42]">Predictive ETA</span>
                <span className="rounded-full bg-[#2d2d30] px-3 py-1.5 ring-1 ring-[#3e3e42]">Multi-stop planning</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-[#3e3e42] bg-[#252526] p-5 shadow-2xl shadow-black/30">
                <div className="rounded-[1.5rem] bg-[#1e1e1e] p-5 text-white ring-1 ring-[#3e3e42]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9ca3af]">Departure planner</p>
                      <h2 className="mt-2 text-2xl font-bold text-white">Lipa City route</h2>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                      Live
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl bg-[#2d2d30] p-4 ring-1 ring-[#3e3e42]">
                      <div className="flex items-center justify-between text-sm text-[#d1d5db]">
                        <span>Recommended departure</span>
                        <span className="text-[#8ed0ff]">90% confidence</span>
                      </div>
                      <p className="mt-2 text-3xl font-bold text-[#8ed0ff]">6:42 AM</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-2xl bg-[#2d2d30] p-4 ring-1 ring-[#3e3e42]">
                        <p className="text-[#9ca3af]">ETA</p>
                        <p className="mt-2 text-xl font-semibold text-white">21 min</p>
                      </div>
                      <div className="rounded-2xl bg-[#2d2d30] p-4 ring-1 ring-[#3e3e42]">
                        <p className="text-[#9ca3af]">Weather impact</p>
                        <p className="mt-2 text-xl font-semibold text-amber-300">Moderate rain</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4 text-sm text-amber-100">
                      Advisory: Heavy rainfall and local traffic congestion may extend travel times. Consider leaving 12 minutes earlier.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-6xl px-6 pb-12 lg:px-8">
            <div className="grid gap-4 rounded-3xl border border-[#3e3e42] bg-[#252526] p-6 shadow-lg shadow-black/20 md:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl bg-[#2d2d30] p-4 text-center ring-1 ring-[#3e3e42]">
                  <p className="text-3xl font-black text-white">{metric.value}</p>
                  <p className="mt-2 text-sm text-[#d1d5db]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="problem" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ed0ff]">The problem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lipa commuters need more than a generic ETA—they need local intelligence.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#3e3e42] bg-[#252526] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9ca3af]">Urban pressure</p>
              <h3 className="mt-4 text-xl font-bold text-white">Traffic is growing faster than the road network.</h3>
              <p className="mt-3 text-[#d1d5db]">
                Lipa City sees rising commuter demand and heavy congestion across key corridors, especially during peak hours and severe weather.
              </p>
            </div>

            <div className="rounded-3xl border border-[#3e3e42] bg-[#252526] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9ca3af]">Weather risk</p>
              <h3 className="mt-4 text-xl font-bold text-white">Rain alters speed, reliability, and safety.</h3>
              <p className="mt-3 text-[#d1d5db]">
                Heavy tropical rainfall can slow vehicles and increase unpredictability, making conventional travel estimates unreliable.
              </p>
            </div>

            <div className="rounded-3xl border border-[#3e3e42] bg-[#252526] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9ca3af]">Local context</p>
              <h3 className="mt-4 text-xl font-bold text-white">Sudden disruptions are not captured by generic apps.</h3>
              <p className="mt-3 text-[#d1d5db]">
                Class suspensions, market days, road incidents, and local events all influence trip timing in ways standard navigation tools ignore.
              </p>
            </div>
          </div>
        </section>

        <section id="solution" className="bg-[#2d2d30] py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ed0ff]">The solution</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A localized intelligent system built around Lipa City’s actual travel conditions.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {solutions.map((item) => (
                <div key={item.title} className="rounded-3xl border border-[#3e3e42] bg-[#1e1e1e] p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#007acc] font-bold text-white shadow-lg shadow-[#007acc]/30">
                    {item.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#d1d5db]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="system" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ed0ff]">System architecture</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A hybrid model pairing trusted routing with predictive intelligence and contextual guidance.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-[#3e3e42] bg-[#252526] p-6 shadow-sm">
              <div className="space-y-4">
                {architecture.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl bg-[#2d2d30] p-4 ring-1 ring-[#3e3e42]">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#007acc] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-[#d1d5db]">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#3e3e42] bg-gradient-to-br from-[#1e1e1e] via-[#2d2d30] to-[#252526] p-6 text-white shadow-xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ed0ff]">Key design</p>
              <h3 className="mt-4 text-2xl font-bold text-white">Deterministic routing + predictive correction + advisory intelligence</h3>
              <p className="mt-4 text-[#d1d5db]">
                The system starts with Google Maps Platform baseline estimates, adds an XGBoost residual model for route-specific corrections, and then interprets results through a retrieval-augmented LLM advisory layer for human-readable guidance.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#2d2d30] p-4 ring-1 ring-[#3e3e42]">
                  <p className="text-sm text-[#9ca3af]">Modeling approach</p>
                  <p className="mt-2 text-xl font-bold text-white">XGBoost quantile regression</p>
                </div>
                <div className="rounded-2xl bg-[#2d2d30] p-4 ring-1 ring-[#3e3e42]">
                  <p className="text-sm text-[#9ca3af]">Advisory layer</p>
                  <p className="mt-2 text-xl font-bold text-white">Claude Sonnet 4.6</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="bg-[#1e1e1e] py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ed0ff]">Impact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built to improve commuter planning and support smarter mobility decisions in a growing city.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {impact.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-3xl border border-[#3e3e42] bg-[#252526] p-6 shadow-sm">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#007acc]/20 text-lg text-[#8ed0ff]">✓</div>
                  <p className="text-lg font-medium text-[#f3f4f6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#007acc] via-[#0a8de0] to-[#2d2d30] p-[1px] shadow-2xl shadow-[#007acc]/20">
            <div className="rounded-[calc(2rem-1px)] bg-[#1e1e1e] px-8 py-10 text-white md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8ed0ff]">TranSync</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white">A predictive travel system for a resilient commute.</h2>
              </div>
              <a
                href="#top"
                className="mt-6 inline-flex rounded-full bg-[#007acc] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a8de0] md:mt-0"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#3e3e42] bg-[#252526]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[#d1d5db] md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 TranSync</p>
          <p>Capstone project for predictive departure planning in Lipa City</p>
        </div>
      </footer>
    </div>
  );
}
