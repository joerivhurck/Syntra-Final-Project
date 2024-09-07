//import axios from 'axios'

import type { TitleSidebarItem } from '@/components/models'

const titleSideBar: TitleSidebarItem[] = [
  { title: 'Opleidingen voor', filters: ['Bedrijfsopleidingen', 'Individueel'] },
  {
    title: 'sector',
    filters: [
      'Administratie en onthaal',
      'Beauty en wellness',
      'Bouw',
      'Dieren',
      'Drones',
      'Elektro en techniek',
      'Energie en HVAC',
      'Financiën',
      'Grafische en multimedia',
      'Groenvoorziening',
      'Horeca en voeding',
      'Informatica',
      'Interieur en ontwerpen',
      'Kunst, antiek en creatief design',
      'Management',
      'Mode en kledij',
      'Safety',
      'Sales, marketing en communicatie',
      'Sport',
      'Starten met ondernemen',
      'Toerisme',
      'Transport en logistiek',
      'Vastgoed',
      'Voertuigen en metaal',
      'Zorgverlening'
    ]
  },
  {
    title: 'Startdatum',
    filters: ['maart 2024', 'april 2024', 'mei 2024', 'juni 2024', 'juli 2024', 'augustus 2024']
  },
  {
    title: 'type',
    filters: [
      'Bedrijfsopleidingen',
      'Duaal leren',
      'Kortlopende opleidingen',
      'Langlopende opleidingen',
      'Online academy',
      'Online opleidingen',
      'PXL-opleidingen: flexibel studeren',
      'Voltijdse dagopleiding'
    ]
  },
  {
    title: 'Duur',
    filters: [
      'Korte duur - beperkte sessies',
      'tot 1 maand',
      '1 - 3 maanden',
      '3 - 6 maanden',
      '1 jaar',
      'langer dan 1 jaar'
    ]
  },
  {
    title: 'locaties',
    filters: ['Hasselt', 'Genk T2-campus', 'Pelt', 'ONLINE', 'Corda Campus nv', 'Bokrijk']
  },
  { title: 'Besparen Kmo portefeuille', filters: ['Besparen Kmo portefeuille'] },
  { title: 'Bijzonder kenmerk', filters: ['In de kijker', 'Knelpuntberoep', 'Nieuw'] },
  {
    title: 'Ik ben niet beschikbaar',
    filters: ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
  },
  { title: 'Niveau', filters: ['Beginner', 'Gevorderd', 'Expert'] },
  {
    title: 'Studievorm',
    filters: ['Campusleren', 'Hybride leren', 'Virtual Classroom', 'Online Leren']
  }
]

const useFilters = () => {
  const getFilters = (): Promise<TitleSidebarItem[]> => {
    return Promise.resolve(titleSideBar)
  }

  return { getFilters }
}

export { useFilters }
