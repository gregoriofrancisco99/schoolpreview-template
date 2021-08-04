type props = {
  name: string;
  source: string;
  alt: string;
  url: string;
  target: string;
}

export function SocialLink(props: props) {
  return (
      <a href={props.url} target={props.target}>
        <img src={props.source} alt={props.alt} />
        <span className="hide">{props.name}</span></a>
  );
}