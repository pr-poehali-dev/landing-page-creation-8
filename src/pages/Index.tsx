import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [language, setLanguage] = useState('ru');

  const translations = {
    ru: {
      nav: {
        about: 'О НАС',
        approach: 'НАШ ПОДХОД',
        channels: 'КАНАЛЫ СБЫТА',
        assortment: 'АССОРТИМЕНТ',
        partners: 'ПАРТНЕРЫ',
        news: 'НОВОСТИ',
        contacts: 'КОНТАКТЫ'
      },
      hero: {
        title: 'MASTER\'S DISTRIBUTION COMPANY',
        subtitle: 'Ведущая дистрибуторская компания на рынке товаров и продуктов',
        cta: 'СВЯЗАТЬСЯ С НАМИ'
      },
      about: {
        title: 'О НАС',
        description: 'Master\'s Distribution Company — надежный партнер в сфере дистрибуции товаров. Мы специализируемся на создании эффективных каналов сбыта и обеспечиваем качественное распределение продукции по всей территории.'
      },
      approach: {
        title: 'НАШ ПОДХОД',
        items: [
          { icon: 'Target', title: 'Стратегический фокус', desc: 'Индивидуальные решения для каждого клиента' },
          { icon: 'Truck', title: 'Логистика', desc: 'Современная система доставки и складирования' },
          { icon: 'Users', title: 'Команда', desc: 'Опытные специалисты в области дистрибуции' },
          { icon: 'TrendingUp', title: 'Рост', desc: 'Постоянное развитие и расширение сети' }
        ]
      },
      channels: {
        title: 'КАНАЛЫ СБЫТА',
        description: 'Мы развиваем разнообразные каналы дистрибуции для максимального охвата рынка'
      },
      assortment: {
        title: 'АССОРТИМЕНТ',
        description: 'Широкий спектр товаров различных категорий для удовлетворения потребностей наших партнеров'
      },
      partners: {
        title: 'ПАРТНЕРЫ',
        description: 'Работаем с ведущими производителями и торговыми сетями'
      },
      news: {
        title: 'НОВОСТИ',
        items: [
          { title: 'Открытие нового распределительного центра', date: '15 сентября 2025' },
          { title: 'Партнерство с международной логистической компанией', date: '10 сентября 2025' },
          { title: 'Расширение ассортимента продукции', date: '5 сентября 2025' }
        ]
      },
      contacts: {
        title: 'КОНТАКТЫ',
        phone: '+7 (495) 123-45-67',
        email: 'info@mastersdistribution.com',
        address: 'г. Москва, ул. Деловая, д. 1, стр. 1'
      }
    },
    en: {
      nav: {
        about: 'ABOUT US',
        approach: 'OUR APPROACH',
        channels: 'SALES CHANNELS',
        assortment: 'ASSORTMENT',
        partners: 'PARTNERS',
        news: 'NEWS',
        contacts: 'CONTACTS'
      },
      hero: {
        title: 'MASTER\'S DISTRIBUTION COMPANY',
        subtitle: 'Leading distribution company in goods and products market',
        cta: 'CONTACT US'
      },
      about: {
        title: 'ABOUT US',
        description: 'Master\'s Distribution Company is a reliable partner in goods distribution. We specialize in creating effective sales channels and ensuring quality product distribution throughout the territory.'
      },
      approach: {
        title: 'OUR APPROACH',
        items: [
          { icon: 'Target', title: 'Strategic Focus', desc: 'Individual solutions for each client' },
          { icon: 'Truck', title: 'Logistics', desc: 'Modern delivery and warehousing system' },
          { icon: 'Users', title: 'Team', desc: 'Experienced distribution specialists' },
          { icon: 'TrendingUp', title: 'Growth', desc: 'Continuous development and network expansion' }
        ]
      },
      channels: {
        title: 'SALES CHANNELS',
        description: 'We develop diverse distribution channels for maximum market coverage'
      },
      assortment: {
        title: 'ASSORTMENT',
        description: 'Wide range of products in various categories to meet our partners\' needs'
      },
      partners: {
        title: 'PARTNERS',
        description: 'We work with leading manufacturers and retail chains'
      },
      news: {
        title: 'NEWS',
        items: [
          { title: 'Opening of new distribution center', date: 'September 15, 2025' },
          { title: 'Partnership with international logistics company', date: 'September 10, 2025' },
          { title: 'Product assortment expansion', date: 'September 5, 2025' }
        ]
      },
      contacts: {
        title: 'CONTACTS',
        phone: '+7 (495) 123-45-67',
        email: 'info@mastersdistribution.com',
        address: 'Moscow, Delovaya str., 1, bld. 1'
      }
    },
    ko: {
      nav: {
        about: '회사소개',
        approach: '접근방식',
        channels: '판매채널',
        assortment: '제품군',
        partners: '파트너',
        news: '뉴스',
        contacts: '연락처'
      },
      hero: {
        title: 'MASTER\'S DISTRIBUTION COMPANY',
        subtitle: '상품 및 제품 시장의 선도적인 유통회사',
        cta: '문의하기'
      },
      about: {
        title: '회사소개',
        description: 'Master\'s Distribution Company는 상품 유통 분야의 신뢰할 수 있는 파트너입니다. 효과적인 판매 채널을 구축하고 전 지역에 걸친 품질 높은 제품 유통을 보장하는 것을 전문으로 합니다.'
      },
      approach: {
        title: '접근방식',
        items: [
          { icon: 'Target', title: '전략적 집중', desc: '각 고객을 위한 개별 솔루션' },
          { icon: 'Truck', title: '물류', desc: '현대적인 배송 및 창고 시스템' },
          { icon: 'Users', title: '팀', desc: '경험 풍부한 유통 전문가들' },
          { icon: 'TrendingUp', title: '성장', desc: '지속적인 개발 및 네트워크 확장' }
        ]
      },
      channels: {
        title: '판매채널',
        description: '최대한의 시장 커버리지를 위한 다양한 유통 채널을 개발합니다'
      },
      assortment: {
        title: '제품군',
        description: '파트너의 요구를 충족시키기 위한 다양한 카테고리의 폭넓은 제품 범위'
      },
      partners: {
        title: '파트너',
        description: '선도적인 제조업체 및 소매 체인과 협력합니다'
      },
      news: {
        title: '뉴스',
        items: [
          { title: '새로운 유통센터 개설', date: '2025년 9월 15일' },
          { title: '국제 물류회사와의 파트너십', date: '2025년 9월 10일' },
          { title: '제품 구색 확장', date: '2025년 9월 5일' }
        ]
      },
      contacts: {
        title: '연락처',
        phone: '+7 (495) 123-45-67',
        email: 'info@mastersdistribution.com',
        address: '러시아 모스크바, 델로바야 거리 1번지 1동'
      }
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3 animate-slide-in-left">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center animate-pulse-glow animate-float">
                <span className="text-white font-bold text-lg">MDC</span>
              </div>
              <div className="text-xl font-bold text-brand-gray">Master's Distribution</div>
            </div>

            {/* Language Switcher */}
            <div className="flex space-x-2 animate-slide-in-right">
              {['ru', 'en', 'ko'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded ${
                    language === lang 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {lang === 'ru' ? 'РУ' : lang === 'en' ? 'EN' : '한'}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6">
            <div className="flex flex-wrap justify-center space-x-8 text-sm font-medium text-gray-600">
              <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
              <a href="#approach" className="hover:text-primary transition-colors">{t.nav.approach}</a>
              <a href="#channels" className="hover:text-primary transition-colors">{t.nav.channels}</a>
              <a href="#assortment" className="hover:text-primary transition-colors">{t.nav.assortment}</a>
              <a href="#partners" className="hover:text-primary transition-colors">{t.nav.partners}</a>
              <a href="#news" className="hover:text-primary transition-colors">{t.nav.news}</a>
              <a href="#contacts" className="hover:text-primary transition-colors">{t.nav.contacts}</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t.hero.subtitle}
          </p>
          <Button size="lg" className="bg-primary hover:bg-brand-dark-green text-white px-8 py-3 text-lg animate-bounce-in hover:scale-105 transition-transform duration-200" style={{animationDelay: '0.4s'}}>
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-brand-gray mb-6">{t.about.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t.about.description}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg animate-slide-in-right hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/6fb7a366-2f0e-4887-bf71-62d4ea5c5388.jpg" 
                alt="Distribution center" 
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-gray text-center mb-12 animate-fade-in">{t.approach.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.approach.items.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="pt-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Channels Section */}
      <section id="channels" className="py-20 bg-gradient-to-l from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg animate-slide-in-left hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/f2b3f1c7-059b-4d2e-99cc-b8923b6d354b.jpg" 
                alt="Network channels" 
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-brand-gray mb-6">{t.channels.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.channels.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assortment Section */}
      <section id="assortment" className="py-20 bg-gradient-to-l from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-brand-gray mb-6">{t.assortment.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.assortment.description}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg animate-slide-in-right hover:scale-105 transition-transform duration-300">
              <img 
                src="/img/1bc3c415-4092-46da-a9ea-c8a8e3f3bb4b.jpg" 
                alt="Product assortment" 
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-gray mb-6">{t.partners.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.partners.description}
          </p>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-gray text-center mb-12">{t.news.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.news.items.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold text-brand-gray mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-gray text-center mb-12">{t.contacts.title}</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="animate-bounce-in" style={{animationDelay: '0.1s'}}>
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4 animate-float" />
                <p className="text-lg font-semibold text-brand-gray">{t.contacts.phone}</p>
              </div>
              <div className="animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4 animate-float" style={{animationDelay: '0.5s'}} />
                <p className="text-lg font-semibold text-brand-gray">{t.contacts.email}</p>
              </div>
              <div className="animate-bounce-in" style={{animationDelay: '0.3s'}}>
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4 animate-float" style={{animationDelay: '1s'}} />
                <p className="text-lg font-semibold text-brand-gray">{t.contacts.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MDC</span>
              </div>
              <span className="text-xl font-bold">Master's Distribution Company</span>
            </div>
            <p className="text-gray-400">© 2025 Master's Distribution Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;