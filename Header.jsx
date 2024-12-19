
function Languages() {
  return (
    <section className="Languages">
      <div className="container">
        <div className="row">
          <div className="txt-literature">
            <h1>literature </h1>
            <p>
              الأدب يشمل الأعمال المكتوبة والشفوية، وغالبًا ما يُعتبر فنونًا مثل الروايات والمسرحيات 
              والقصائد. إنه بمثابة وسيلة لتسجيل وحفظ ومشاركة المعرفة والترفيه والقيم الثقافية، 
              بالإضافة إلى أدوار اجتماعية أو نفسية أو روحانية أو سياسية. 
              ويشمل التعريف أيضًا الكتابات العلمية عبر الحضارات.
            </p>
          </div>
          <div className="cards">
            <div className="card-text">
              <a href="Arabic.html" className="box"> Arabic </a>
            </div>
            <div className="card-text">
              <a href="English.html" className="box">English</a>
            </div>
            <div className="card-text">
              <a href="Fransh.html" className="box">Fransh</a>
            </div>
            <div className="card-text">
              <a href="Turkish.html" className="box">Turkish</a>
            </div>
            <div className="card-text">
              <a href="Spanish.html" className="box">Spanish</a>
            </div>
            <div className="card-text">
              <a href="Chinese.html" className="box">Chinese</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;