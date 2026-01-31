import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState<string | null>(null);
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const servers = [
    { id: 'dallas', name: 'Dallas', color: 'bg-red-600', icon: '🌆', online: 8, max: 10 },
    { id: 'portland', name: 'Portland', color: 'bg-green-600', icon: '🌲', online: 7, max: 10 },
    { id: 'phoenix', name: 'Phoenix', color: 'bg-orange-600', icon: '🔥', online: 0, max: 10 },
  ];

  const professions = [
    {
      title: 'Полиция Лос-Сантоса',
      description: 'Защищай порядок на улицах мегаполиса, патрулируй районы на служебном автомобиле, расследуй преступления от краж до убийств. Проходи обучение в полицейской академии, получай звания от офицера до комиссара. Участвуй в высокоскоростных погонях, проводи задержания, работай в отделе детективов.',
      icon: 'Shield',
      color: 'from-blue-900/20 to-blue-600/20 hover:from-blue-900/40 hover:to-blue-600/40',
      features: ['Патрулирование города', 'Расследования', 'Погони', 'Карьерный рост'],
    },
    {
      title: 'Шерифский департамент',
      description: 'Охраняй округ Блэйн Каунти, веди следствие в самых опасных районах штата, борись с организованной преступностью в пустынях и горах. Управляй вертолётом для воздушного патрулирования, организуй спецоперации, работай с К-9 подразделением.',
      icon: 'Star',
      color: 'from-amber-900/20 to-amber-600/20 hover:from-amber-900/40 hover:to-amber-600/40',
      features: ['Воздушное патрулирование', 'Спецоперации', 'К-9 подразделение', 'Работа в округе'],
    },
    {
      title: 'Weazel News',
      description: 'Освещай самые горячие события штата, веди прямые репортажи с места происшествий, интервьюируй известных личностей города. Развивай свой медиа-бренд, получай эксклюзивные материалы, создавай телешоу. Работай в паре с оператором, используй новостной вертолёт для съёмок.',
      icon: 'Radio',
      color: 'from-purple-900/20 to-purple-600/20 hover:from-purple-900/40 hover:to-purple-600/40',
      features: ['Прямые эфиры', 'Эксклюзивы', 'Интервью', 'Вертолёт для съёмок'],
    },
    {
      title: 'Emergency Medical Service',
      description: 'Спасай жизни граждан, оказывай экстренную медицинскую помощь на месте ДТП и происшествий, работай в команде парамедиков и врачей. Проводи операции в госпитале, управляй санитарным вертолётом, участвуй в масштабных спасательных операциях. Развивай навыки от фельдшера до главврача.',
      icon: 'Heart',
      color: 'from-red-900/20 to-red-600/20 hover:from-red-900/40 hover:to-red-600/40',
      features: ['Экстренная помощь', 'Операции', 'Мед. вертолёт', 'Спасательные операции'],
    },
    {
      title: 'Нелегальная работа',
      description: 'Рискуй всем ради больших денег, живи на грани закона в криминальном мире. Организуй ограбления банков, торгуй контрабандой, создавай свою банду или вступай в мафиозные семьи. Участвуй в разборках за территории, отмывай деньги через легальный бизнес, уходи от полиции.',
      icon: 'Skull',
      color: 'from-gray-900/20 to-gray-600/20 hover:from-gray-900/40 hover:to-gray-600/40',
      features: ['Ограбления', 'Банды', 'Контрабанда', 'Территории'],
    },
    {
      title: 'Судебная система',
      description: 'Верши правосудие как судья или защищай клиентов как адвокат. Рассматривай дела в суде, выноси приговоры, определяй судьбы преступников. Как адвокат — строй защиту, изучай улики, веди переговоры с прокурором. Участвуй в громких процессах, получай репутацию лучшего юриста штата.',
      icon: 'Scale',
      color: 'from-indigo-900/20 to-indigo-600/20 hover:from-indigo-900/40 hover:to-indigo-600/40',
      features: ['Судебные процессы', 'Защита клиентов', 'Приговоры', 'Репутация'],
    },
    {
      title: 'Government (Правительство)',
      description: 'Управляй штатом и принимай судьбоносные решения. Стань министром и руководи ключевыми отраслями экономики, или займи пост губернатора и правь всем государством. Присоединяйся к USSS (United States Secret Service) — элитной охране первых лиц штата, обеспечивай безопасность губернатора и высших чиновников. Участвуй в политических кампаниях, формируй бюджет, издавай законы.',
      icon: 'Building2',
      color: 'from-emerald-900/20 to-emerald-600/20 hover:from-emerald-900/40 hover:to-emerald-600/40',
      features: ['Министр/Губернатор', 'USSS охрана', 'Принятие законов', 'Управление штатом'],
    },
    {
      title: 'FIB (Federal Investigation Bureau)',
      description: 'Элитная федеральная служба по борьбе с преступностью высшего уровня. Расследуй серийные убийства, веди слежку за преступными организациями, разоблачай коррупцию в высших эшелонах власти. Проводи крупномасштабные контртеррористические операции, освобождай заложников, выслеживай и задерживай самых опасных преступников. Работай под прикрытием, собирай улики, координируй рейды спецназа. Получи доступ к самым секретным делам штата.',
      icon: 'ShieldCheck',
      color: 'from-slate-900/20 to-slate-600/20 hover:from-slate-900/40 hover:to-slate-600/40',
      features: ['Федеральные дела', 'Борьба с коррупцией', 'Контртерроризм', 'Спецоперации'],
    },
  ];

  const handleRegister = () => {
    if (nickname && password && selectedServer) {
      window.location.href = 'https://t.me/+o0s2S3TSH0pmODAy';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-red-950/20 via-black to-black pointer-events-none z-0" />
      
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-red-900/30 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="handwritten text-5xl text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            Америка RP
          </h1>
          <div className="flex gap-8 items-center">
            <a href="#home" className="text-sm hover:text-red-600 transition-colors duration-300 tracking-wide uppercase">Главная</a>
            <a href="#professions" className="text-sm hover:text-red-600 transition-colors duration-300 tracking-wide uppercase">Профессии</a>
            <a href="#about" className="text-sm hover:text-red-600 transition-colors duration-300 tracking-wide uppercase">О сервере</a>
            <a href="https://t.me/+o0s2S3TSH0pmODAy" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-red-600 transition-colors duration-300 tracking-wide uppercase">Форум</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/59b3e206-f66f-43bc-b078-bf6c53e409e1/bucket/9dcdb4e3-cacc-41c1-bcca-98196a4ea879.jpg')] bg-cover bg-center opacity-30 blur-sm" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMjAsMzgsMzgsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-7xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              АМЕРИКА RP
            </h2>
            <p className="text-xl md:text-3xl mb-4 text-gray-300 font-light tracking-wider">
              ПРОСТОР ДЛЯ ТВОЕЙ ИСТОРИИ
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
              Стань кем угодно в мире Simple Sandbox 2. Полиция, медики, преступники или судья — твой выбор решает всё.
            </p>
            <Button 
              onClick={() => setIsRegisterOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              НАЧАТЬ ИГРАТЬ
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <div className="bg-gradient-to-br from-red-950/40 to-black border border-red-800/50 p-8 backdrop-blur-sm hover:border-red-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-2 group">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-red-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">1000+ ИГРОКОВ</h3>
              <p className="text-gray-400">Активное комьюнити онлайн 24/7</p>
            </div>
            <div className="bg-gradient-to-br from-red-950/40 to-black border border-red-800/50 p-8 backdrop-blur-sm hover:border-red-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-2 group">
              <Icon name="Zap" size={48} className="mx-auto mb-4 text-red-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">СТАБИЛЬНЫЙ СЕРВЕР</h3>
              <p className="text-gray-400">Без лагов и вайпов</p>
            </div>
            <div className="bg-gradient-to-br from-red-950/40 to-black border border-red-800/50 p-8 backdrop-blur-sm hover:border-red-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-2 group">
              <Icon name="Trophy" size={48} className="mx-auto mb-4 text-red-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">УНИКАЛЬНЫЕ СОБЫТИЯ</h3>
              <p className="text-gray-400">Конкурсы, турниры, награды</p>
            </div>
          </div>
        </div>
      </section>

      <section id="professions" className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            ПРОФЕССИИ
          </h2>
          <p className="text-center text-gray-400 text-xl mb-16">Выбери свой путь в мире Америка RP</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professions.map((profession, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${profession.color} border border-red-900/30 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-red-600 hover:shadow-2xl hover:shadow-red-900/50 animate-scale-in cursor-pointer group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all duration-500 -translate-y-16 translate-x-16" />
                
                <Icon 
                  name={profession.icon} 
                  size={56} 
                  className="mb-6 text-red-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" 
                />
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">{profession.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{profession.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {profession.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-red-950/40 border border-red-800/50 text-red-300 group-hover:bg-red-900/40 group-hover:border-red-600/50 transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-gradient-to-b from-black via-red-950/10 to-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
            О СЕРВЕРЕ
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-red-950/20 to-black border-l-4 border-red-600 p-8 backdrop-blur-sm animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Icon name="Target" size={32} className="text-red-500" />
                Наша миссия
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Создать самый реалистичный и захватывающий RP-опыт в Simple Sandbox 2. Мы даём игрокам полную свободу выбора — от законопослушного гражданина до опасного преступника.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-red-950/20 to-black border-l-4 border-red-600 p-8 backdrop-blur-sm animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Icon name="Rocket" size={32} className="text-red-500" />
                Что нас выделяет
              </h3>
              <ul className="text-gray-300 text-lg space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>Продуманная экономика и система прокачки персонажа</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>Адекватная администрация, всегда готовая помочь</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>Регулярные обновления и новый контент каждую неделю</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>Возможность влиять на развитие сервера через голосования</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-red-950/20 to-black border-l-4 border-red-600 p-8 backdrop-blur-sm animate-fade-in">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Icon name="MapPin" size={32} className="text-red-500" />
                Три сервера — три истории
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {servers.map((server) => (
                  <div key={server.id} className="text-center p-6 bg-black/40 border border-red-900/30 hover:border-red-600 hover:scale-105 hover:shadow-xl hover:shadow-red-900/40 transition-all duration-300 group">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{server.icon}</div>
                    <h4 className="text-xl font-bold group-hover:text-red-400 transition-colors duration-300">{server.name}</h4>
                    <div className="mt-3 text-sm text-gray-400">
                      <span className={`font-bold ${server.online > 0 ? 'text-green-400' : 'text-gray-500'}`}>
                        {server.online}/{server.max} игроков
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-red-900/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="handwritten text-5xl text-red-600 mb-4 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            Америка RP
          </h2>
          <p className="text-gray-400 mb-6">Simple Sandbox 2 © 2026</p>
          <Button 
            onClick={() => setIsRegisterOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
          >
            ПРИСОЕДИНИТЬСЯ СЕЙЧАС
          </Button>
        </div>
      </footer>

{isRegisterOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsRegisterOpen(false)}
          />
          <div className="relative bg-[#0A0A0A] border-2 border-red-600 text-white max-w-md w-full mx-4 p-8 animate-scale-in">
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
            
            <h2 className="text-3xl font-bold text-center text-red-600 mb-2">
              РЕГИСТРАЦИЯ
            </h2>
            <p className="text-gray-400 text-center mb-6">
              Заполни данные и выбери сервер для начала игры
            </p>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="nickname" className="text-gray-300 mb-2 block">
                  Никнейм (Имя_Фамилия)
                </Label>
                <Input
                  id="nickname"
                  placeholder="Ivan_Petrov"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="bg-black/60 border-red-900/50 text-white focus:border-red-600"
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="text-gray-300 mb-2 block">
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/60 border-red-900/50 text-white focus:border-red-600"
                />
              </div>
              
              <div>
                <Label className="text-gray-300 mb-3 block">Выбери сервер</Label>
                <div className="grid grid-cols-3 gap-3">
                  {servers.map((server) => (
                    <button
                      key={server.id}
                      onClick={() => setSelectedServer(server.id)}
                      className={`p-4 border-2 transition-all duration-300 ${
                        selectedServer === server.id
                          ? 'border-red-600 bg-red-950/30 scale-105'
                          : 'border-red-900/30 bg-black/40 hover:border-red-700'
                      }`}
                    >
                      <div className="text-3xl mb-2">{server.icon}</div>
                      <div className="text-sm font-bold">{server.name}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              <Button
                onClick={handleRegister}
                disabled={!nickname || !password || !selectedServer}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                НАЧАТЬ ИГРУ
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;