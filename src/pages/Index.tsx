import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Навигационная панель */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <span className="text-[#7E69AB] font-bold text-2xl">СТАНКИН</span>
            <span className="ml-2 text-[#1A1F2C] font-normal">
              Робототехника
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-[#1A1F2C]">
            <a href="#about" className="hover:text-[#9b87f5] transition-colors">
              О нас
            </a>
            <a
              href="#competitions"
              className="hover:text-[#9b87f5] transition-colors"
            >
              Конкурсы
            </a>
            <a
              href="#laboratory"
              className="hover:text-[#9b87f5] transition-colors"
            >
              Лаборатория
            </a>
            <a
              href="#achievements"
              className="hover:text-[#9b87f5] transition-colors"
            >
              Достижения
            </a>
          </div>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]" asChild>
            <a
              href="https://t.me/stankin_robotics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Присоединиться
            </a>
          </Button>
        </div>
      </nav>

      {/* Героическая секция */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C]/90 to-[#1A1F2C]/70"></div>
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22731d4ce1?auto=format&fit=crop&q=80"
            alt="Робототехника"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Создаем будущее{" "}
              <span className="text-[#9b87f5]">робототехники</span> вместе
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Студенческое бюро робототехники МГТУ Станкин — место, где
              инженерная мысль превращается в работающие проекты
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6">
                Узнать больше
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6"
              >
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <Icon name="ChevronDown" size={30} />
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                О нашем бюро
              </h2>
              <div className="bg-[#9b87f5] h-1 w-20 mb-6"></div>
              <p className="text-lg mb-6 text-slate-700">
                Студенческое бюро робототехники МГТУ Станкин объединяет
                талантливых студентов, увлеченных созданием роботов и
                автоматизированных систем. Мы предоставляем возможность
                практического применения теоретических знаний в области
                робототехники.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-[#1A1F2C]">
                  Наша миссия
                </h3>
                <p className="text-lg text-slate-700">
                  Создание инновационной среды для развития технического
                  творчества студентов, продвижение достижений робототехники и
                  подготовка высококвалифицированных специалистов для цифровой
                  экономики.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#1A1F2C]">
                  Наша цель
                </h3>
                <p className="text-lg text-slate-700">
                  Сформировать центр компетенций по робототехнике, где студенты
                  могут создавать прототипы роботизированных систем, участвовать
                  в конкурсах и реализовывать коммерческие проекты.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Команда за работой"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80"
                  alt="Робот"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80"
                  alt="Электроника"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1597923730936-2c27bd14b0ed?auto=format&fit=crop&q=80"
                  alt="3D печать"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Конкурсы и соревнования */}
      <section id="competitions" className="py-20 bg-[#F2FCE2]/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
              Актуальные конкурсы и соревнования
            </h2>
            <div className="bg-[#9b87f5] h-1 w-20 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-slate-700">
              Мы регулярно участвуем в российских и международных соревнованиях
              по робототехнике, а также проводим собственные мероприятия для
              студентов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Робофест 2025</CardTitle>
                  <Badge className="bg-[#9b87f5]">Всероссийский</Badge>
                </div>
                <CardDescription>
                  Крупнейший фестиваль робототехники в России
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1611352229072-1735affe2852?auto=format&fit=crop&q=80"
                  alt="Робофест"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-slate-700">
                  Соревнования по нескольким номинациям: автономные роботы,
                  манипуляторы, беспилотные летательные аппараты.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
                  <Icon name="Calendar" size={16} />
                  <span>15-17 марта 2025</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Подать заявку
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>World Robot Olympiad</CardTitle>
                  <Badge className="bg-[#6E59A5]">Международный</Badge>
                </div>
                <CardDescription>
                  Международная олимпиада по робототехнике
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80"
                  alt="World Robot Olympiad"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-slate-700">
                  Соревнования для студенческих команд с задачами различного
                  уровня сложности и креативности.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
                  <Icon name="Calendar" size={16} />
                  <span>10-12 июня 2025</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Подать заявку
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>СТАНКИН Робо-Хакатон</CardTitle>
                  <Badge className="bg-[#7E69AB]">Внутренний</Badge>
                </div>
                <CardDescription>
                  Интенсив для студентов по робототехнике
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80"
                  alt="Робо-Хакатон"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-slate-700">
                  48-часовой марафон по созданию действующего прототипа робота
                  для решения реальных производственных задач.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
                  <Icon name="Calendar" size={16} />
                  <span>5-7 апреля 2025</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Подать заявку
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Лаборатория */}
      <section id="laboratory" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80"
                alt="Лаборатория робототехники"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                Наша лаборатория
              </h2>
              <div className="bg-[#9b87f5] h-1 w-20 mb-6"></div>

              <p className="text-lg mb-6 text-slate-700">
                Студенческое бюро робототехники располагает современной
                лабораторией площадью 150 кв.м., оснащенной всем необходимым
                оборудованием для проектирования, прототипирования и испытания
                роботизированных систем.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
                  <Icon
                    name="Printer"
                    size={32}
                    className="text-[#9b87f5] mb-2"
                  />
                  <p className="text-center text-slate-700">3D-принтеры</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
                  <Icon name="Cpu" size={32} className="text-[#9b87f5] mb-2" />
                  <p className="text-center text-slate-700">Микроконтроллеры</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
                  <Icon name="Cog" size={32} className="text-[#9b87f5] mb-2" />
                  <p className="text-center text-slate-700">ЧПУ-станки</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
                  <Icon
                    name="Laptop"
                    size={32}
                    className="text-[#9b87f5] mb-2"
                  />
                  <p className="text-center text-slate-700">CAD/CAM системы</p>
                </div>
              </div>

              <p className="text-lg text-slate-700">
                Лаборатория открыта для студентов ежедневно с 10:00 до 20:00.
                Опытные наставники помогут вам реализовать ваши идеи и проекты.
              </p>

              <Button className="mt-8 bg-[#9b87f5] hover:bg-[#7E69AB]">
                Записаться на экскурсию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section id="achievements" className="py-20 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Наши достижения</h2>
            <div className="bg-[#9b87f5] h-1 w-20 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-white/80">
              За время работы студенческого бюро наши команды достигли
              значительных результатов на соревнованиях различного уровня.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-lg">
              <span className="text-5xl font-bold text-[#9b87f5] mb-2">
                15+
              </span>
              <p className="text-center text-white/80">
                призовых мест на российских соревнованиях
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-lg">
              <span className="text-5xl font-bold text-[#9b87f5] mb-2">5</span>
              <p className="text-center text-white/80">
                международных наград за инновационные проекты
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-lg">
              <span className="text-5xl font-bold text-[#9b87f5] mb-2">
                30+
              </span>
              <p className="text-center text-white/80">
                реализованных проектов для индустриальных партнеров
              </p>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Ключевые проекты</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-16 h-16 flex-shrink-0 bg-[#9b87f5] rounded-full flex items-center justify-center">
                  <Icon name="Bot" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Манипулятор РМ-5</h4>
                  <p className="text-white/80">
                    Робот-манипулятор с 5 степенями свободы, разработанный для
                    учебных целей. Занял 1 место на Всероссийской выставке
                    научно-технического творчества молодежи.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 flex-shrink-0 bg-[#9b87f5] rounded-full flex items-center justify-center">
                  <Icon name="Car" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Автономный транспортный робот
                  </h4>
                  <p className="text-white/80">
                    Робот для автоматизации внутрицеховой логистики. Внедрен на
                    производстве партнера университета и оптимизировал процесс
                    доставки деталей на 35%.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 flex-shrink-0 bg-[#9b87f5] rounded-full flex items-center justify-center">
                  <Icon name="Drone" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Дрон-инспектор</h4>
                  <p className="text-white/80">
                    Беспилотный летательный аппарат для осмотра промышленных
                    объектов. Получил грант на коммерциализацию от Фонда
                    содействия инновациям.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 flex-shrink-0 bg-[#9b87f5] rounded-full flex items-center justify-center">
                  <Icon name="Gamepad2" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Образовательный робототехнический комплекс
                  </h4>
                  <p className="text-white/80">
                    Набор для обучения основам робототехники. Используется в
                    профориентационной работе со школьниками и абитуриентами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Присоединяйтесь к нам */}
      <section className="py-20 bg-[#F2FCE2]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
            Присоединяйтесь к нам
          </h2>
          <div className="bg-[#9b87f5] h-1 w-20 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-slate-700">
            Мы приглашаем всех студентов МГТУ Станкин, увлеченных
            робототехникой, присоединиться к нашему бюро. Неважно, есть ли у вас
            опыт — главное желание учиться и создавать.
          </p>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg">
            Стать частью команды
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <span className="text-[#9b87f5] font-bold text-2xl">
                  СТАНКИН
                </span>
                <span className="ml-2 text-white font-normal">
                  Робототехника
                </span>
              </div>
              <p className="max-w-xs text-white/80">
                Студенческое бюро робототехники МГТУ им. Станкина — ваш путь в
                мир инженерных инноваций.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <p className="flex items-center gap-2 mb-2">
                <Icon name="MapPin" size={16} className="text-[#9b87f5]" />
                <span>Москва, Вадковский пер., 3А, ауд. 0517</span>
              </p>
              <p className="flex items-center gap-2 mb-2">
                <Icon name="Mail" size={16} className="text-[#9b87f5]" />
                <span>robotics@stankin.ru</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-[#9b87f5]" />
                <span>+7 (499) 123-45-67</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#9b87f5] transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-[#9b87f5] transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-[#9b87f5] transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
                <a href="#" className="hover:text-[#9b87f5] transition-colors">
                  <Icon name="Gitlab" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>
              © 2025 Студенческое бюро робототехники МГТУ Станкин. Все права
              защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
