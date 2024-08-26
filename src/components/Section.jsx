import Card from "./Card";

function Section({name, content}) {

    
  return (
    <>
      <div className="second ml-4">
        <div className="latest">
          <h1>{name}</h1>

          <div className="row box">
            <Card movies={content}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
