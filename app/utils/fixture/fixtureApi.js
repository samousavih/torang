import images from './images.json';


export function getImages() {
  return {
    ok: true,
    data: images,
  };
}
