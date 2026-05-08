/*
  Filosofia visual: Luxury Cyberglass para Acessa Paraguaçu.
  Esta página evita imagens geradas por IA, usa a logo enviada como principal ativo visual,
  substitui números fictícios por exemplos de lojas e reforça funcionalidades demonstrativas em frontend.
*/
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  CircuitBoard,
  Gem,
  Heart,
  LayoutDashboard,
  LockKeyhole,
  MapPin,
  Menu,
  MonitorSmartphone,
  PackageCheck,
  PanelRight,
  Search,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  UserRound,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

const logoUrl = `${import.meta.env.BASE_URL}acessa-logo-whatsapp.jpeg`;

type Category = "Todos" | "Alimentação" | "Energia" | "Serviços" | "Tecnologia" | "Beleza" | "Moda";

type StoreExample = {
  name: string;
  category: Exclude<Category, "Todos">;
  description: string;
  highlight: string;
  accent: string;
  icon: LucideIcon;
};

const categories: { name: Category; icon: LucideIcon; description: string }[] = [
  { name: "Todos", icon: Store, description: "Vitrine geral" },
  { name: "Alimentação", icon: ShoppingBag, description: "Lanches, doces e refeições" },
  { name: "Energia", icon: Zap, description: "Soluções e serviços especializados" },
  { name: "Serviços", icon: BadgeCheck, description: "Atendimento local e profissional" },
  { name: "Tecnologia", icon: MonitorSmartphone, description: "Conectividade e suporte" },
  { name: "Beleza", icon: Sparkles, description: "Perfumaria, estética e cuidados" },
  { name: "Moda", icon: Gem, description: "Estilo, roupas e acessórios" },
];

const stores: StoreExample[] = [
  {
    name: "Sabor em Pedaços",
    category: "Alimentação",
    description: "Vitrine para bolos, doces, encomendas e produtos gastronômicos com pedido rápido pelo marketplace.",
    highlight: "Cardápio digital",
    accent: "#facc15",
    icon: ShoppingBag,
  },
  {
    name: "TGR Biogás",
    category: "Energia",
    description: "Apresentação institucional, contato comercial e catálogo de soluções para energia e sustentabilidade.",
    highlight: "Serviços especializados",
    accent: "#22c55e",
    icon: Zap,
  },
  {
    name: "Consul+",
    category: "Serviços",
    description: "Perfil para consultoria, atendimento, solicitações e comunicação direta com clientes locais.",
    highlight: "Agendamento e contato",
    accent: "#ef4444",
    icon: BadgeCheck,
  },
  {
    name: "Grupo Conecta",
    category: "Tecnologia",
    description: "Página para soluções digitais, conectividade, suporte técnico e divulgação de planos ou serviços.",
    highlight: "Conectividade local",
    accent: "#38bdf8",
    icon: Wifi,
  },
  {
    name: "Aramia Perfumaria",
    category: "Beleza",
    description: "Vitrine elegante para perfumes, cuidados pessoais, kits presenteáveis e atendimento por categoria.",
    highlight: "Produtos premium",
    accent: "#fb7185",
    icon: Sparkles,
  },
  {
    name: "AP Moda & Estilo",
    category: "Moda",
    description: "Exemplo de loja de roupas, acessórios e novidades com filtros por coleção, preço e disponibilidade.",
    highlight: "Coleções locais",
    accent: "#a3e635",
    icon: Gem,
  },
  {
    name: "Casa Paraguaçu",
    category: "Serviços",
    description: "Modelo de vitrine para prestadores e lojas de utilidades, com orçamento, localização e atendimento online.",
    highlight: "Orçamento rápido",
    accent: "#f97316",
    icon: Building2,
  },
  {
    name: "Mercado do Centro",
    category: "Alimentação",
    description: "Exemplo de comércio para cesta, itens do dia a dia, ofertas e compra com retirada ou entrega local.",
    highlight: "Compra local",
    accent: "#84cc16",
    icon: Store,
  },
];

const benefits = [
  {
    title: "Divulgação local organizada",
    description: "Cada loja ganha uma vitrine clara, pesquisável e preparada para aparecer por categoria, bairro, produto ou serviço.",
    icon: Store,
  },
  {
    title: "Busca, filtros e carrinho visual",
    description: "O visitante consegue pesquisar exemplos de lojas, filtrar categorias e montar um carrinho demonstrativo no próprio site.",
    icon: Search,
  },
  {
    title: "Conexão direta com lojistas",
    description: "A estrutura visual prevê contato, orçamento, agendamento, avaliação e gerenciamento de pedidos em um só lugar.",
    icon: Wifi,
  },
  {
    title: "Base para marketplace regional",
    description: "A interface já comunica a expansão futura para login real, painel administrativo, estoque, pagamentos e relatórios.",
    icon: LayoutDashboard,
  },
];

const panelModules = [
  { title: "Catálogo", text: "Cadastrar produtos, fotos, categorias e serviços." },
  { title: "Pedidos", text: "Acompanhar solicitações, status e histórico." },
  { title: "Perfil", text: "Editar horários, contato, endereço e descrição." },
  { title: "Avaliações", text: "Responder clientes e acompanhar reputação." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="aurora-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/80">
      <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.9)]" />
      {children}
    </div>
  );
}

function DemoModal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
      <div className="glass-panel luxury-border w-full max-w-xl rounded-[2rem] p-5 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h3 className="font-[Sora] text-2xl font-extrabold">{title}</h3>
          <button onClick={onClose} className="rounded-2xl border border-white/10 p-2 text-white/60 transition hover:text-white" aria-label="Fechar">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="pt-5">{children}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<StoreExample[]>([]);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [favoriteStores, setFavoriteStores] = useState<string[]>([]);

  const filteredStores = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return stores.filter((store) => {
      const categoryMatch = activeCategory === "Todos" || store.category === activeCategory;
      const queryMatch = !normalizedQuery || `${store.name} ${store.category} ${store.description}`.toLowerCase().includes(normalizedQuery);
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  function addToCart(store: StoreExample) {
    setCart((current) => [...current, store]);
    toast("Adicionado ao carrinho demonstrativo", {
      description: `${store.name} entrou na simulação de pedido/orçamento.`,
    });
  }

  function toggleFavorite(storeName: string) {
    setFavoriteStores((current) => current.includes(storeName) ? current.filter((name) => name !== storeName) : [...current, storeName]);
  }

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 grid-glow opacity-50" />
      <div className="pointer-events-none fixed left-0 top-0 z-0 h-[34rem] w-[34rem] rounded-full bg-red-500/12 blur-[140px]" />
      <div className="pointer-events-none fixed right-0 top-1/4 z-0 h-[36rem] w-[36rem] rounded-full bg-green-500/12 blur-[140px]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05080f]/72 backdrop-blur-2xl">
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
            <button onClick={() => document.getElementById("busca")?.focus()} className="glass-panel flex h-11 w-11 items-center justify-center rounded-2xl transition hover:scale-105 hover:border-white/25" aria-label="Buscar">
              <Search className="h-4 w-4" />
            </button>
            <button onClick={() => setCartOpen(true)} className="glass-panel relative flex h-11 w-11 items-center justify-center rounded-2xl transition hover:scale-105 hover:border-white/25" aria-label="Carrinho">
              <ShoppingCart className="h-4 w-4" />
              {cart.length > 0 && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-300 text-[11px] font-extrabold text-black">{cart.length}</span>}
            </button>
            <Button onClick={() => setLoginOpen(true)} className="scan-shine relative overflow-hidden rounded-2xl bg-white px-5 py-6 font-bold text-[#05080f] shadow-[0_0_35px_rgba(255,255,255,0.16)] hover:bg-yellow-100">
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
              <button onClick={() => setLoginOpen(true)} className="mt-2 w-full rounded-2xl bg-white px-4 py-3 font-bold text-[#05080f]">Entrar agora</button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="inicio" className="relative min-h-screen overflow-hidden pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(34,197,94,0.18),transparent_24rem),radial-gradient(circle_at_18%_36%,rgba(239,68,68,0.16),transparent_22rem),linear-gradient(135deg,#05080f_0%,#08111d_48%,#05080f_100%)]" />
          <div className="absolute right-[-8rem] top-24 h-[34rem] w-[34rem] rounded-full border border-yellow-300/12" />
          <div className="absolute right-[-3rem] top-36 h-[23rem] w-[23rem] rounded-full border border-green-300/12" />
          <div className="absolute left-0 top-0 h-full w-full opacity-45 grid-glow" />

          <div className="container relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-3xl">
              <SectionLabel>Marketplace local premium</SectionLabel>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <img src={logoUrl} alt="Logo AP Acessa Paraguaçu" className="h-24 w-24 rounded-[2rem] object-cover shadow-[0_0_80px_rgba(245,198,69,0.28)] ring-1 ring-white/15 md:h-32 md:w-32" />
                <div className="glass-panel luxury-border rounded-[2rem] px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Comércio local conectado</p>
                  <p className="mt-2 font-[Sora] text-2xl font-extrabold">Acessa Paraguaçu</p>
                </div>
              </div>

              <h1 className="mt-9 max-w-4xl text-5xl font-extrabold leading-[0.96] md:text-7xl xl:text-8xl">
                <span className="text-gradient-brand">Unindo nosso comércio</span> em um só lugar
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                Um marketplace com visual de aplicativo para aproximar clientes de lojas, prestadores e marcas locais de Paraguaçu, com busca, filtros, carrinho demonstrativo e painel para lojistas.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="scan-shine relative h-14 overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 px-7 font-extrabold text-[#05080f] shadow-[0_0_55px_rgba(245,198,69,0.22)] transition hover:scale-[1.02]">
                  <a href="#lojas">Explorar lojas <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button onClick={() => setPanelOpen(true)} variant="outline" className="h-14 rounded-2xl border-white/15 bg-white/8 px-7 font-bold text-white backdrop-blur-xl hover:bg-white/14">
                  Abrir painel lojista
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[38rem] lg:ml-auto">
              <div className="glass-panel luxury-border float-soft relative rounded-[2.25rem] p-5">
                <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-300/15 text-yellow-300"><Search className="h-5 w-5" /></div>
                      <div>
                        <p className="text-xs text-white/45">Interface de app</p>
                        <p className="font-[Sora] text-lg font-bold">Busca local inteligente</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-300" />
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="mt-5 rounded-3xl border border-white/10 bg-white/7 p-4">
                    <div className="flex items-center gap-3 rounded-2xl bg-black/25 px-4 py-3 text-white/45">
                      <Search className="h-4 w-4" />
                      <span className="text-sm">Buscar Sabor em Pedaços, Aramia...</span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {stores.slice(0, 4).map((store) => {
                        const Icon = store.icon;
                        return (
                          <div key={store.name} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${store.accent}22`, color: store.accent }}><Icon className="h-5 w-5" /></div>
                              <div className="min-w-0">
                                <p className="truncate text-sm font-bold">{store.name}</p>
                                <p className="text-xs text-white/45">{store.category}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {["Login", "Carrinho", "Painel"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-center text-sm font-bold text-white/70">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="lojas" className="container py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <SectionLabel>Vitrines locais</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Exemplos de lojas dentro do marketplace.</h2>
              <p className="mt-5 text-lg leading-8 text-white/62">Os nomes abaixo são exemplos para demonstrar como comércios e serviços podem aparecer dentro da Acessa Paraguaçu, sem números fictícios ou métricas artificiais.</p>
            </div>
            <div className="glass-panel luxury-border rounded-[2rem] p-3 md:p-4">
              <div className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-black/24 px-4 py-4">
                <Search className="h-5 w-5 text-white/45" />
                <input id="busca" value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-sm text-white placeholder:text-white/38 focus:outline-none" placeholder="Buscar loja, categoria ou serviço" />
                <button onClick={() => setQuery("")} className="rounded-xl bg-white px-4 py-2 text-xs font-extrabold text-[#05080f]">Limpar</button>
              </div>
            </div>
          </div>

          <div className="mt-9 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.name;
              return (
                <button key={category.name} onClick={() => setActiveCategory(category.name)} className={`min-w-fit rounded-2xl border px-4 py-3 text-left transition ${active ? "border-yellow-300/50 bg-yellow-300/15 text-white" : "border-white/10 bg-white/7 text-white/60 hover:border-white/25 hover:text-white"}`}>
                  <span className="flex items-center gap-2 text-sm font-bold"><Icon className="h-4 w-4" /> {category.name}</span>
                  <span className="mt-1 block text-xs text-white/42">{category.description}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {filteredStores.map((store) => {
              const Icon = store.icon;
              const favorite = favoriteStores.includes(store.name);
              return (
                <article key={store.name} className="group glass-panel luxury-border rounded-[2rem] p-5 transition duration-300 hover:-translate-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: `${store.accent}24`, color: store.accent }}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <button onClick={() => toggleFavorite(store.name)} className={`rounded-full border border-white/10 p-2 transition ${favorite ? "bg-red-500/20 text-red-300" : "text-white/55 hover:text-red-300"}`} aria-label="Favoritar loja">
                      <Heart className={favorite ? "h-4 w-4 fill-current" : "h-4 w-4"} />
                    </button>
                  </div>
                  <p className="mt-6 font-[Sora] text-xl font-bold">{store.name}</p>
                  <p className="mt-2 text-sm font-semibold" style={{ color: store.accent }}>{store.category}</p>
                  <p className="mt-4 min-h-24 text-sm leading-7 text-white/58">{store.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-white/65">{store.highlight}</span>
                    <button onClick={() => addToCart(store)} className="rounded-xl bg-white px-3 py-2 text-xs font-extrabold text-[#05080f] transition hover:bg-yellow-100">Adicionar</button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredStores.length === 0 && (
            <div className="glass-panel mt-8 rounded-[2rem] p-8 text-center">
              <p className="font-[Sora] text-xl font-bold">Nenhuma loja encontrada nessa busca.</p>
              <p className="mt-2 text-white/55">Tente outro termo ou selecione a categoria “Todos”.</p>
            </div>
          )}
        </section>

        <section id="beneficios" className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(239,68,68,0.08),transparent_35%,rgba(34,197,94,0.09))]" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Funcionalidades</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Mais experiência de produto, menos página estática.</h2>
              <p className="mt-5 text-lg leading-8 text-white/62">A navegação agora demonstra busca, filtro por categoria, favoritos, carrinho visual, login/cadastro e painel de lojista em uma experiência de app.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.title} className="glass-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-yellow-300">
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
            <div className="glass-panel luxury-border relative min-h-[32rem] overflow-hidden rounded-[2.25rem] p-6">
              <div className="absolute inset-0 grid-glow opacity-55" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/25" />
              <div className="absolute left-[18%] top-[22%] h-24 w-24 rounded-full border border-red-400/25 bg-red-500/5" />
              <div className="absolute right-[14%] top-[30%] h-28 w-28 rounded-full border border-green-400/25 bg-green-500/5" />
              <div className="absolute bottom-[20%] left-[30%] h-20 w-20 rounded-full border border-yellow-300/25 bg-yellow-300/5" />
              <div className="absolute inset-x-14 top-1/2 h-px bg-gradient-to-r from-red-400/0 via-yellow-300/55 to-green-400/0 pulse-line" />
              <div className="absolute left-1/2 top-20 h-[22rem] w-px -translate-x-1/2 bg-gradient-to-b from-red-400/0 via-green-300/45 to-yellow-300/0 pulse-line" />
              <div className="relative flex h-full min-h-[29rem] flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/45">Mapa digital sem imagem externa</p>
                  <h3 className="mt-3 font-[Sora] text-3xl font-extrabold">Rede local conectada</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Lojas", "Clientes", "Categorias", "Pedidos"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
                      <p className="text-sm font-bold">{item}</p>
                      <p className="mt-1 text-xs text-white/45">Módulo visual preparado</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <SectionLabel>Tecnologia e inovação</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Um sistema visual pronto para evoluir.</h2>
              <p className="mt-6 text-lg leading-8 text-white/62">A interface deixa claro como a Acessa Paraguaçu pode operar como plataforma: mapa digital, perfis comerciais, login de clientes, painel de lojistas e área administrativa.</p>
              <div className="mt-8 space-y-4">
                {[
                  [CircuitBoard, "Integração entre lojas", "Estrutura de categorias, vitrines e cartões preparada para receber dados reais."],
                  [MapPin, "Mapa digital da cidade", "Visual de rede local construído em CSS, sem depender das imagens geradas anteriormente."],
                  [LockKeyhole, "Login e administração", "Modal de acesso, carrinho visual e painel demonstrativo para o próximo passo funcional."],
                ].map(([Icon, title, description]) => {
                  const TypedIcon = Icon as LucideIcon;
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
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Ferramentas para loja vender melhor.</h2>
              <p className="mt-5 text-lg leading-8 text-white/62">O painel agora está apresentado sem métricas fictícias. A tela mostra módulos prontos para cadastro, pedidos, perfil, avaliações e configuração da loja.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {panelModules.map((module) => (
                  <button key={module.title} onClick={() => setPanelOpen(true)} className="rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-semibold text-white/68 transition hover:border-yellow-300/45 hover:text-white">{module.title}</button>
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
                      <p className="text-xs text-white/45">Modelo visual sem dados inventados</p>
                    </div>
                  </div>
                  <PanelRight className="h-5 w-5 text-white/45" />
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {panelModules.map((module) => (
                    <div key={module.title} className="rounded-3xl border border-white/10 bg-white/7 p-4">
                      <p className="font-[Sora] font-bold">{module.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/52">{module.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-3xl border border-white/10 bg-white/7 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-[Sora] font-bold">Checklist de publicação da loja</p>
                    <Settings2 className="h-5 w-5 text-green-300" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {["Adicionar logo e capa", "Cadastrar produtos ou serviços", "Informar endereço e contato", "Ativar formas de atendimento"].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-white/68">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400/15 text-green-300"><Check className="h-3.5 w-3.5" /></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-20 md:pb-28">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-[#080d16] p-6 md:p-10 lg:p-14">
            <div className="absolute inset-0 grid-glow opacity-35" />
            <div className="absolute right-8 top-8 h-44 w-44 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-44 w-44 rounded-full bg-red-500/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <SectionLabel>Próximo passo</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">Agora o site está mais próximo de um produto real.</h2>
              <p className="mt-5 text-lg leading-8 text-white/66">A próxima evolução pode conectar lojas reais, produtos, cadastro, carrinho e painel de lojista a um backend, mantendo a mesma aparência premium.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button onClick={() => setLoginOpen(true)} className="h-14 rounded-2xl bg-white px-7 font-extrabold text-[#05080f] hover:bg-yellow-100">
                  Criar conta <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button onClick={() => setPanelOpen(true)} variant="outline" className="h-14 rounded-2xl border-white/15 bg-white/8 px-7 font-bold text-white hover:bg-white/14">
                  Ver painel de lojista
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
            <button onClick={() => setLoginOpen(true)} className="transition hover:text-white"><UserRound className="mr-1 inline h-4 w-4" /> Login</button>
            <button onClick={() => setCartOpen(true)} className="transition hover:text-white"><ShoppingCart className="mr-1 inline h-4 w-4" /> Carrinho</button>
            <button onClick={() => setPanelOpen(true)} className="transition hover:text-white"><Gem className="mr-1 inline h-4 w-4" /> Lojistas</button>
          </div>
        </div>
      </footer>

      {loginOpen && (
        <DemoModal title="Login e cadastro" onClose={() => setLoginOpen(false)}>
          <div className="grid gap-4 sm:grid-cols-2">
            <button className="rounded-3xl border border-white/10 bg-white/8 p-5 text-left transition hover:bg-white/12">
              <UserRound className="h-6 w-6 text-yellow-300" />
              <p className="mt-4 font-[Sora] font-bold">Entrar como cliente</p>
              <p className="mt-2 text-sm leading-6 text-white/52">Buscar lojas, favoritar vitrines, montar carrinho e acompanhar pedidos.</p>
            </button>
            <button className="rounded-3xl border border-white/10 bg-white/8 p-5 text-left transition hover:bg-white/12">
              <Store className="h-6 w-6 text-green-300" />
              <p className="mt-4 font-[Sora] font-bold">Entrar como lojista</p>
              <p className="mt-2 text-sm leading-6 text-white/52">Cadastrar loja, editar catálogo, receber solicitações e gerenciar atendimento.</p>
            </button>
          </div>
          <div className="mt-5 rounded-3xl border border-white/10 bg-black/25 p-4">
            <input className="mb-3 w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm outline-none placeholder:text-white/35" placeholder="E-mail ou telefone" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm outline-none placeholder:text-white/35" placeholder="Senha" type="password" />
            <Button onClick={() => toast("Fluxo demonstrativo", { description: "Para login real, o projeto pode ser conectado a autenticação e banco de dados." })} className="mt-4 w-full rounded-2xl bg-white py-6 font-extrabold text-[#05080f] hover:bg-yellow-100">Continuar</Button>
          </div>
        </DemoModal>
      )}

      {cartOpen && (
        <DemoModal title="Carrinho demonstrativo" onClose={() => setCartOpen(false)}>
          {cart.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/7 p-6 text-center">
              <ShoppingCart className="mx-auto h-8 w-8 text-white/45" />
              <p className="mt-4 font-[Sora] font-bold">Seu carrinho visual está vazio.</p>
              <p className="mt-2 text-sm text-white/52">Adicione uma loja ou serviço nos cards para simular uma solicitação.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item, index) => (
                <div key={`${item.name}-${index}`} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/7 p-4">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-white/45">{item.highlight}</p>
                  </div>
                  <PackageCheck className="h-5 w-5 text-green-300" />
                </div>
              ))}
              <Button onClick={() => toast("Pedido demonstrativo criado", { description: "Em uma versão funcional, este botão criaria um pedido ou orçamento real." })} className="w-full rounded-2xl bg-white py-6 font-extrabold text-[#05080f] hover:bg-yellow-100">Solicitar orçamento</Button>
            </div>
          )}
        </DemoModal>
      )}

      {panelOpen && (
        <DemoModal title="Painel do lojista" onClose={() => setPanelOpen(false)}>
          <div className="space-y-3">
            {panelModules.map((module) => (
              <div key={module.title} className="rounded-2xl border border-white/10 bg-white/7 p-4">
                <p className="font-[Sora] font-bold">{module.title}</p>
                <p className="mt-1 text-sm leading-6 text-white/52">{module.text}</p>
              </div>
            ))}
          </div>
          <Button onClick={() => toast("Painel demonstrativo", { description: "Este painel pode ser convertido em área real com login, banco de dados e uploads." })} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 py-6 font-extrabold text-[#05080f]">Configurar minha loja</Button>
        </DemoModal>
      )}
    </div>
  );
}
