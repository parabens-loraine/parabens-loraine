export function Video() {
  return (
    <video width={300} height={300} controls preload={'auto'} loop>
      <source src="/parabens.mp4" type="video/mp4" />
    </video>
  )
}
