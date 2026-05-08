/*
  Filosofia visual: Luxury Cyberglass para Acessa Paraguaçu.
  Esta página deve parecer uma plataforma SaaS/app premium: fundo escuro, vidro translúcido,
  detalhes em vermelho, amarelo e verde, camadas tecnológicas e interações fluidas.
*/
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  Building2,
  ChevronRight,
  CircuitBoard,
  Gem,
  Heart,
  LayoutDashboard,
  LockKeyhole,
  MapPin,
  Menu,
  MonitorSmartphone,
  PanelRight,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  UserRound,
  WalletCards,
  Wifi,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const logoUrl = "/manus-storage/acessa-logo_39d2621d.jpeg";
const heroUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663640088502/XoAN92CsveT4fgL5mp3Xmi/acessa-hero-cyberglass-kaq5MNHrpjEMnMWGSh67Fw.webp";
const mapUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663640088502/XoAN92CsveT4fgL5mp3Xmi/acessa-city-map-VER7qyVbvirpQTTDzt2ue3.webp";
const appUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663640088502/XoAN92CsveT4fgL5mp3Xmi/acessa-app-mockup-mnEEFyPfwaM8pevMoVh3kU.webp";
const networkUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663640088502/XoAN92CsveT4fgL5mp3Xmi/acessa-store-network-3CqgA8HqzEFPyqH7wUFQZt.webp";

const categories = [
  { name: "Roupas", icon: ShoppingBag, tone: "from-red-500/35 to-red-500/5", count: "38 lojas" },
  { name: "Eletrônicos", icon: MonitorSmartphone, tone: "from-yellow-400/35 to-yellow-400/5", count: "21 lojas" },
  { name: "Alimentação", icon: Store, tone: "from-green-400/35 to-green-400/5", count: "44 opções" },
  { name: "Beleza", icon: Sparkles, tone: "from-red-400/30 to-yellow-400/10", count: "26 espaços" },
  { name: "Serviços", icon: BadgeCheck, tone: "from-green-400/30 to-red-400/10", count: "57 perfis" },
];

const stores = [
  { name: "Vitrine Paraguaçu", type: "Moda e estilo", rating: "4.9", color: "#ef4444", tag: "Entrega rápida" },
  { name: "Conecta Tech", type: "Eletrônicos", rating: "4.8", color: "#facc15", tag: "Pix e cartão" },
  { name: "Sabor da Cidade", type: "Alimentação", rating: "5.0", color: "#22c55e", tag: "Mais vendido" },
  { name: "Bella Prime", type: "Beleza", rating: "4.7", color: "#f97316", tag: "Agenda online" },
];

const benefits = [
  {
    title: "Divulgação local inteligente",
    description: "Mais visibilidade para lojas físicas com vitrines digitais, destaque por categoria e presença contínua no marketplace.",
    icon: BellRing,
  },
  {
    title: "Vendas online sem fricção",
    description: "Uma experiência pensada para busca, carrinho, avaliações e compra, aproximando o cliente do comércio da cidade.",
    icon: ShoppingCart,
  },
  {
    title: "Conexão entre clientes e lojas",
    description: "Perfis comerciais, rotas, contato, reputação e descoberta local reunidos em uma interface moderna de app.",
    icon: Wifi,
  },
  {
    title: "Marketplace regional escalável",
    description: "Base visual e estrutural preparada para crescer como uma plataforma tecnológica regional confiável.",
    icon: TrendingUp,
  },
];

const adminModules = ["Produtos", "Pedidos", "Avaliações", "Financeiro", "Cupons", "Relatórios"];

function notify(feature: string) {
  toast(`${feature} em demonstração`, {
    description: "Este protótipo apresenta a experiência visual. A função pode ser conectada ao backend em uma próxima etapa.",
  });
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="aurora-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/80">
      <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.9)]" />
      {children}
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 grid-glow opacity-50" />
      <div className="pointer-events-none fixed left-1/2 top-0 z-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 z-0 h-[34rem] w-[34rem] rounded-full bg-green-500/10 blur-[130px]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05080f]/68 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between gap-5">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Acessa Paraguaçu">
            <img src={logoUrl} alt="Logo Acessa Paraguaçu" className="h-11 w-11 rounded-2xl object-cover shadow-[0_0_35px_rgba(245,198,69,0.25)]" />
            <div className="leading-tight">
              <p className="font-[Sora] text-sm font-extrabold uppercase tracking-[0.2em]">Acessa</p>
              <p className="text-xs font-semibold text-white/55">Paraguaçu Marketplace</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/65 lg:flex">
            <a className="transition hover:text-white" href="#lojas">Lojas</a>
            <a className="transition hover:text-white" href="#beneficios">Benefícios</a>
            <a className="transition hover:text-white" href="#tecnologia">Tecnologia</a>
            <a className="transition hover:text-white" href="#lojistas">Painel lojista</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={() => notify("Busca inteligente")} className="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl transition hover:scale-105 hover:border-white/25" aria-label="Buscar">
              <Search className="h-4 w-4" />
            </button>
            <button onClick={() => notify("Carrinho") } className="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl transition hover:scale-105 hover:border-white/25" aria-label="Carrinho">
              <ShoppingCart className="h-4 w-4" />
            </button>
            <Button onClick={() => notify("Login e cadastro")} className="scan-shine relative overflow-hidden rounded-2xl bg-white px-5 py-6 font-bold text-[#05080f] shadow-[0_0_35px_rgba(255,255,255,0.16)] hover:bg-yellow-100">
              Login / Cadastro
            </Button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl lg:hidden" aria-label="Abrir menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="container pb-5 lg:hidden">
            <div className="glass-panel rounded-3xl p-4 text-sm font-semibold text-white/75">
              <a onClick={() => setMobileOpen(false)} className="block rounded-2xl px-4 py-3 hover:bg-white/10" href="#lojas">Lojas</a>
              <a onClick={() => setMobileOpen(false)} className="block rounded-2xl px-4 py-3 hover:bg-white/10" href="#beneficios">Benefícios</a>
              <a onClick={() => setMobileOpen(false)} className="block rounded-2xl px-4 py-3 hover:bg-white/10" href="#tecnologia">Tecnologia</a>
              <button onClick={() => notify("Login e cadastro")} className="mt-2 w-full rounded-2xl bg-white px-4 py-3 font-bold text-[#05080f]">Entrar agora</button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="inicio" className="relative min-h-screen overflow-hidden pt-28">
          <img src={heroUrl} alt="Fundo tecnológico premium do marketplace Acessa Paraguaçu" className="absolute inset-0 h-full w-full object-cover opacity-42" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080f] via-[#05080f]/82 to-[#05080f]/25" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#05080f] to-transparent" />

          <div className="container relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.03fr_0.97fr]">
            <div className="max-w-3xl">
              <SectionLabel>Marketplace local premium</SectionLabel>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <img src={logoUrl} alt="Logo AP Acessa Paraguaçu" className="h-24 w-24 rounded-[2rem] object-cover shadow-[0_0_80px_rgba(245,198,69,0.28)] ring-1 ring-white/15 md:h-32 md:w-32" />
                <div className="glass-panel luxury-border rounded-[2rem] px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Startup de comércio regional</p>
                  <p className="mt-2 font-[Sora] text-2xl font-extrabold">Acessa Paraguaçu</p>
                </div>
              </div>

              <h1 className="mt-9 max-w-4xl text-5xl font-extrabold leading-[0.96] md:text-7xl xl:text-8xl">
                <span className="text-gradient-brand">Unindo nosso comércio</span> em um só lugar
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                Uma plataforma digital para conectar lojas físicas, clientes e serviços locais de Paraguaçu em uma experiência online com busca, carrinho, avaliações e painel para lojistas.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button onClick={() => notify("Explorar marketplace")} className="scan-shine relative h-14 overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 px-7 font-extrabold text-[#05080f] shadow-[0_0_55px_rgba(245,198,69,0.22)] transition hover:scale-[1.02]">
                  Explorar lojas <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={() => notify("Painel para lojistas")} variant="outline" className="h-14 rounded-2xl border-white/15 bg-white/8 px-7 font-bold text-white backdrop-blur-xl hover:bg-white/14">
                  Cadastrar minha loja
                </Button>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                {[
                  ["120+", "comércios conectáveis"],
                  ["24h", "vitrine online"],
                  ["4.9", "experiência avaliada"],
                ].map(([value, label]) => (
                  <div key={value} className="glass-panel rounded-3xl p-4">
                    <p className="font-[Sora] text-2xl font-extrabold text-white md:text-3xl">{value}</p>
                    <p className="mt-1 text-xs font-medium leading-5 text-white/50">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[36rem] lg:ml-auto">
              <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-red-500/30 blur-3xl" />
              <div className="absolute -right-8 bottom-16 h-36 w-36 rounded-full bg-green-500/25 blur-3xl" />
              <div className="glass-panel luxury-border float-soft relative rounded-[2.25rem] p-4">
                <img src={appUrl} alt="Mockup de aplicativo marketplace Acessa Paraguaçu" className="rounded-[1.7rem] object-cover shadow-2xl" />
                <div className="absolute -left-5 top-10 glass-panel rounded-3xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-400/18 text-green-300"><WalletCards className="h-5 w-5" /></div>
                    <div>
                      <p className="text-xs text-white/45">Checkout</p>
                      <p className="font-bold">Seguro e rápido</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 bottom-14 glass-panel rounded-3xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2 text-yellow-300">
                    {[1, 2, 3, 4, 5].map((item) => <Star key={item} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-2 text-sm font-bold text-white">Avaliações locais</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="lojas" className="container py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <SectionLabel>Lojas e categorias</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Toda a cidade em uma vitrine digital.</h2>
              <p className="mt-5 text-lg leading-8 text-white/62">Cards modernos de estabelecimentos, filtros por categoria e experiência de descoberta semelhante a um app premium de marketplace.</p>
            </div>
            <div className="glass-panel luxury-border rounded-[2rem] p-3 md:p-4">
              <div className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-black/24 px-4 py-4">
                <Search className="h-5 w-5 text-white/45" />
                <input className="w-full bg-transparent text-sm text-white placeholder:text-white/38 focus:outline-none" placeholder="Buscar por loja, produto ou serviço em Paraguaçu" />
                <button onClick={() => notify("Sistema de busca")} className="rounded-xl bg-white px-4 py-2 text-xs font-extrabold text-[#05080f]">Buscar</button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button key={category.name} onClick={() => notify(`Categoria ${category.name}`)} className={`group glass-panel rounded-[1.7rem] bg-gradient-to-br ${category.tone} p-5 text-left transition duration-300 hover:-translate-y-2 hover:border-white/25`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 font-[Sora] text-lg font-bold">{category.name}</p>
                  <p className="mt-1 text-sm text-white/48">{category.count}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {stores.map((store) => (
              <article key={store.name} className="group glass-panel luxury-border rounded-[2rem] p-5 transition duration-300 hover:-translate-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: `${store.color}24`, color: store.color }}>
                    <Building2 className="h-6 w-6" />
                  </div>
                  <button onClick={() => notify("Favoritos")} className="rounded-full border border-white/10 p-2 text-white/55 transition hover:text-red-300"><Heart className="h-4 w-4" /></button>
                </div>
                <p className="mt-6 font-[Sora] text-xl font-bold">{store.name}</p>
                <p className="mt-2 text-sm text-white/48">{store.type}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-white/65">{store.tag}</span>
                  <span className="flex items-center gap-1 text-sm font-bold text-yellow-300"><Star className="h-4 w-4 fill-current" /> {store.rating}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="beneficios" className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(239,68,68,0.08),transparent_35%,rgba(34,197,94,0.09))]" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Benefícios</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Mais alcance para quem vende. Mais praticidade para quem compra.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.title} className="glass-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/10">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 text-yellow-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-[Sora] text-xl font-bold">{benefit.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/58">{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tecnologia" className="container py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <img src={mapUrl} alt="Mapa digital futurista da cidade" className="rounded-[2.25rem] opacity-90 shadow-[0_35px_110px_rgba(0,0,0,0.55)]" />
              <div className="absolute inset-0 rounded-[2.25rem] ring-1 ring-white/12" />
              <div className="absolute bottom-5 left-5 right-5 glass-panel rounded-[1.6rem] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/45">Mapa digital</p>
                    <p className="mt-1 font-[Sora] text-lg font-bold">Lojas conectadas por região</p>
                  </div>
                  <MapPin className="h-8 w-8 text-green-300" />
                </div>
              </div>
            </div>
            <div>
              <SectionLabel>Tecnologia e inovação</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Uma camada digital para o comércio de Paraguaçu.</h2>
              <p className="mt-6 text-lg leading-8 text-white/62">A plataforma organiza mapa digital, integração entre lojas, conectividade e experiência de aplicativo moderno para transformar o comércio local em um ecossistema online.</p>
              <div className="mt-8 space-y-4">
                {[
                  [CircuitBoard, "Integração entre lojas", "Produtos, serviços, categorias e reputação em um mesmo ambiente."],
                  [MapPin, "Mapa digital da cidade", "Descoberta por proximidade, rotas e presença local inteligente."],
                  [LockKeyhole, "Confiança e segurança", "Interface preparada para login, cadastro, carrinho e área administrativa."],
                ].map(([Icon, title, description]) => {
                  const TypedIcon = Icon as typeof CircuitBoard;
                  return (
                    <div key={title as string} className="glass-panel flex gap-4 rounded-[1.7rem] p-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-red-300"><TypedIcon className="h-5 w-5" /></div>
                      <div>
                        <p className="font-[Sora] font-bold">{title as string}</p>
                        <p className="mt-1 text-sm leading-6 text-white/55">{description as string}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="lojistas" className="container py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionLabel>Painel para lojistas</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Gestão com aparência de plataforma global.</h2>
              <p className="mt-5 text-lg leading-8 text-white/62">O protótipo inclui área administrativa, painel de lojistas, módulos de produtos, pedidos, avaliações, relatórios e recursos de crescimento para o marketplace regional.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {adminModules.map((module) => (
                  <button key={module} onClick={() => notify(`Módulo ${module}`)} className="rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-semibold text-white/68 transition hover:border-yellow-300/45 hover:text-white">{module}</button>
                ))}
              </div>
            </div>
            <div className="glass-panel luxury-border rounded-[2.25rem] p-5 md:p-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/28 p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-300/15 text-yellow-300"><LayoutDashboard className="h-5 w-5" /></div>
                    <div>
                      <p className="font-[Sora] font-bold">Dashboard lojista</p>
                      <p className="text-xs text-white/45">Operação em tempo real</p>
                    </div>
                  </div>
                  <PanelRight className="h-5 w-5 text-white/45" />
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[["Pedidos", "128", "text-green-300"], ["Vendas", "R$ 18k", "text-yellow-300"], ["Clientes", "2.4k", "text-red-300"]].map(([label, value, color]) => (
                    <div key={label} className="rounded-3xl border border-white/10 bg-white/7 p-4">
                      <p className="text-xs text-white/45">{label}</p>
                      <p className={`mt-2 font-[Sora] text-2xl font-extrabold ${color}`}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-3xl border border-white/10 bg-white/7 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-[Sora] font-bold">Performance semanal</p>
                    <BarChart3 className="h-5 w-5 text-green-300" />
                  </div>
                  <div className="mt-6 flex h-36 items-end gap-3">
                    {[42, 64, 51, 78, 68, 92, 83].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-red-500 via-yellow-300 to-green-400 shadow-[0_0_25px_rgba(245,198,69,0.18)]" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-20 md:pb-28">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-[#080d16] p-6 md:p-10 lg:p-14">
            <img src={networkUrl} alt="Rede de lojas conectadas ao marketplace" className="absolute inset-0 h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080d16] via-[#080d16]/88 to-[#080d16]/35" />
            <div className="relative max-w-3xl">
              <SectionLabel>Próximo passo</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Transforme Paraguaçu em um marketplace regional conectado.</h2>
              <p className="mt-5 text-lg leading-8 text-white/66">A Acessa Paraguaçu nasce para valorizar lojas físicas, ampliar vendas online e entregar uma experiência moderna para consumidores e lojistas.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button onClick={() => notify("Cadastro de loja")} className="h-14 rounded-2xl bg-white px-7 font-extrabold text-[#05080f] hover:bg-yellow-100">
                  Começar agora <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={() => notify("Área administrativa")} variant="outline" className="h-14 rounded-2xl border-white/15 bg-white/8 px-7 font-bold text-white hover:bg-white/14">
                  Ver área administrativa
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/24 py-10">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Logo AP" className="h-12 w-12 rounded-2xl object-cover" />
            <div>
              <p className="font-[Sora] font-extrabold">Acessa Paraguaçu</p>
              <p className="text-sm text-white/48">Moda • Estilo • Conexão para todos os lugares</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/52">
            <button onClick={() => notify("Login")} className="transition hover:text-white"><UserRound className="mr-1 inline h-4 w-4" /> Login</button>
            <button onClick={() => notify("Carrinho")} className="transition hover:text-white"><ShoppingCart className="mr-1 inline h-4 w-4" /> Carrinho</button>
            <button onClick={() => notify("Plano premium")} className="transition hover:text-white"><Gem className="mr-1 inline h-4 w-4" /> Lojistas</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
