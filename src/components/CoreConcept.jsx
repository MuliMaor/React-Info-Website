import "./CoreConcept.css"


//an alternative to the following function signiture is:
// function CoreConcept(props)
//however if we did that, we would need to use code like "props.title" every time in the function body
export default function CoreConcept({title, image, description})
{
  return (
    <li>
      <h2>{title}</h2>
    <img src ={image} alt={title}/>
    <p>{description}</p>
    </li>
  );
}