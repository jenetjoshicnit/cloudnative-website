import Head from "next/head";
import CareerModalForm from './CareerModalForm';

const Careers = ({ jobOpenings }) => {

  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Explore exciting career opportunities at our company." />
        {/* <link rel="stylesheet" href="/css/careers.css" /> */}
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
      <style jsx>{`
        .container {
          font-family: var(--text-font);
          padding: 2rem;
          max-width: 1200px;
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
      `}
      </style>

    </>
  );
};

export default Careers;
