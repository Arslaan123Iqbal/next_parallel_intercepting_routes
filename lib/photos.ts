export type Photo = {
  id: string
  name: string
  href: string
  username: string
  imageSrc: string
}

const photos: Photo[] = [
  {
    id: '1',
    name: 'Kevin Canlas',
    href: 'https://twitter.com/kvncnls/status/1471832344986324998',
    username: '@kvncnls',
    imageSrc: 'https://images.unsplash.com/photo-1502236876560-243e78f715f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '2',
    name: 'Pedro Duarte',
    href: 'https://twitter.com/peduarte/status/1463897468383412231',
    username: '@peduarte',
    imageSrc: 'https://images.unsplash.com/photo-1617079114138-9cf245e006c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    name: 'Ahmad Awais',
    href: 'https://twitter.com/MrAhmadAwais/status/1338151679083032577',
    username: '@MrAhmadAwais',
    imageSrc: 'https://images.unsplash.com/photo-1621274283140-e4450435a76a?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '4',
    name: 'Leandro Soengas',
    href: 'https://twitter.com/lsoengas/status/1352302741339693061',
    username: '@lsoengas',
    imageSrc: 'https://images.unsplash.com/photo-1651762937096-3a898a6b062e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '5',
    name: 'Samina',
    href: 'https://images.unsplash.com/photo-1502236876560-243e78f715f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username: '@saminacodes',
    imageSrc: 'https://images.unsplash.com/photo-1613947263411-90c572f18d24?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '7',
    name: '山岸和利💛',
    href: 'https://twitter.com/ykzts/status/1426358452356407297',
    username: '@ykzts',
    imageSrc: 'https://images.unsplash.com/photo-1503411001699-1e92d65ca282?q=80&w=2858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '8',
    name: 'Altngelo',
    href: 'https://twitter.com/AfterDarkAngelo/status/1456372859090075648',
    username: '@AfterDarkAngelo',
    imageSrc: 'https://images.unsplash.com/photo-1600443640572-a3ecaf57bd9a?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '9',
    name: 'Matias Baldanza',
    href: 'https://twitter.com/matiasbaldanza/status/1404834163203715073',
    username: '@matiasbaldanza',
    imageSrc: 'https://images.unsplash.com/photo-1638731042030-2f298bdb931b?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export default photos
