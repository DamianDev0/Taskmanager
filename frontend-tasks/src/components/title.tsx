
interface TitleProps {
  text: string; 
}

function Title({ text }: TitleProps) {
  return (
   
      <h1 className="text-4xl font-bold text-black">
        {text}
      </h1>
  );
}

export default Title;
