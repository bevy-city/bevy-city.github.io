import { useTranslation } from 'react-i18next';

const people = [
    {
      name: 'Ladislav Janckulík',
      role: 'Founder/CEO',
      imageUrl:
        'https://i.ibb.co/XzYTbpG/l-aci3.png',
    },
    {
        name: 'Ondřej Koči',
        role: 'CSO & COO',
        imageUrl:
          'https://i.ibb.co/5vs8SS5/Ondrej-Koci.png',
      },
      {
        name: 'Vojtěch Procházka',
        role: 'Operation manager',
        imageUrl:
          'https://i.ibb.co/Br7yKTV/Vojtechprochazka.png',
      },
      {
        name: 'Lukáš Hudeček',
        role: 'CTO',
        imageUrl:
          'https://i.ibb.co/SnmcL7Q/lukas-Maine.png',
      },
      {
        name: 'Štěpán Vítek',
        role: 'Chief Dispatcher',
        imageUrl:
          'https://i.ibb.co/98nw0LJ/stepanmaine2.png',
      },
      
  ]
  
  export default function Example() {

    const { t } = useTranslation();
    return (
      <div className="bg-primary py-24 sm:py-32" id="#ourteam">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]  "> {t('translate.team')}</h2>
            
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-orange">{person.role}</p>
                  </div>
                  
                </div>
              </li>
              
            ))}
               <h2 className=" pt-20 text-3xl text-center font-bold tracking-tight text-orange sm:text-4xl">{t('translate.team1')}</h2>
          </ul>
          
        </div>
      </div>
    )
  }
  