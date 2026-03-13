import React from "react";

const directions = [
  {
    title: "\uD83C\uDF10 \u958B\u59CB\u505A\u81EA\u5DF1\u7684\u7DB2\u7AD9",
    desc: "\u7528\u81EA\u5DF1\u7684\u60F3\u6CD5\u3001\u6587\u5B57\u3001\u5716\u7247\uFF0C\u548C AI \u4E00\u6B65\u4E00\u6B65\u4E92\u52D5",
  },
  {
    title: "\uD83E\uDD16 \u9AD4\u9A57 AI \u5354\u4F5C\u5EFA\u7AD9",
    desc: "\u5F9E\u63CF\u8FF0\u9700\u6C42\uFF0C\u5230\u9010\u6B65\u7522\u751F\u6210\u679C\u7684\u904E\u7A0B",
  },
  {
    title: "\uD83C\uDFD7\uFE0F \u50CF\u5EFA\u7BC9\u5E2B\u4E00\u6A23\u5F15\u5C0E AI",
    desc: "\u9019\u4E0D\u662F\u4E00\u6B21\u5C0D\u8A71\u5C31\u5B8C\u6210\uFF0C\u800C\u662F\u4E00\u6B65\u4E00\u6B65\u63A8\u9032\u7684\u4E92\u52D5\u5F0F\u904E\u7A0B",
  },
  {
    title: "\uD83E\uDD1D \u4EA4\u6D41\u8207\u5206\u4EAB",
    desc: "\u6709\u53C3\u8207\u5BE6\u4F5C\u7684\u6703\u54E1\uFF0C\u5F9E\u300C\u4E3B\u89D2\u8996\u89D2\u300D\u5206\u4EAB\u904E\u7A0B\u8207\u5FC3\u5F97",
  },
];

const prepSteps = [
  { label: "Email", desc: "\u672C\u6B21\u8981\u4F7F\u7528\u7684 Email" },
  { label: "GitHub", desc: "GitHub \u5E33\u865F\uFF08\u82E5\u5DF2\u6709\uFF09" },
  { label: "Discord", desc: "Discord Username\uFF08\u82E5\u5DF2\u6709\uFF09" },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <nav className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-indigo-400">AI</span> Innovator
          </span>
          <a
            href="#signup"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-lg text-sm font-medium"
          >
            \u5831\u540D\u53C3\u52A0
          </a>
        </nav>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-28 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium">
            \u9032\u968E\u5206\u6703 - \u4E2D\u90E8
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Keynote Speech
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              \u4F8B\u6703\u5BE6\u4F5C\u516C\u544A
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            \u5F9E\u73FE\u5728\u5230\u4F8B\u6703\u524D\uFF0C\u5927\u5BB6\u5982\u4F55\u5BE6\u969B\u52D5\u624B\u505A\u51FA\u81EA\u5DF1\u7684\u7DB2\u7AD9\u3002
            <br />
            \u4E0D\u53EA\u662F\u807D\u6982\u5FF5\uFF0C\u800C\u662F\u771F\u7684\u8B93\u6709\u8208\u8DA3\u7684\u6703\u54E1\uFF0C\u958B\u59CB\u9AD4\u9A57\u900F\u904E AI \u8207\u73FE\u6210\u74B0\u5883\uFF0C\u4E00\u6B65\u4E00\u6B65\u505A\u51FA\u5C6C\u65BC\u81EA\u5DF1\u7684\u7DB2\u7AD9\u3002
          </p>
        </div>
      </header>

      {/* Activity Directions */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">\u6D3B\u52D5\u65B9\u5411</h2>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
          \u53C3\u8207\u7684\u6703\u54E1\uFF0C\u5C07\u6709\u6A5F\u6703\u9AD4\u9A57\u4EE5\u4E0B\u5167\u5BB9
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {directions.map((d) => (
            <div
              key={d.title}
              className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-indigo-500/40 hover:bg-white/[0.07] transition"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition">
                {d.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">\u53C3\u8207\u524D\u7684\u6E96\u5099</h2>
        <p className="text-slate-400 text-center mb-12 max-w-lg mx-auto">
          \u6709\u8208\u8DA3\u53C3\u8207\u5BE6\u4F5C\u7684\u6703\u54E1\uFF0C\u8ACB\u5148\u63D0\u4F9B\u4EE5\u4E0B\u8CC7\u8A0A
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {prepSteps.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:border-indigo-500/40 transition"
            >
              <h3 className="text-indigo-400 text-2xl font-bold mb-2">
                {s.label}
              </h3>
              <p className="text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-slate-300 leading-relaxed">
            \u5982\u679C\u4F60\u76EE\u524D\u9084\u6C92\u6709 GitHub \u6216 Discord\uFF0C\u5EFA\u8B70\u8DA3\u9019\u500B\u6A5F\u6703\u5148\u7533\u8ACB\u9019\u5169\u500B\u514D\u8CBB\u5E33\u865F\uFF0C\u4E26\u5148\u7A0D\u5FAE\u719F\u6089\u4E00\u4E0B\u57FA\u672C\u64CD\u4F5C\u3002\u9019\u6A23\u5230\u6642\u5019\u9032\u884C\u6703\u9806\u5F88\u591A\u3002
          </p>
        </div>
      </section>

      {/* Why Discord Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">\u70BA\u4EC0\u9EBC\u6539\u7528 Discord\uFF1F</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">{"\uD83D\uDCAC"}</div>
            <p className="text-slate-300">\u907F\u514D LINE \u8A0A\u606F\u904E\u5EA6\u983B\u7E41</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">{"\uD83D\uDCBE"}</div>
            <p className="text-slate-300">\u5716\u7247\u8207\u5F71\u50CF\u8CC7\u6599\u66F4\u5BB9\u6613\u9577\u671F\u4FDD\u5B58</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">{"\uD83D\uDCCB"}</div>
            <p className="text-slate-300">\u7D30\u7BC0\u8A0E\u8AD6\u66F4\u5BB9\u6613\u6574\u7406\u8207\u8FFD\u8E64</p>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://discord.gg/3rydDZaY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold px-8 py-3 rounded-xl transition text-lg"
          >
            \u52A0\u5165 Discord \u983B\u9053
          </a>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">\u5831\u540D\u63A5\u9F8D</h2>
          <p className="text-lg text-indigo-100 mb-4 max-w-lg mx-auto">
            \u8ACB\u6709\u8208\u8DA3\u53C3\u8207\u7684\u6703\u54E1\uFF0C\u4F9D\u4E0B\u5217\u683C\u5F0F\u63A5\u9F8D\uFF1A
          </p>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-6 max-w-md mx-auto text-left">
            <code className="text-indigo-100 text-sm">
              \u59D3\u540D, Email, [GitHub \u5E33\u865F], [Discord Username]
            </code>
            <br />
            <span className="text-indigo-200 text-sm mt-2 block">
              \u7BC4\u4F8B\uFF1A1. Mark, mark@aipm.com.tw, [aipmtw], [twcloud]
            </span>
          </div>
          <a
            href="https://github.com/aipmtw/ai-innovator/edit/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition"
          >
            \u524D\u5F80 GitHub \u5831\u540D
          </a>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-6 text-center">\u60F3\u5C0D\u7B2C\u4E00\u6B21\u63A5\u89F8\u7684\u6703\u54E1\u8AAA</h2>
          <div className="text-slate-300 leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              \u5982\u679C\u4F60\u4E4B\u524D\u6C92\u6709\u63A5\u89F8\u904E GitHub\u3001Discord\uFF0C\u6216\u4E5F\u9084\u6C92\u771F\u6B63\u7528 AI \u4F86\u505A\u7DB2\u7AD9\uFF0C\u525B\u958B\u59CB\u770B\u5230\u9019\u4E9B\u8CC7\u8A0A\uFF0C\u53EF\u80FD\u6703\u89BA\u5F97\u6709\u9EDE\u591A\uFF0C\u9019\u5F88\u6B63\u5E38\u3002
            </p>
            <p>
              \u4F46\u53EA\u8981\u5148\u628A\u6E96\u5099\u5DE5\u4F5C\u505A\u597D\uFF0C\u4F60\u5C31\u53EF\u4EE5\u958B\u59CB\u9032\u5165\u6709\u8DA3\u7684\u90E8\u5206\uFF1A
            </p>
            <p className="text-xl font-semibold text-indigo-300 text-center py-2">
              \u76F4\u63A5\u7528\u4F60\u7684\u63CF\u8FF0\uFF08\u6587\u5B57\u3001\u5716\u7247\u3001\u60F3\u6CD5\uFF09\uFF0C\u8B93 AI \u5354\u52A9\u4F60\u5EFA\u7ACB\u81EA\u5DF1\u7684\u7DB2\u7AD9\u3002
            </p>
            <p>
              \u9019\u6703\u662F\u4E00\u6BB5\u4E92\u52D5\u5F0F\u7684\u904E\u7A0B\uFF0C\u4E0D\u662F\u55AE\u6B21\u5B8C\u6210\uFF0C\u800C\u662F\u4E00\u6B65\u4E00\u6B65\u63A8\u9032\u3002
              \u4F60\u4E5F\u53EF\u4EE5\u628A\u9019\u6B21\u4F8B\u6703\uFF0C\u7576\u6210\u4E00\u500B\u5F88\u597D\u7684\u8D77\u9EDE\uFF0C\u85C9\u7531\u5927\u5BB6\u4EA4\u6D41\uFF0C\u4E00\u8D77\u958B\u59CB\u7DF4\u7FD2\u3002
            </p>
            <p className="text-slate-400 text-sm pt-4 text-center">
              \u4E5F\u6B61\u8FCE\u81EA\u884C\u5728\u5176\u4ED6\u5E73\u53F0\u7DF4\u7FD2\uFF0C\u9019\u6B21\u4F8B\u6703\u63D0\u4F9B\u7684\u662F\u4E00\u500B\u9AD4\u9A57\u8207\u4EA4\u6D41\u7684\u6A5F\u6703\u3002
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        &copy; 2026 AI Innovator \u9032\u968E\u5206\u6703 - \u4E2D\u90E8. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
