export default function getArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
