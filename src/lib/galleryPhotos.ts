import {Photo} from 'react-photo-album'

const galleryPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1658491830143-72808ca237e3?q=80&w=1673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1080,
    height: 780,
    alt: 'photo 1',
    title: 'Photo 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1672223550220-df93d147fa4c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1080,
    height: 1620,
    alt: 'photo 2',
    title: 'Photo 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1709587824751-dd30420f5cf3?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1080,
    height: 720,
    alt: 'photo 3',
    title: 'Photo 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1672223304549-9e52be1232b6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1080,
    height: 720,
    alt: 'photo 4',
    title: 'Photo 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1596559562942-fef1cd1a0171?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1080,
    height: 1620,
    alt: 'photo 5',
    title: 'Photo 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1672223303531-84de406fb2d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
    width: 1080,
    height: 607,
    alt: 'photo 6',
    title: 'Photo 6',
  },
  {
    src: 'https://images.unsplash.com/photo-1672223306947-620c13dd285c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1080,
    height: 608,
    alt: 'photo 7',
    title: 'Photo 7',
  },
  {
    src: 'https://images.unsplash.com/photo-1715333155074-b7be4dd57e77?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    width: 1080,
    height: 720,
    alt: 'photo 8',
    title: 'Photo 8',
  },
  {
    src: 'https://images.unsplash.com/photo-1715333148718-9895cdb142da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8',
    width: 1080,
    height: 1549,
    alt: 'photo 9',
    title: 'Photo 9',
  },
].map(({src, alt, width, height, title}) => ({src, alt, width, height, title}) as Photo)

export default galleryPhotos
