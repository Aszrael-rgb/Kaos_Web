export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  category: string
  badgeText?: string
  iconName: string
}

export interface GameItem {
  id: string
  title: string
  url: string
  category:
    | 'Classics'
    | 'Action'
    | 'Racing'
    | 'Indie'
    | 'Strategy'
    | 'Rhythm'
  isAlternative?: boolean
  description?: string
  bannerUrl?: string
}
