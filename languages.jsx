

function Languages() {
    const languages = [
      { name: 'Arabic', link: 'Arabic.html' },
      { name: 'English', link: 'English.html' },
      { name: 'French', link: 'Fransh.html' },
      { name: 'Turkish', link: 'Turkish.html' },
      { name: 'Spanish', link: 'Spanish.html' },
      { name: 'Chinese', link: 'Chinese.html' },
    ];
    return (
      <section className="Languages py-5">
      <div className="container">
        <div className="card mx-auto" style={{ maxWidth: '900px' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 mb-4">
              <div className="txt-literature">
                  <h1>Literature</h1>
                  <div className="yellow-box p-3 mt-3 border rounded bg-warning text-white">

                    <p>
                      Literature includes written and oral works, and is often
                      considered arts such as novels and plays and poems. It serves as a means of recording,
                      preserving and sharing knowledge, entertainment and cultural values,
                      in addition to social, psychological, spiritual or political roles.
                      The definition also includes scientific writings across civilizations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  {languages.map((language, index) => (
                    <div className="col-6 col-md-4 mb-3" key={index}>
                      <div className="card">
                        <a
                          href={language.link}
                          className="card-body text-center text-decoration-none bg-light rounded"
                        >
                          <h5 className="card-title">{language.name}</h5>
                          </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
}
export default Languages;
