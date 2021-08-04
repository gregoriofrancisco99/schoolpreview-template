type props = {
  name: string;
  url: string;
  target: string;
}

export function MenuItem(props: props) {
  return (
    <a href={props.url} target={props.target}><li>{props.name}</li></a>
  );
}