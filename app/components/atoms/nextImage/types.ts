export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string; // URL de la imagen
  alt: string; // Texto alternativo de la imagen
  className?: string; // Clases CSS adicionales
  width?: number; // Ancho de la imagen
  height?: number; // Alto de la imagen
}
