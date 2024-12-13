import Head from "next/head";
import CareerModalForm from './CareerModalForm';

const Careers = ({ jobOpenings }) => {

  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Explore exciting career opportunities at our company." />
        <link rel="stylesheet" href="/css/careers.css" />
      </Head>
      <div className="container">
        <header className="header">
          <h2>Careers at Our Company</h2>
          <p>Join our innovative team and help us build cutting-edge technology!</p>
        </header>
        <section className="job-listings">
          {jobOpenings.length > 0 ? (
            jobOpenings.map((job, index) => (
              <div key={job.id} className="job-card">
                <h2>{job.heading}</h2>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Qualification:</strong> {job.qualification}</p>
                <p>{job.experience}</p>
                {/* <Link href={job.buttonLink}> */}
                  <CareerModalForm job={job} />                
                {/* </Link> */}
              </div>
            ))
          ) : (
            <></>
          )}
        </section>
      </div>
      {/* <style jsx>{`
        .container {
          font-family: var(--text-font);
          padding: 2rem;
          max-width: 800px;
          margin: auto;
        }
        .header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .job-listings {
          display: grid;
          gap: 1.5rem;
        }
        .job-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .job-card h2 {
          margin: 0 0 0.5rem 0;
        }
        .theme-btn {
          display: -webkit-inline-box;
          display: -ms-inline-flexbox;
          display: inline-flex;
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
          text-align: center;
          white-space: nowrap;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          z-index: 0;
          margin-right: 15px;
        }
        .theme-btn .btn-title {
          position: relative;
        }
        .apply-button {
          position: relative;
          font-size: 13px;
          line-height: 24px;
          padding: 15px 50px;
          font-weight: 700;
          letter-spacing: 0.1em;
          overflow: hidden;
          text-transform: uppercase;
          color: var(--theme-color1);
          background: var(--bg-theme-color2);
          border-radius: 50px;
          width: 150px;
        }
        .apply-button:before {
          position: absolute;
        left: 0;
        top: 0%;
        height: 100%;
        width: 100%;
        content: "";
        background-color: var(--bg-theme-color1);
        -webkit-transform: scale(1, 0);
                transform: scale(1, 0);
        -webkit-transform-origin: bottom left;
                transform-origin: bottom left;
        transition: -webkit-transform 500ms cubic-bezier(0.86, 0, 0.07, 1);
        -webkit-transition: -webkit-transform 500ms cubic-bezier(0.86, 0, 0.07, 1);
        transition: transform 500ms cubic-bezier(0.86, 0, 0.07, 1);
        transition: transform 500ms cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 500ms cubic-bezier(0.86, 0, 0.07, 1);
        -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
                transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
        z-index: -1;
        }
        .apply-button:hover:before {
          -webkit-transform-origin: top right;
                transform-origin: top right;
        -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
        }
        .apply-button:hover {
          color: #ffffff;
        -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .apply-button.hvr-light:hover {
          color: var(--theme-color2);
        }
        .apply-button.hvr-light:before {
          background-color: #ffffff;
        }
        .apply-button.bg-light:not(hover) {
          background-color: #ffffff !important;
        }
      `}
      </style> */}

    </>
  );
};

export default Careers;
